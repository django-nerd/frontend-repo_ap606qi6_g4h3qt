import { motion } from 'framer-motion';
import { Smartphone, Flame, Shield } from 'lucide-react';

const skills = [
  {
    name: 'Flutter',
    icon: () => (
      <svg viewBox="0 0 256 256" className="h-8 w-8" aria-hidden>
        <path fill="#02569B" d="M14.9 165.9 96.2 84.6l35.3 35.3L50.3 201.1z"/>
        <path fill="#0175C2" d="M96.2 84.6 155.9 24.9l35.3 35.3-59.7 59.7z"/>
        <path fill="#45D1FD" d="m155.9 144.3 35.3 35.3-35.3 35.3-35.3-35.3z"/>
      </svg>
    ),
    desc: 'for crafting cross-platform beauty.'
  },
  {
    name: 'Kotlin',
    icon: () => (
      <svg viewBox="0 0 256 256" className="h-8 w-8" aria-hidden>
        <defs>
          <linearGradient id="kotlin" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0%" stopColor="#1C1C1C"/>
            <stop offset="100%" stopColor="#7A7A7A"/>
          </linearGradient>
        </defs>
        <path fill="url(#kotlin)" d="M16 16h224L144 112 240 240H16z"/>
      </svg>
    ),
    desc: 'native performance and expressive code.'
  },
  {
    name: 'Android Studio',
    icon: Smartphone,
    desc: 'robust tooling for Android craft.'
  },
  {
    name: 'Firebase',
    icon: Flame,
    desc: 'scalable backend and realtime sync.'
  }
];

export default function Skills() {
  return (
    <section id="skills" className="relative w-full bg-neutral-50 py-20 text-neutral-900">
      <div className="relative mx-auto max-w-5xl px-6 md:px-10">
        <h2 className="text-center text-2xl font-semibold">Skills</h2>
        <p className="mt-2 text-center text-sm text-neutral-600">Focused, modern stack for building elegant mobile apps.</p>
        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group rounded-lg border border-neutral-200 bg-white p-5 text-center shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md"
            >
              <div className="flex items-center justify-center">
                {typeof s.icon === 'function' ? (
                  <s.icon />
                ) : (
                  <s.icon className="h-8 w-8" />
                )}
              </div>
              <h3 className="mt-4 font-medium">{s.name}</h3>
              <p className="mt-1 text-xs text-neutral-600">
                {s.name} — {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
