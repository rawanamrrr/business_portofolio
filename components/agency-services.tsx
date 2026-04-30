"use client"

import { motion } from "framer-motion"
import { Monitor, ShoppingCart, Database, Sparkles, ArrowRight } from "lucide-react"

export function AgencyServices() {
  const services = [
    {
      icon: Monitor,
      title: "Web Development",
      description: "High-performance, visually stunning websites built with modern frameworks that captivate users and drive action.",
      tags: ["React & Next.js", "Custom UI/UX", "SEO Optimized"]
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Scalable online stores engineered for maximum conversion. We turn casual browsers into loyal customers.",
      tags: ["Shopify", "Custom Commerce", "Payment Integration"]
    },
    {
      icon: Database,
      title: "ERP Systems",
      description: "Custom enterprise resource planning systems that streamline your operations and organize your business data perfectly.",
      tags: ["Process Automation", "Data Dashboards", "Cloud Infrastructure"]
    },
    {
      icon: Sparkles,
      title: "Digital Invitations",
      description: "Elegant, immersive digital experiences for your special events, complete with animations and RSVPs.",
      tags: ["Cinematic Intros", "RSVP Management", "Custom Designs"],
      link: "https://invitations.digitivaa.com/"
    }
  ]

  return (
    <section id="services" className="py-32 bg-white dark:bg-[#020512] transition-colors duration-500 relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-sm font-bold tracking-widest text-emerald-500 dark:text-emerald-400 uppercase mb-4">Our Expertise</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
              Comprehensive digital <br/> solutions for modern brands.
            </h3>
          </div>
          <p className="text-slate-600 dark:text-slate-400 max-w-md text-lg">
            We don't just build websites. We engineer scalable digital products that act as growth engines for your business.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 rounded-3xl p-8 hover:bg-slate-100 dark:hover:bg-white/[0.04] transition-colors"
            >
              <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="w-6 h-6 text-emerald-500 dark:text-emerald-400 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
              </div>
              
              <div className="w-14 h-14 bg-blue-500/10 rounded-2xl flex items-center justify-center mb-8 border border-blue-500/20 text-blue-600 dark:text-blue-400">
                <service.icon className="w-7 h-7" />
              </div>
              
              <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">{service.title}</h4>
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-8 h-20">
                {service.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {service.tags.map((tag, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-200 dark:bg-white/5 border border-slate-300 dark:border-white/10 rounded-full text-xs text-slate-700 dark:text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
              
              {service.link && (
                <a 
                  href={service.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="absolute inset-0 z-10"
                >
                  <span className="sr-only">Visit {service.title}</span>
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
