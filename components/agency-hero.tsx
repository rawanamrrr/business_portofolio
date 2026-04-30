"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { motion } from "framer-motion"

export function AgencyHero() {
  const scrollToWork = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-white dark:bg-[#020512] transition-colors duration-500">
      {/* Background Gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-blue-500/10 rounded-full blur-[120px] mix-blend-screen" />
        <div className="absolute bottom-1/4 right-1/4 w-[35rem] h-[35rem] bg-emerald-500/10 rounded-full blur-[100px] mix-blend-screen" />
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(0,0,0,0))] dark:[mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
      </div>

      <div className="container relative z-10 mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-8 max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 w-fit backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
              <span className="text-sm font-medium text-slate-700 dark:text-blue-100">Premium Digital Agency</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 dark:text-white leading-[1.1]">
              We Build <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-emerald-500 dark:from-blue-400 dark:to-emerald-400">
                Digital Empires
              </span>
            </h1>
            
            <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-xl">
              We design and engineer high-converting websites, e-commerce solutions, and custom ERP systems that transform your business and dominate your market.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="bg-slate-900 text-white hover:bg-slate-800 dark:bg-white dark:text-black dark:hover:bg-slate-200 rounded-full px-8 h-14 text-base font-medium group"
              >
                Start Your Project
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                onClick={scrollToWork}
                size="lg" 
                variant="outline" 
                className="rounded-full px-8 h-14 text-base font-medium border-slate-300 text-slate-900 hover:bg-slate-100 dark:border-white/20 dark:text-white dark:hover:bg-white/10 backdrop-blur-sm"
              >
                View Our Work
              </Button>
            </div>
            <div className="flex items-center gap-6 pt-8 border-t border-slate-200 dark:border-white/10 mt-4">
              <div>
                <p className="text-3xl font-bold text-slate-900 dark:text-white">50+</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Projects Delivered</p>
              </div>
              <div className="w-px h-12 bg-slate-200 dark:bg-white/10" />
              <div>
                <p className="text-3xl font-bold text-slate-900 dark:text-white">99%</p>
                <p className="text-sm text-slate-600 dark:text-slate-400">Client Satisfaction</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative lg:ml-auto w-full max-w-lg"
          >
            <div className="relative aspect-square rounded-[2rem] border border-slate-200 dark:border-white/10 bg-slate-50/50 dark:bg-white/5 backdrop-blur-xl overflow-hidden p-2 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/20 to-emerald-500/20 opacity-50" />
              <div className="relative h-full w-full rounded-[1.5rem] bg-white dark:bg-slate-900 overflow-hidden border border-slate-200 dark:border-white/10 flex items-center justify-center">
                 {/* Decorative mock UI */}
                 <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                 <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500/30 rounded-full blur-3xl"></div>
                 <div className="relative z-10 w-20 h-20 rounded-full bg-white/50 dark:bg-white/10 backdrop-blur-md flex items-center justify-center border border-slate-200 dark:border-white/20 shadow-2xl">
                   <Play className="w-8 h-8 text-slate-900 dark:text-white ml-1" />
                 </div>
              </div>
            </div>
            
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -right-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-white/10 rounded-2xl p-4 backdrop-blur-xl shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                  <span className="text-emerald-500 dark:text-emerald-400 font-bold">↑</span>
                </div>
                <div>
                  <p className="text-sm text-slate-600 dark:text-slate-400">Conversion Rate</p>
                  <p className="text-slate-900 dark:text-white font-bold">+124%</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
