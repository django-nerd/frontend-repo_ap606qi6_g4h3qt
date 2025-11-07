import { useRef } from 'react';
import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero({ onViewWorks }) {
  const containerRef = useRef(null);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-white text-black"
      aria-label="Hero"
    >
      {/* Spline background cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient to increase text contrast without blocking Spline interactions */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/30 to-white/90" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-5xl px-6 md:px-10 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          className="text-sm tracking-widest text-neutral-700"
        >
          こんにちは
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
          className="mt-3 text-3xl md:text-5xl font-semibold leading-tight text-neutral-900"
        >
          I'm Anggara Putra — a Mobile Developer who crafts elegant apps with
          <span className="mx-2 inline-block rounded bg-neutral-900 px-2 py-1 text-white">Flutter</span>
          &
          <span className="ml-2 inline-block rounded border border-neutral-900 px-2 py-1">Kotlin</span>.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.35 }}
          className="mx-auto mt-5 max-w-2xl text-neutral-600"
        >
          Modern Japanese minimalism — black & white calmness with a gentle maroon accent.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut', delay: 0.5 }}
          className="mt-10 flex items-center justify-center gap-4"
        >
          <button
            onClick={onViewWorks}
            className="group relative overflow-hidden rounded-full border border-neutral-900 px-6 py-3 text-sm font-medium text-neutral-900 transition-colors"
            aria-label="View My Works"
          >
            <span className="relative z-10">View My Works</span>
            {/* subtle maroon underline on hover */}
            <span className="absolute inset-x-0 bottom-0 h-0.5 w-full origin-left scale-x-0 bg-[#b33a3a] transition-transform duration-300 group-hover:scale-x-100" />
          </button>
        </motion.div>
      </div>

      {/* Gentle floating particles for zen motion (black/white minimal) */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-10 top-20 h-2 w-2 rounded-full bg-black/20 blur-[1px] animate-[float_10s_ease-in-out_infinite]" />
        <div className="absolute right-20 top-1/3 h-1.5 w-1.5 rounded-full bg-black/20 blur-[1px] animate-[float_12s_ease-in-out_infinite]" />
        <div className="absolute left-1/4 bottom-24 h-1.5 w-1.5 rounded-full bg-black/20 blur-[1px] animate-[float_14s_ease-in-out_infinite]" />
      </div>
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px) translateX(0px); opacity: 0.7; }
          50% { transform: translateY(-20px) translateX(10px); opacity: 0.9; }
          100% { transform: translateY(0px) translateX(0px); opacity: 0.7; }
        }
      `}</style>
    </section>
  );
}
