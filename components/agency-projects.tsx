"use client"

import { motion } from "framer-motion"
import { ArrowRight, ExternalLink } from "lucide-react"

export function AgencyProjects() {
  const projects = [
    {
      title: "Raey Group",
      category: "E-commerce",
      image: "bg-gradient-to-br from-neutral-800 to-neutral-900", // Placeholder for actual image
      link: "https://www.raeygroup.com/"
    },
    {
      title: "Sense Fragrance",
      category: "E-commerce Flagship",
      image: "bg-gradient-to-br from-zinc-800 to-zinc-900", // Placeholder for actual image
      link: "https://www.sensefragrance.com/"
    },
    {
      title: "Express Services",
      category: "Company Website",
      image: "bg-gradient-to-br from-slate-800 to-slate-900", // Placeholder for actual image
      link: "https://expressservicess.com/"
    },
    {
      title: "Alanood Alqadi",
      category: "E-commerce",
      image: "bg-gradient-to-br from-gray-800 to-gray-900", // Placeholder for actual image
      link: "https://alanodalqadi.com/"
    }
  ]

  return (
    <section id="projects" className="py-32 bg-white dark:bg-[#020512] transition-colors duration-500 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-sm font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase mb-4">Featured Work</h2>
          <h3 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white">
            Projects that <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500 dark:from-blue-400 dark:to-emerald-400">deliver results.</span>
          </h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6 border border-slate-200 dark:border-white/10">
                {/* Fallback mockup UI instead of plain gradients */}
                <div className={`absolute inset-0 ${project.image} flex flex-col`}>
                  {/* Browser Bar */}
                  <div className="h-8 w-full bg-slate-200/80 dark:bg-black/40 border-b border-slate-300 dark:border-white/10 flex items-center px-4 gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500/80"></div>
                  </div>
                  {/* Content area */}
                  <div className="flex-1 p-8 flex items-center justify-center opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700">
                    <span className="text-slate-400 dark:text-white/40 text-xl font-bold tracking-widest uppercase">{project.title}</span>
                  </div>
                </div>

                <div className="absolute inset-0 bg-white/40 dark:bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-16 h-16 rounded-full bg-white/50 dark:bg-white/10 backdrop-blur-md flex items-center justify-center text-slate-900 dark:text-white border border-slate-200 dark:border-white/20 hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors"
                  >
                    <ExternalLink className="w-6 h-6" />
                  </a>
                </div>
              </div>

              <div className="flex justify-between items-start px-2">
                <div>
                  <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{project.title}</h4>
                  <p className="text-slate-600 dark:text-slate-400">{project.category}</p>
                </div>
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-500 dark:text-emerald-400 dark:hover:text-emerald-300 transition-colors"
                >
                  View Project <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
