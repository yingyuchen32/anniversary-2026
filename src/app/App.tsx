import { Suspense, lazy, useEffect, useRef, useState } from 'react';
import svgPaths from '../imports/svg-cu40bjdp8m';

const Globe = lazy(async () => {
  const module = await import('./components/Globe');
  return { default: module.Globe };
});

const PHOTO_CARD_THEMES = [
  { title: 'Taipei', label: '台北', meta: '城市夜景', description: '高樓燈海與城市脈動，在夜色中把台灣的節奏點亮。', colors: ['#7dd3fc', '#1d4ed8', '#0f172a'] },
  { title: 'Night', label: '夜色', meta: '星空光影', description: '深藍和紫光交疊，像把旅途記憶收進安靜的夜空。', colors: ['#c084fc', '#4338ca', '#0f172a'] },
  { title: 'Ocean', label: '海洋', meta: '沿岸風景', description: '海風、浪線和遠方地平線，把島嶼感慢慢推到眼前。', colors: ['#67e8f9', '#0f766e', '#082f49'] },
  { title: 'Sunrise', label: '日出', meta: '晨光時刻', description: '第一道光灑進畫面時，整顆球體像重新被喚醒。', colors: ['#f9a8d4', '#fb7185', '#7c2d12'] },
  { title: 'Forest', label: '森林', meta: '山林空氣', description: '綠意和霧氣疊成一層柔和深度，讓球體更有呼吸感。', colors: ['#86efac', '#15803d', '#052e16'] },
  { title: 'City', label: '街景', meta: '都會片段', description: '街道與燈光切面被拼進球體，像城市的記憶碎片。', colors: ['#fde68a', '#f59e0b', '#451a03'] },
  { title: 'Sky', label: '天空', meta: '高空雲層', description: '雲層的漸層與留白，讓整體節奏有更開闊的停頓。', colors: ['#bfdbfe', '#3b82f6', '#172554'] },
  { title: 'Glow', label: '微光', meta: '霓虹色溫', description: '一點帶紫的亮光，替畫面加上比較夢幻的情緒。', colors: ['#f5d0fe', '#d946ef', '#3b0764'] },
  { title: 'Island', label: '島嶼', meta: '海島印象', description: '把島嶼的顏色和溫度濃縮成一張小小的視覺切片。', colors: ['#99f6e4', '#14b8a6', '#134e4a'] },
  { title: 'Cloud', label: '雲層', meta: '空氣層次', description: '柔霧和灰藍色調讓照片球不只立體，也更有空氣感。', colors: ['#e2e8f0', '#64748b', '#1e293b'] },
  { title: 'Dawn', label: '破曉', meta: '暖色光線', description: '暖橘色把整體冷色畫面稍微拉回人與溫度。', colors: ['#fdba74', '#ea580c', '#431407'] },
  { title: 'Aurora', label: '極光', meta: '流動色帶', description: '像流動絲帶一樣的光，替球面增加一點漂浮感。', colors: ['#a7f3d0', '#22c55e', '#052e16'] },
] as const;

