import { useEffect, useRef, useState } from 'react';
import { Globe } from './components/Globe';

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
  const [phase, setPhase] = useState<'globe' | 'text'>('globe');
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');
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

  // Sync phase with scrollCount
  useEffect(() => {
    if (scrollCount >= MAX_SCROLLS && phase !== 'text') {
      setDirection('forward');
      setPhase('text');
    } else if (scrollCount < MAX_SCROLLS && phase !== 'globe') {
      setDirection('backward');
      setPhase('globe');
    }
  }, [scrollCount, phase]);

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

  // Globe transform: zoom out when leaving, zoom in from close when returning
  // Text transform: slides up when entering, slides down when leaving
  const textVisible = phase === 'text';
  const textTranslate = textVisible
    ? 'translateY(0)'
    : direction === 'forward'
      ? 'translateY(28px)'   // entering from below
      : 'translateY(-20px)'; // leaving upward when going back

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
        <Globe globeVisible={phase === 'globe'} />
      </div>

      {/* Text overlay */}
      <div
        className="absolute inset-0 flex flex-col items-center justify-center z-10"
        style={{
          opacity: textVisible ? 1 : 0,
          transform: textTranslate,
          transition: `opacity 1.0s ${easing}, transform 1.1s ${easing}`,
          pointerEvents: textVisible ? 'auto' : 'none',
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
