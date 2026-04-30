"use client"

import { motion } from "framer-motion"
import { CheckCircle2, Zap, Target, Smile } from "lucide-react"

export function AgencyWhyUs() {
  const reasons = [
    {
      icon: CheckCircle2,
      title: "Modern Design",
      description: "We craft premium, aesthetically stunning interfaces that elevate your brand and leave a lasting impression on your users."
    },
    {
      icon: Zap,
      title: "Fast Delivery",
      description: "Our agile workflow and component-driven approach ensure rapid deployment without compromising on quality or performance."
    },
    {
      icon: Target,
      title: "Business-Focused",
      description: "Every pixel and line of code is engineered to drive conversions, increase engagement, and grow your bottom line."
    },
    {
      icon: Smile,
      title: "Smooth Experience",
      description: "From discovery to launch, enjoy a transparent, highly communicative partnership that makes building software feel effortless."
    }
  ]

  return (
    <section className="py-32 bg-slate-50 dark:bg-[#050914] transition-colors duration-500 relative border-y border-slate-200 dark:border-white/5">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase mb-4">Why Choose Us</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            The Digitiva Advantage
          </h3>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            We don't just act as an agency; we partner with you as an extension of your team, dedicated entirely to your digital success.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 p-8 rounded-3xl hover:bg-slate-100 dark:hover:bg-white/[0.04] transition-colors"
            >
              <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
                <reason.icon className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 dark:text-white mb-3">{reason.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-sm">
                {reason.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
