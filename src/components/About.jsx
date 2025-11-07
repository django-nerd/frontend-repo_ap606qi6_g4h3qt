import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative w-full bg-white py-20 text-neutral-900">
      {/* sumi-e brush background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(80px 12px at 20% 30%, #000 20%, transparent 21%), radial-gradient(120px 16px at 70% 70%, #000 18%, transparent 19%)`,
          backgroundRepeat: 'no-repeat'
        }} />
      </div>

      <div className="relative mx-auto max-w-5xl px-6 md:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center gap-10 md:flex-row md:items-start"
        >
          <div className="shrink-0">
            <img
              src="https://images.unsplash.com/photo-1607748382369-0a1e44c26dfb?q=80&w=400&auto=format&fit=crop"
              alt="Anggara Putra"
              className="h-36 w-36 rounded-full border border-neutral-900 object-cover shadow-sm"
            />
          </div>

          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold">About Me</h2>
            <p className="mt-4 text-neutral-600">
              I'm Anggara Putra, a professional Mobile Developer specializing in Flutter and Kotlin.
              I design and build calm, elegant applications with a focus on performance and delightful details.
            </p>
            <p className="mt-3 text-neutral-600 italic">“Code like harmony, build like art.”</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
