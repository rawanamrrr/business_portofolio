"use client"

import { motion } from "framer-motion"

export function AgencyProcess() {
  const steps = [
    {
      number: "01",
      title: "Discover",
      description: "We dive deep into your business, understanding your goals, audience, and market to forge a rock-solid strategy."
    },
    {
      number: "02",
      title: "Design",
      description: "We craft wireframes and high-fidelity prototypes, establishing a premium visual identity that resonates with your users."
    },
    {
      number: "03",
      title: "Develop",
      description: "Our engineers build your product using cutting-edge tech, ensuring blazing fast performance and bulletproof security."
    },
    {
      number: "04",
      title: "Launch",
      description: "We rigorously test, optimize, and deploy your product to the world, providing ongoing support to ensure sustained success."
    }
  ]

  return (
    <section className="py-32 bg-white dark:bg-[#020512] transition-colors duration-500 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-widest text-blue-600 dark:text-blue-400 uppercase mb-4">Our Process</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
              A proven methodology <br/> for digital excellence.
            </h3>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-6 lg:gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-12 left-0 w-full h-[1px] bg-gradient-to-r from-blue-500/0 via-blue-500/20 to-blue-500/0 z-0"></div>

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative z-10"
            >
              <div className="w-24 h-24 rounded-full bg-white dark:bg-[#050914] border border-slate-200 dark:border-white/10 flex items-center justify-center mb-8 shadow-[0_0_30px_rgba(100,165,255,0.1)]">
                <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-blue-600 to-emerald-600 dark:from-blue-400 dark:to-emerald-400">
                  {step.number}
                </span>
              </div>
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{step.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
