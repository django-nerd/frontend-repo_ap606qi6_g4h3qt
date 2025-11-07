import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-neutral-950 py-20 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(179,58,58,0.08),transparent_40%),radial-gradient(circle_at_70%_80%,rgba(179,58,58,0.08),transparent_40%)]" />

      <div className="relative mx-auto max-w-4xl px-6 md:px-10">
        <h2 className="text-center text-2xl font-semibold">Contact</h2>
        <p className="mt-2 text-center text-sm text-neutral-300">Let's build something elegant together.</p>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            onSubmit={(e) => e.preventDefault()}
            className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
          >
            <label className="block text-sm">Name</label>
            <input className="mt-1 w-full rounded-md border border-white/20 bg-transparent px-3 py-2 outline-none placeholder:text-neutral-400" placeholder="Your name" />
            <label className="mt-4 block text-sm">Email</label>
            <input type="email" className="mt-1 w-full rounded-md border border-white/20 bg-transparent px-3 py-2 outline-none placeholder:text-neutral-400" placeholder="you@example.com" />
            <label className="mt-4 block text-sm">Message</label>
            <textarea rows={4} className="mt-1 w-full rounded-md border border-white/20 bg-transparent px-3 py-2 outline-none placeholder:text-neutral-400" placeholder="Tell me about your project" />
            <button className="mt-5 inline-flex items-center justify-center rounded-full border border-white/40 px-5 py-2 text-sm font-medium transition-colors hover:border-[#b33a3a] hover:text-[#b33a3a]">Send</button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col items-center justify-center gap-4"
          >
            <a href="https://github.com" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 rounded-full border border-white/20 px-4 py-2 transition hover:border-[#b33a3a]">
              <Github className="h-5 w-5 text-white transition group-hover:text-[#b33a3a]" />
              <span className="text-sm">GitHub</span>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 rounded-full border border-white/20 px-4 py-2 transition hover:border-[#b33a3a]">
              <Linkedin className="h-5 w-5 text-white transition group-hover:text-[#b33a3a]" />
              <span className="text-sm">LinkedIn</span>
            </a>
            <a href="mailto:hello@anggara.dev" className="group inline-flex items-center gap-3 rounded-full border border-white/20 px-4 py-2 transition hover:border-[#b33a3a]">
              <Mail className="h-5 w-5 text-white transition group-hover:text-[#b33a3a]" />
              <span className="text-sm">Email</span>
            </a>
            <div className="mt-4 h-px w-24 bg-white/10" />
            <p className="text-center text-xs text-neutral-400">© {new Date().getFullYear()} Anggara Putra. All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
