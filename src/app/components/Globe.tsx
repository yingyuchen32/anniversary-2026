import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js';
import svgPaths from '../../imports/svg-cu40bjdp8m';

interface GlobeProps {
  globeVisible?: boolean;
}

export function Globe({ globeVisible = true }: GlobeProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const globeVisibleRef = useRef(globeVisible);

  // Keep ref in sync with prop
  useEffect(() => {
    globeVisibleRef.current = globeVisible;
  }, [globeVisible]);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 3;

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    containerRef.current.appendChild(renderer.domElement);

    // Create wireframe sphere (globe) with only x-axis grid lines (latitude lines)
    const globeGroup = new THREE.Group();
    
    // Create horizontal circles (latitude lines)
    const segments = 18;
    const radius = 1.2;
    
    for (let i = 0; i <= segments; i++) {
      const theta = (i / segments) * Math.PI; // 0 to PI
      const y = radius * Math.cos(theta);
      const circleRadius = radius * Math.sin(theta);
      
      if (circleRadius > 0.01) { // Skip poles where radius is too small
        const circleGeometry = new THREE.CircleGeometry(circleRadius, 64);
        const edges = new THREE.EdgesGeometry(circleGeometry);
        const line = new THREE.LineSegments(
          edges,
          new THREE.LineBasicMaterial({ 
            color: 0x00d4ff,
            transparent: true,
            opacity: 0.8,
          })
        );
        line.position.y = y;
        line.rotation.x = Math.PI / 2;
        globeGroup.add(line);
      }
    }
    
    scene.add(globeGroup);

    // ── Coordinate axis rings (armillary sphere style, fixed in world space) ──
    const axisRingRadius = 1.52;
    const axisRingSegments = 128;
    const axisRingColor = 0xffffff;

    const createRing = (rotationX: number, rotationY: number, rotationZ: number, opacity: number) => {
      const points: THREE.Vector3[] = [];
      for (let i = 0; i <= axisRingSegments; i++) {
        const angle = (i / axisRingSegments) * Math.PI * 2;
        points.push(new THREE.Vector3(Math.cos(angle) * axisRingRadius, Math.sin(angle) * axisRingRadius, 0));
      }
      const geo = new THREE.BufferGeometry().setFromPoints(points);
      const mat = new THREE.LineBasicMaterial({
        color: axisRingColor,
        transparent: true,
        opacity,
      });
      const ring = new THREE.LineLoop(geo, mat);
      ring.rotation.set(rotationX, rotationY, rotationZ);
      return ring;
    };

    // Three axis rings: equatorial (XZ plane), meridian front (XY), meridian side (YZ)
    const axisGroup = new THREE.Group();
    axisGroup.add(createRing(Math.PI / 2, 0, 0, 0.4));           // equatorial ring (horizontal)
    axisGroup.add(createRing(0, 0, 0, 0.4));                     // meridian ring (vertical, facing camera)
    axisGroup.add(createRing(0, Math.PI / 2, 0, 0.4));           // meridian ring (side)

    // Small tick marks along each ring
    const createTicks = (rotationX: number, rotationY: number, rotationZ: number, count: number) => {
      const tickGroup = new THREE.Group();
      const innerR = axisRingRadius - 0.04;
      const outerR = axisRingRadius + 0.04;
      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2;
        const isMajor = i % (count / 4) === 0;
        const ir = isMajor ? innerR - 0.025 : innerR;
        const or = isMajor ? outerR + 0.025 : outerR;
        const pts = [
          new THREE.Vector3(Math.cos(angle) * ir, Math.sin(angle) * ir, 0),
          new THREE.Vector3(Math.cos(angle) * or, Math.sin(angle) * or, 0),
        ];
        const geo = new THREE.BufferGeometry().setFromPoints(pts);
        const mat = new THREE.LineBasicMaterial({
          color: axisRingColor,
          transparent: true,
          opacity: isMajor ? 0.4 : 0.18,
        });
        tickGroup.add(new THREE.LineSegments(geo, mat));
      }
      tickGroup.rotation.set(rotationX, rotationY, rotationZ);
      return tickGroup;
    };

    axisGroup.add(createTicks(Math.PI / 2, 0, 0, 48));
    axisGroup.add(createTicks(0, 0, 0, 48));
    axisGroup.add(createTicks(0, Math.PI / 2, 0, 48));

    scene.add(axisGroup);
    // ── End axis rings ──

    // Create starfield background
    const starCount = 1200;
    const starPositions = new Float32Array(starCount * 3);
    const starSizes = new Float32Array(starCount);
    for (let i = 0; i < starCount; i++) {
      // Distribute stars on a large sphere around the scene
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 18 + Math.random() * 12;
      starPositions[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      starPositions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      starPositions[i * 3 + 2] = r * Math.cos(phi);
      starSizes[i] = Math.random() * 1.8 + 0.4;
    }
    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeometry.setAttribute('size', new THREE.BufferAttribute(starSizes, 1));

    const starMaterial = new THREE.PointsMaterial({
      color: 0xffffff,
      sizeAttenuation: true,
      transparent: true,
      opacity: 0.85,
      size: 0.06,
    });
    const stars = new THREE.Points(starGeometry, starMaterial);
    scene.add(stars);

    // ── Volumetric cloud/fog sprites ──
    // Generate a soft radial cloud texture via canvas
    const createCloudTexture = (colorR: number, colorG: number, colorB: number) => {
      const size = 256;
      const canvas = document.createElement('canvas');
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext('2d')!;
      const cx = size / 2, cy = size / 2;

      // Layered soft blobs to mimic nebula cloud
      const blobs = [
        { x: cx,                    y: cy,                    r: size * 0.50 },
        { x: cx - size * 0.15,     y: cy + size * 0.10,      r: size * 0.35 },
        { x: cx + size * 0.16,     y: cy - size * 0.12,      r: size * 0.30 },
        { x: cx + size * 0.05,     y: cy + size * 0.16,      r: size * 0.24 },
        { x: cx - size * 0.08,     y: cy - size * 0.18,      r: size * 0.20 },
      ];
      for (const b of blobs) {
        const grad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, b.r);
        grad.addColorStop(0,    `rgba(${colorR},${colorG},${colorB},0.22)`);
        grad.addColorStop(0.35, `rgba(${colorR},${colorG},${colorB},0.08)`);
        grad.addColorStop(0.70, `rgba(${colorR},${colorG},${colorB},0.02)`);
        grad.addColorStop(1,    `rgba(${colorR},${colorG},${colorB},0)`);
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, size, size);
      }
      return new THREE.CanvasTexture(canvas);
    };

    // Cloud sprite data — colors tuned to match background gradient hues exactly
    // 0 = background purple (88,28,135), 1 = dark navy-blue (30,58,138), 2 = deep cyan-blue (6,78,112)
    type CloudVariant = 0 | 1 | 2;
    const cloudConfigs: Array<{ x: number; y: number; z: number; scale: number; rot: number; variant: CloudVariant; driftX: number; driftY: number }> = [
      { x: -4.5, y:  2.2, z: -6,  scale: 11,  rot: 0.3,  variant: 0, driftX: 0.00008, driftY: 0.00005 },
      { x:  4.2, y: -1.8, z: -7,  scale: 12,  rot: -0.6, variant: 1, driftX:-0.00006, driftY: 0.00007 },
      { x: -1.0, y: -3.5, z: -5,  scale: 10,  rot: 1.1,  variant: 2, driftX: 0.00007, driftY:-0.00006 },
      { x:  2.5, y:  3.8, z: -8,  scale: 13,  rot: -0.2, variant: 0, driftX:-0.00005, driftY:-0.00004 },
      { x: -5.5, y: -0.5, z: -9,  scale: 14,  rot: 0.8,  variant: 1, driftX: 0.00004, driftY: 0.00009 },
      { x:  5.0, y:  1.2, z: -10, scale: 15,  rot: -1.0, variant: 2, driftX:-0.00009, driftY: 0.00003 },
    ];

    const cloudTextures = [
      createCloudTexture(88,  28, 135), // match background purple
      createCloudTexture(30,  58, 138), // match background dark blue
      createCloudTexture( 6,  78, 112), // match background cyan-blue
    ];

    const cloudSprites: THREE.Sprite[] = [];
    for (const cfg of cloudConfigs) {
      const mat = new THREE.SpriteMaterial({
        map: cloudTextures[cfg.variant],
        transparent: true,
        opacity: 0.55,           // higher opacity but texture itself is very soft
        blending: THREE.NormalBlending,  // normal blend — tints rather than brightens
        depthWrite: false,
      });
      const sprite = new THREE.Sprite(mat);
      sprite.position.set(cfg.x, cfg.y, cfg.z);
      sprite.scale.set(cfg.scale, cfg.scale, 1);
      sprite.material.rotation = cfg.rot;
      sprite.userData = { driftX: cfg.driftX, driftY: cfg.driftY, baseX: cfg.x, baseY: cfg.y };
      scene.add(sprite);
      cloudSprites.push(sprite);
    }
    // ── End cloud sprites ──

    // Subtle twinkle: animate star opacity
    let twinkleTime = 0;

    // Glow mesh references for animation
    const glowMeshes: { mesh: THREE.Mesh; baseOpacity: number }[] = [];

    // Create Taiwan wireframe using the exact Figma SVG path
    const createTaiwanWireframe = () => {
      const loader = new SVGLoader();
      // Parse the Taiwan SVG path (viewBox: 0 0 76 145)
      const svgMarkup = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 76 145"><path d="${svgPaths.p2e958400}"/></svg>`;
      const svgData = loader.parse(svgMarkup);

      // SVG bounding box center (viewBox 76x145)
      const svgCenterX = 38;
      const svgCenterY = 72.5;
      // Scale so Taiwan fits nicely inside the globe sphere
      const scale = 0.003;

      const taiwanGroup = new THREE.Group();
      const material = new THREE.LineBasicMaterial({
        color: 0x00d4ff,
        transparent: true,
        opacity: 1,
      });

      // Glow halo layers: scale factor and base opacity
      // Gaussian-like falloff — smooth exponential spread outward
      const glowLayers = [
        { scale: 1.04, opacity: 0.60 },
        { scale: 1.10, opacity: 0.40 },
        { scale: 1.20, opacity: 0.22 },
        { scale: 1.35, opacity: 0.12 },
        { scale: 1.55, opacity: 0.06 },
        { scale: 1.85, opacity: 0.025 },
        { scale: 2.30, opacity: 0.010 },
        { scale: 3.00, opacity: 0.004 },
      ];

      for (const path of svgData.paths) {
        const shapes = SVGLoader.createShapes(path);
        for (const shape of shapes) {
          // Sample points along the shape outline
          const points2D = shape.getPoints(80);
          const points3D = points2D.map(
            (p) =>
              new THREE.Vector3(
                (p.x - svgCenterX) * scale,
                -(p.y - svgCenterY) * scale, // invert Y (SVG Y-down → Three Y-up)
                0
              )
          );
          const geometry = new THREE.BufferGeometry().setFromPoints(points3D);
          const line = new THREE.LineLoop(geometry, material);
          taiwanGroup.add(line);

          // Build the 2D shape for fill meshes
          const fillPoints2D = points2D.map((p) => new THREE.Vector2(
            (p.x - svgCenterX) * scale,
            -(p.y - svgCenterY) * scale
          ));
          const fillShape = new THREE.Shape(fillPoints2D);

          // Main fill: semi-transparent base — also part of breathe cycle
          const fillGeometry = new THREE.ShapeGeometry(fillShape);
          const fillMesh = new THREE.Mesh(
            fillGeometry,
            new THREE.MeshBasicMaterial({
              color: 0x00d4ff,
              transparent: true,
              opacity: 0.35,
              side: THREE.DoubleSide,
              depthWrite: false,
              blending: THREE.AdditiveBlending,
            })
          );
          taiwanGroup.add(fillMesh);
          glowMeshes.push({ mesh: fillMesh, baseOpacity: 0.35 });

          // Glow halo layers — each successively larger, fading with Gaussian curve
          for (const layer of glowLayers) {
            const glowGeometry = new THREE.ShapeGeometry(fillShape);
            const glowMat = new THREE.MeshBasicMaterial({
              color: 0x00d4ff,
              transparent: true,
              opacity: layer.opacity,
              side: THREE.DoubleSide,
              depthWrite: false,
              blending: THREE.AdditiveBlending,
            });
            const glowMesh = new THREE.Mesh(glowGeometry, glowMat);
            glowMesh.scale.set(layer.scale, layer.scale, layer.scale);
            glowMesh.position.z = -0.001 * glowLayers.indexOf(layer); // slight z-offset per layer to avoid z-fighting
            taiwanGroup.add(glowMesh);
            glowMeshes.push({ mesh: glowMesh, baseOpacity: layer.opacity });
          }

          // Soft radial bloom sprite centered on Taiwan for a natural core glow
          (() => {
            const bloomCanvas = document.createElement('canvas');
            bloomCanvas.width = 128;
            bloomCanvas.height = 128;
            const bctx = bloomCanvas.getContext('2d')!;
            const bcx = 64, bcy = 64;
            const bloomGrad = bctx.createRadialGradient(bcx, bcy, 0, bcx, bcy, 64);
            bloomGrad.addColorStop(0,    'rgba(0, 212, 255, 0.55)');
            bloomGrad.addColorStop(0.15, 'rgba(0, 212, 255, 0.30)');
            bloomGrad.addColorStop(0.40, 'rgba(0, 180, 255, 0.12)');
            bloomGrad.addColorStop(0.70, 'rgba(0, 100, 200, 0.04)');
            bloomGrad.addColorStop(1,    'rgba(0,   0, 100, 0)');
            bctx.fillStyle = bloomGrad;
            bctx.fillRect(0, 0, 128, 128);
            const bloomTex = new THREE.CanvasTexture(bloomCanvas);
            const bloomMat = new THREE.SpriteMaterial({
              map: bloomTex,
              transparent: true,
              opacity: 0.9,
              blending: THREE.AdditiveBlending,
              depthWrite: false,
            });
            const bloomSprite = new THREE.Sprite(bloomMat);
            // Taiwan centroid roughly at SVG (38, 80) → 3D
            bloomSprite.position.set(0, -(80 - 72.5) * 0.003, 0.001);
            bloomSprite.scale.set(0.55, 0.55, 1);
            taiwanGroup.add(bloomSprite);
            glowMeshes.push({ mesh: bloomSprite as unknown as THREE.Mesh, baseOpacity: 0.9 });
          })();
        }
      }

      return taiwanGroup;
    };
    
    const taiwanWireframe = createTaiwanWireframe();
    globeGroup.add(taiwanWireframe);

    // Mouse interaction variables
    let isDragging = false;
    let previousMousePosition = { x: 0, y: 0 };

    // Mouse event handlers with improved 360-degree rotation
    const handleMouseDown = (event: MouseEvent) => {
      isDragging = true;
      previousMousePosition = {
        x: event.clientX,
        y: event.clientY,
      };
    };

    const handleMouseMove = (event: MouseEvent) => {
      if (!isDragging) return;

      const deltaX = event.clientX - previousMousePosition.x;
      const deltaY = event.clientY - previousMousePosition.y;

      // Calculate rotation based on mouse movement
      const rotationSpeed = 0.01;
      
      // Create rotation quaternion for smooth 360-degree rotation
      const euler = new THREE.Euler(
        deltaY * rotationSpeed,
        deltaX * rotationSpeed,
        0,
        'XYZ'
      );
      
      const quaternion = new THREE.Quaternion().setFromEuler(euler);
      globeGroup.quaternion.multiplyQuaternions(quaternion, globeGroup.quaternion);

      previousMousePosition = {
        x: event.clientX,
        y: event.clientY,
      };
    };

    const handleMouseUp = () => {
      isDragging = false;
    };

    // Add mouse event listeners
    renderer.domElement.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);

    // Scroll to rotate globe (horizontal scroll = Y axis, vertical scroll = X axis)
    let scrollVelocityY = 0;        // accumulated Y-axis angular velocity from scroll
    let scrollVelocityX = 0;        // accumulated X-axis angular velocity from scroll
    const scrollDamping = 0.92;     // per-frame decay (lower = stops faster, higher = more inertia)
    const scrollSpeed = 0.0012;

    const handleWheel = (event: WheelEvent) => {
      event.preventDefault();
      // Accumulate velocity instead of rotating directly — gives natural globe-spin inertia
      scrollVelocityY += event.deltaY * scrollSpeed;
      scrollVelocityX += event.deltaX * scrollSpeed * 0.5;
    };
    renderer.domElement.addEventListener('wheel', handleWheel, { passive: false });

    // Add point light for depth
    const pointLight = new THREE.PointLight(0xffffff, 1, 100);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    // Add ambient light
    const ambientLight = new THREE.AmbientLight(0x404040);
    scene.add(ambientLight);

    // Animation loop
    let glowTime = 0;
    let rafId: number;
    let isActive = true;
    // Smoothly lerped opacity for globe objects (0 = hidden, 1 = visible)
    let globeLerped = globeVisibleRef.current ? 1 : 0;

    const animate = () => {
      if (!isActive) return;
      rafId = requestAnimationFrame(animate);

      // Lerp globe opacity toward target
      const target = globeVisibleRef.current ? 1 : 0;
      globeLerped += (target - globeLerped) * 0.04;

      // Twinkle effect
      twinkleTime += 0.008;
      starMaterial.opacity = 0.7 + Math.sin(twinkleTime) * 0.15;

      // Slow cloud drift
      const t = performance.now() * 0.001;
      for (const sprite of cloudSprites) {
        const { baseX, baseY, driftX, driftY } = sprite.userData;
        sprite.position.x = baseX + Math.sin(t * driftX * 1000 + baseX) * 0.6;
        sprite.position.y = baseY + Math.cos(t * driftY * 1000 + baseY) * 0.4;
      }

      // Pulsing glow animation for Taiwan halos
      glowTime += 0.018;
      // Smooth ease: slow inhale, fast exhale — like a natural breath
      const rawPulse = Math.sin(glowTime);
      // Map [-1,1] → [0.08, 1.0] with a soft curve
      const pulse = 0.08 + 0.92 * Math.pow((rawPulse + 1) / 2, 1.6);
      for (const { mesh, baseOpacity } of glowMeshes) {
        (mesh.material as THREE.MeshBasicMaterial).opacity = baseOpacity * pulse;
      }

      // Apply scroll inertia — smoothly decays each frame for a globe-spin feel
      if (Math.abs(scrollVelocityY) > 0.00001 || Math.abs(scrollVelocityX) > 0.00001) {
        const scrollEuler = new THREE.Euler(scrollVelocityX, scrollVelocityY, 0, 'XYZ');
        const scrollQ = new THREE.Quaternion().setFromEuler(scrollEuler);
        globeGroup.quaternion.multiplyQuaternions(scrollQ, globeGroup.quaternion);
        scrollVelocityY *= scrollDamping;
        scrollVelocityX *= scrollDamping;
      }

      // Only auto-rotate when not dragging (using quaternion for consistency)
      if (!isDragging) {
        const tiltAngle = -8 * (Math.PI / 180); // -8 degrees tilt
        const rotationAxis = new THREE.Vector3(Math.sin(tiltAngle), Math.cos(tiltAngle), 0).normalize();
        const autoRotationQuaternion = new THREE.Quaternion().setFromAxisAngle(rotationAxis, 0.003);
        globeGroup.quaternion.multiplyQuaternions(autoRotationQuaternion, globeGroup.quaternion);
      }

      // Normalize every frame to prevent floating-point drift from accumulating
      // (repeated quaternion multiplication causes denormalization over ~600 frames)
      globeGroup.quaternion.normalize();
      
      // Apply globe opacity to all globe/axis/taiwan materials
      globeGroup.traverse((obj) => {
        if ((obj as THREE.LineSegments).material) {
          const mat = (obj as THREE.LineSegments).material as THREE.Material & { opacity?: number };
          if (mat.transparent && mat.opacity !== undefined) {
            // Store base opacity on first use
            if ((obj as any).__baseOpacity === undefined) {
              (obj as any).__baseOpacity = mat.opacity;
            }
            mat.opacity = (obj as any).__baseOpacity * globeLerped;
          }
        }
      });
      axisGroup.traverse((obj) => {
        if ((obj as THREE.LineSegments).material) {
          const mat = (obj as THREE.LineSegments).material as THREE.Material & { opacity?: number };
          if (mat.transparent && mat.opacity !== undefined) {
            if ((obj as any).__baseOpacity === undefined) {
              (obj as any).__baseOpacity = mat.opacity;
            }
            mat.opacity = (obj as any).__baseOpacity * globeLerped;
          }
        }
      });

      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      isActive = false;
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', handleResize);
      renderer.domElement.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
      renderer.domElement.removeEventListener('wheel', handleWheel);
      containerRef.current?.removeChild(renderer.domElement);
      globeGroup.children.forEach(child => {
        if (child instanceof THREE.LineSegments) {
          child.geometry.dispose();
          (child.material as THREE.Material).dispose();
        }
      });
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute inset-0 flex items-center justify-center cursor-grab active:cursor-grabbing"
    />
  );
}
