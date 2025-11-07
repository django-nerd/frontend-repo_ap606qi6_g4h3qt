import { motion } from 'framer-motion';

const projects = [
  {
    title: 'ZenTodo',
    desc: 'Minimalist task manager with mindful interactions.',
    image: 'https://images.unsplash.com/photo-1624871215390-5ebaa7bc8da4?ixid=M3w3OTkxMTl8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NjI0NzcxMTF8&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80',
  },
  {
    title: 'KireiWeather',
    desc: 'Clean weather app with soft motion and clarity.',
    image: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'HanamiShop',
    desc: 'E-commerce prototype focused on calm browsing.',
    image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative w-full bg-white py-20 text-neutral-900">
      <div className="relative mx-auto max-w-6xl px-6 md:px-10">
        <h2 className="text-center text-2xl font-semibold">Selected Projects</h2>
        <p className="mt-2 text-center text-sm text-neutral-600">Clean lines, practical craft, and subtle motion.</p>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm"
            >
              <div className="relative aspect-[9/16] w-full overflow-hidden bg-neutral-100">
                <img
                  src={p.image}
                  alt={p.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* phone frame */}
                <div className="pointer-events-none absolute inset-0 rounded-[2.2rem] border-[6px] border-neutral-800/90 shadow-[inset_0_0_0_8px_#fff]" />
              </div>
              <div className="p-5">
                <h3 className="font-medium">{p.title}</h3>
                <p className="mt-1 text-sm text-neutral-600">{p.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