function createPhotoSvg(label: string, colors: readonly string[]) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 280 360">
      <defs>
        <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${colors[0]}" />
          <stop offset="52%" stop-color="${colors[1]}" />
          <stop offset="100%" stop-color="${colors[2]}" />
        </linearGradient>
      </defs>
      <rect width="280" height="360" rx="26" fill="url(#bg)" />
      <circle cx="80" cy="92" r="42" fill="rgba(255,255,255,0.20)" />
      <path d="M0 252 C38 210 78 206 122 234 C156 255 188 255 224 220 C246 198 264 192 280 196 V360 H0 Z" fill="rgba(255,255,255,0.22)" />
      <path d="M0 284 C52 248 95 244 138 270 C171 289 215 294 280 250 V360 H0 Z" fill="rgba(15,23,42,0.28)" />
      <rect x="22" y="22" width="236" height="316" rx="18" fill="none" stroke="rgba(255,255,255,0.24)" />
      <text x="26" y="314" fill="white" font-size="28" font-family="Helvetica, Arial, sans-serif" letter-spacing="5">${label.toUpperCase()}</text>
    </svg>
  `;

  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

const PHOTO_SPHERE_ITEMS = PHOTO_CARD_THEMES.map((theme, index) => {
  const angleY = (360 / PHOTO_CARD_THEMES.length) * index;
  const angleX = index % 2 === 0 ? -22 : 18;
  return {
    id: `${theme.title}-${index}`,
    title: theme.title,
    label: theme.label,
    meta: theme.meta,
    description: theme.description,
    src: createPhotoSvg(theme.title, theme.colors),
    finalTransform: `rotateY(${angleY}deg) rotateX(${angleX}deg) translateZ(clamp(185px, 27vw, 340px)) scale(1)`,
    initialTransform: `rotateY(${angleY}deg) rotateX(${angleX}deg) translateZ(0px) scale(0.18)`,
    delay: `${index * 70}ms`,
  };
});

function PhotoSphere({
  visible,
  onSelect,
}: {
  visible: boolean;
  onSelect: (item: (typeof PHOTO_SPHERE_ITEMS)[number]) => void;
}) {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'scale(1)' : 'scale(0.86)',
        transition: 'opacity 1.2s cubic-bezier(0.22, 1, 0.36, 1), transform 1.4s cubic-bezier(0.22, 1, 0.36, 1)',
        pointerEvents: visible ? 'auto' : 'none',
      }}
    >
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 'min(72vw, 760px)',
          height: 'min(72vw, 760px)',
          background: 'radial-gradient(circle, rgba(34,211,238,0.16) 0%, rgba(34,211,238,0.05) 28%, transparent 68%)',
          filter: 'blur(24px)',
        }}
      />

      <div
        style={{
          width: 'min(82vw, 900px)',
          height: 'min(82vw, 900px)',
          position: 'relative',
          transformStyle: 'preserve-3d',
          animation: 'photoSphereSpin 28s linear infinite',
        }}
      >
        {PHOTO_SPHERE_ITEMS.map((item) => (
          <button
            key={item.id}
            type="button"
            onClick={() => onSelect(item)}
            className="absolute left-1/2 top-1/2 overflow-hidden"
            style={{
              width: 'clamp(76px, 8.5vw, 112px)',
              aspectRatio: '1 / 1',
              marginLeft: 'clamp(-38px, -4.25vw, -56px)',
              marginTop: 'clamp(-38px, -4.25vw, -56px)',
              borderRadius: 22,
              border: '1px solid rgba(255,255,255,0.28)',
              background: 'rgba(255,255,255,0.08)',
              boxShadow: '0 14px 40px rgba(2,6,23,0.32), 0 0 24px rgba(34,211,238,0.12)',
              transformStyle: 'preserve-3d',
              opacity: visible ? 1 : 0,
              transform: visible ? item.finalTransform : item.initialTransform,
              transition: 'transform 1.25s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.75s ease',
              transitionDelay: visible ? item.delay : '0ms',
              backdropFilter: 'blur(8px)',
              cursor: 'pointer',
            }}
          >
            <img
              src={item.src}
              alt={item.label}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

function IntroLoader({ isExiting }: { isExiting: boolean }) {
  const easing = 'cubic-bezier(0.22, 1, 0.36, 1)';

  return (
    <div
      className="absolute inset-0 z-30 flex items-center justify-center overflow-hidden"
      style={{
        opacity: isExiting ? 0 : 1,
        transition: `opacity 0.9s ${easing}`,
        backdropFilter: isExiting ? 'blur(0px)' : 'blur(18px)',
        background: isExiting
          ? 'radial-gradient(circle at center, rgba(2,6,23,0) 0%, rgba(2,6,23,0.08) 45%, rgba(2,6,23,0.2) 100%)'
          : 'radial-gradient(circle at center, rgba(2,6,23,0.18) 0%, rgba(2,6,23,0.42) 34%, rgba(2,6,23,0.84) 100%)',
      }}
    >
      <div
        className="absolute inset-0"
        style={{
          background: isExiting
            ? 'radial-gradient(circle at center, rgba(34,211,238,0.06) 0%, transparent 34%, rgba(1,4,13,0.12) 76%, rgba(1,4,13,0.26) 100%)'
            : 'radial-gradient(circle at center, rgba(34,211,238,0.14) 0%, transparent 26%, rgba(1,4,13,0.44) 64%, rgba(1,4,13,0.78) 100%)',
        }}
      />

      <div
        className="absolute"
        style={{
          width: 'min(80vw, 880px)',
          height: 'min(80vw, 880px)',
          borderRadius: '50%',
          background:
          'radial-gradient(circle, rgba(34,211,238,0.08) 0%, rgba(34,211,238,0.03) 28%, transparent 62%)',
          filter: 'blur(8px)',
          animation: 'loaderPulse 3.2s ease-in-out infinite',
        }}
      />

      <div
        className="absolute"
        style={{
          width: 'min(42vw, 420px)',
          height: 'min(42vw, 420px)',
          borderRadius: '50%',
          border: '1px solid rgba(125, 211, 252, 0.14)',
          opacity: isExiting ? 0.35 : 0.8,
          transform: isExiting ? 'scale(1.08)' : 'scale(0.9)',
          transition: `opacity 0.9s ${easing}, transform 1.2s ${easing}`,
          animation: 'loaderSpin 16s linear infinite',
        }}
      />

      <div
        className="relative z-10 flex flex-col items-center justify-center px-6"
        style={{ width: 'min(68vw, 520px)', animation: 'loaderRise 1.2s ease-out both' }}
      >
        <div
          className="relative"
          style={{
            width: 'min(44vw, 420px)',
            height: 'min(44vw, 420px)',
            maxWidth: 420,
            maxHeight: 420,
          }}
        >
          <div
            className="absolute left-1/2 top-1/2 rounded-full"
            style={{
              width: 14,
              height: 14,
              marginLeft: -7,
              marginTop: -7,
              background: 'radial-gradient(circle, rgba(224,242,254,1) 0%, rgba(34,211,238,0.9) 45%, rgba(34,211,238,0) 100%)',
              boxShadow: '0 0 24px rgba(34, 211, 238, 0.95)',
              animation: 'loaderCore 2.8s ease-out forwards',
            }}
          />

          <div
            className="absolute inset-[12%] rounded-full"
            style={{
              border: '1px solid rgba(125, 211, 252, 0.18)',
              opacity: 0,
              transform: 'scale(0.8)',
              animation: 'orbitFade 2.6s ease-out 0.4s forwards',
            }}
          />

          <div
            className="absolute inset-[-10%] rounded-full"
            style={{
              borderTop: '2px solid rgba(103, 232, 249, 0.78)',
              borderRight: '2px solid rgba(255, 255, 255, 0.06)',
              borderBottom: '2px solid rgba(56, 189, 248, 0.15)',
              borderLeft: '2px solid rgba(14, 165, 233, 0.28)',
              boxShadow: '0 0 28px rgba(34, 211, 238, 0.18)',
              opacity: 0,
              animation: 'orbitFade 2.1s ease-out 1.1s forwards, loaderSpin 7s linear 1.1s infinite',
            }}
          />
        </div>

        <div
          className="mt-8 text-center"
          style={{ animation: 'loaderRise 1s ease-out 0.75s both' }}
        >
          <p
            className="uppercase"
            style={{
              color: 'rgba(125, 211, 252, 0.84)',
              letterSpacing: '0.45em',
              fontSize: '0.68rem',
              marginBottom: '0.85rem',
            }}
          >
            Taiwan to World
          </p>
          <p
            style={{
              color: 'rgba(226, 232, 240, 0.88)',
              fontSize: 'clamp(1rem, 2.5vw, 1.2rem)',
              letterSpacing: '0.28em',
            }}
          >
            LOADING
          </p>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoaderExiting, setIsLoaderExiting] = useState(false);
  const [scrollCount, setScrollCount] = useState(0);
  const [phase, setPhase] = useState<'globe' | 'story'>('globe');
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');
  const [storyTextVisible, setStoryTextVisible] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<(typeof PHOTO_SPHERE_ITEMS)[number] | null>(null);
  const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isDebouncing = useRef(false);
  const MAX_SCROLLS = 3;

  useEffect(() => {
    const exitTimer = setTimeout(() => {
      setIsLoaderExiting(true);
    }, 2200);

    const removeTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(exitTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  useEffect(() => {
    const preloadTimer = setTimeout(() => {
      void import('./components/Globe');
    }, 150);

    return () => {
      clearTimeout(preloadTimer);
    };
  }, []);

  // Sync phase with scrollCount
  useEffect(() => {
    if (scrollCount >= MAX_SCROLLS && phase !== 'story') {
      setDirection('forward');
      setPhase('story');
    } else if (scrollCount < MAX_SCROLLS && phase !== 'globe') {
      setDirection('backward');
      setPhase('globe');
    }
  }, [scrollCount, phase]);

  useEffect(() => {
    if (phase !== 'story') {
      setStoryTextVisible(false);
      setSelectedPhoto(null);
      return;
    }

    setStoryTextVisible(true);
    const fadeTimer = setTimeout(() => {
      setStoryTextVisible(false);
    }, 1800);

    return () => {
      clearTimeout(fadeTimer);
    };
  }, [phase]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isDebouncing.current) return;
      isDebouncing.current = true;

      if (e.deltaY > 0) {
        setScrollCount(prev => Math.min(prev + 1, MAX_SCROLLS));
      } else {
        setScrollCount(prev => Math.max(prev - 1, 0));
      }

      if (debounceTimer.current) clearTimeout(debounceTimer.current);
      debounceTimer.current = setTimeout(() => {
        isDebouncing.current = false;
      }, 400);
    };

    window.addEventListener('wheel', handleWheel, { passive: true });
    return () => {
      window.removeEventListener('wheel', handleWheel);
      if (debounceTimer.current) clearTimeout(debounceTimer.current);
    };
  }, []);

  const easing = 'cubic-bezier(0.4, 0, 0.2, 1)';

  const storyVisible = phase === 'story';
  const textTranslate = storyTextVisible
    ? 'translateY(0)'
    : direction === 'forward'
      ? 'translateY(-18px)'
      : 'translateY(18px)';

  return (
    <div
      className="relative w-full h-screen overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 80% 60% at 20% 10%, rgba(88, 28, 135, 0.55) 0%, transparent 60%),
          radial-gradient(ellipse 60% 50% at 80% 15%, rgba(30, 58, 138, 0.6) 0%, transparent 55%),
          radial-gradient(ellipse 50% 40% at 75% 80%, rgba(6, 78, 112, 0.5) 0%, transparent 55%),
          radial-gradient(ellipse 70% 50% at 10% 75%, rgba(67, 20, 100, 0.45) 0%, transparent 60%),
          radial-gradient(ellipse 40% 35% at 50% 50%, rgba(14, 40, 80, 0.4) 0%, transparent 70%),
          linear-gradient(135deg, #020010 0%, #04001a 30%, #000d1a 60%, #020010 100%)
        `,
      }}
    >
      {isLoading && <IntroLoader isExiting={isLoaderExiting} />}

      {/* Scroll progress dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {Array.from({ length: MAX_SCROLLS }).map((_, i) => (
          <div
            key={i}
            className="rounded-full"
            style={{
              width: i < scrollCount ? 20 : 6,
              height: 6,
              background: i < scrollCount
                ? 'rgba(0, 212, 255, 0.85)'
                : 'rgba(255,255,255,0.2)',
              boxShadow: i < scrollCount ? '0 0 6px rgba(0,212,255,0.6)' : 'none',
              transition: `all 0.5s ${easing}`,
            }}
          />
        ))}
      </div>

      {/* Globe layer — canvas stays mounted always; only globe objects fade internally */}
      <div
        className="absolute inset-0"
        style={{
          pointerEvents: isLoading ? 'none' : phase === 'globe' ? 'auto' : 'none',
          opacity: isLoading ? (isLoaderExiting ? 1 : 0.72) : 1,
          transform: isLoading ? (isLoaderExiting ? 'scale(1)' : 'scale(0.82)') : 'scale(1)',
          filter: isLoading ? (isLoaderExiting ? 'blur(0px) brightness(1)' : 'blur(10px) brightness(0.72)') : 'none',
          transition: 'opacity 1.2s cubic-bezier(0.22, 1, 0.36, 1), transform 1.6s cubic-bezier(0.22, 1, 0.36, 1), filter 1.4s cubic-bezier(0.22, 1, 0.36, 1)',
        }}
      >
        <Suspense fallback={null}>
          <Globe globeVisible={phase === 'globe'} />
        </Suspense>
      </div>

      <PhotoSphere
        visible={!isLoading && storyVisible && !storyTextVisible}
        onSelect={setSelectedPhoto}
      />

      <div
        className="absolute inset-0 z-20 flex items-end justify-center p-6 md:items-center md:justify-end md:p-10"
        style={{
          opacity: selectedPhoto ? 1 : 0,
          pointerEvents: selectedPhoto ? 'auto' : 'none',
          transition: `opacity 0.4s ${easing}`,
        }}
      >
        <div
          className="absolute inset-0"
          onClick={() => setSelectedPhoto(null)}
          style={{ background: selectedPhoto ? 'rgba(2, 6, 23, 0.26)' : 'transparent' }}
        />

        <div
          className="relative w-full max-w-sm overflow-hidden rounded-[28px] p-5"
          style={{
            border: '1px solid rgba(148, 163, 184, 0.24)',
            background: 'linear-gradient(180deg, rgba(15,23,42,0.88) 0%, rgba(2,6,23,0.92) 100%)',
            boxShadow: '0 20px 60px rgba(2,6,23,0.38), 0 0 28px rgba(34,211,238,0.12)',
            backdropFilter: 'blur(16px)',
            transform: selectedPhoto ? 'translateY(0)' : 'translateY(18px)',
            transition: `transform 0.45s ${easing}, opacity 0.4s ${easing}`,
          }}
        >
          {selectedPhoto && (
            <>
              <img
                src={selectedPhoto.src}
                alt={selectedPhoto.label}
                style={{
                  width: '100%',
                  aspectRatio: '1 / 1',
                  objectFit: 'cover',
                  borderRadius: 20,
                  marginBottom: 18,
                }}
              />

              <p
                className="uppercase"
                style={{
                  color: 'rgba(103, 232, 249, 0.82)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.28em',
                  marginBottom: 8,
                }}
              >
                {selectedPhoto.meta}
              </p>
              <h3
                style={{
                  color: '#f8fafc',
                  fontSize: '1.8rem',
                  fontWeight: 700,
                  lineHeight: 1.1,
                  marginBottom: 10,
                }}
              >
                {selectedPhoto.label}
              </h3>
              <p
                style={{
                  color: 'rgba(226, 232, 240, 0.78)',
                  lineHeight: 1.7,
                  fontSize: '0.98rem',
                }}
              >
                {selectedPhoto.description}
              </p>
              <button
                type="button"
                onClick={() => setSelectedPhoto(null)}
                className="mt-5 rounded-full px-4 py-2"
                style={{
                  border: '1px solid rgba(34,211,238,0.24)',
                  color: 'rgba(125, 211, 252, 0.92)',
                  background: 'rgba(8, 47, 73, 0.36)',
                }}
              >
                關閉
              </button>
            </>
          )}
        </div>
      </div>

      {/* Story overlay */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center z-10"
        style={{
          opacity: storyTextVisible ? 1 : 0,
          transform: textTranslate,
          transition: `opacity 1.0s ${easing}, transform 1.1s ${easing}`,
          pointerEvents: storyTextVisible ? 'auto' : 'none',
        }}
      >
        {/* Ambient glow */}
        <div
          className="absolute rounded-full pointer-events-none"
          style={{
            width: 600,
            height: 400,
            background: 'radial-gradient(ellipse, rgba(0,212,255,0.08) 0%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />

        {/* Tag line */}
        <p
          className="mb-4 uppercase"
          style={{ color: 'rgba(0,212,255,0.7)', fontSize: '0.75rem', letterSpacing: '0.3em' }}
        >
          來自台灣，連結世界
        </p>

        {/* Big title */}
        <h1
          className="text-center relative"
          style={{
            fontSize: 'clamp(3rem, 10vw, 7rem)',
            lineHeight: 1.05,
            fontWeight: 800,
            background: 'linear-gradient(135deg, #ffffff 0%, #a5f3fc 40%, #00d4ff 70%, #7c3aed 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            filter: 'drop-shadow(0 0 40px rgba(0,212,255,0.35))',
          }}
        >
          世界的台灣
        </h1>

        {/* Divider */}
        <div className="flex items-center gap-4 mt-6 mb-6">
          <div style={{ width: 60, height: 1, background: 'linear-gradient(to right, transparent, rgba(0,212,255,0.5))' }} />
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: 'rgba(0,212,255,0.8)', boxShadow: '0 0 10px rgba(0,212,255,0.8)' }} />
          <div style={{ width: 60, height: 1, background: 'linear-gradient(to left, transparent, rgba(0,212,255,0.5))' }} />
        </div>

        {/* Subtitle */}
        <p
          className="text-center max-w-md px-6"
          style={{
            color: 'rgba(186, 230, 253, 0.75)',
            fontSize: 'clamp(0.95rem, 2.5vw, 1.15rem)',
            lineHeight: 1.8,
            letterSpacing: '0.04em',
          }}
        >
          台灣精神，台灣 team！
        </p>

        {/* Back button */}
        <button
          onClick={() => setScrollCount(0)}
          className="mt-12 px-6 py-2 rounded-full hover:scale-105"
          style={{
            border: '1px solid rgba(0,212,255,0.3)',
            background: 'rgba(0,212,255,0.05)',
            color: 'rgba(0,212,255,0.6)',
            fontSize: '0.78rem',
            letterSpacing: '0.15em',
            cursor: 'pointer',
            transition: `all 0.3s ${easing}`,
          }}
        >
          回首頁
        </button>
      </div>
    </div>
  );
}
