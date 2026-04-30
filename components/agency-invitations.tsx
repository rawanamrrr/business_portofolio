"use client"

import { motion } from "framer-motion"
import { ArrowRight, Heart } from "lucide-react"

export function AgencyInvitations() {
  return (
    <section className="py-24 bg-white dark:bg-[#020512] transition-colors duration-500 relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="bg-gradient-to-br from-slate-50 dark:from-white/[0.05] to-white/50 dark:to-transparent border border-slate-200 dark:border-white/10 rounded-[3rem] p-8 md:p-16 overflow-hidden relative">
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-sm font-medium mb-8">
                <Heart className="w-4 h-4" /> Signature Service
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                Celebrate love with <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 dark:from-pink-400 dark:to-purple-400">
                  Digital Elegance.
                </span>
              </h2>
              
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
                Step into the future of event planning with our immersive digital invitations. Perfect for weddings, engagements, and corporate galas. We craft cinematic intros, smooth animations, and seamless RSVP tracking.
              </p>
              
              <a 
                href="https://invitations.digitivaa.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-slate-900 text-white dark:bg-white dark:text-black px-8 h-14 text-base font-semibold hover:bg-slate-800 dark:hover:bg-slate-200 transition-colors group"
              >
                Explore Invitations 
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Gallery Collage */}
              <div className="relative h-[500px] w-full">
                <div className="absolute top-0 right-10 w-64 h-80 rounded-2xl bg-gradient-to-br from-pink-50 dark:from-pink-900/50 to-white dark:to-slate-900 border border-slate-200 dark:border-white/20 shadow-2xl overflow-hidden transform rotate-6 z-10">
                   <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20"></div>
                   <div className="p-6 h-full flex flex-col items-center justify-center text-center">
                      <Heart className="w-8 h-8 text-pink-500 dark:text-pink-400 mb-4 opacity-50" />
                      <p className="text-slate-900 dark:text-white font-serif italic text-xl">"A celebration to remember..."</p>
                   </div>
                </div>
                
                <div className="absolute bottom-10 left-0 w-72 h-64 rounded-2xl bg-gradient-to-br from-purple-50 dark:from-purple-900/50 to-white dark:to-slate-900 border border-slate-200 dark:border-white/20 shadow-2xl overflow-hidden transform -rotate-3 z-20 backdrop-blur-xl">
                  <div className="p-6">
                    <div className="w-12 h-12 rounded-full bg-slate-200 dark:bg-white/10 mb-4"></div>
                    <div className="h-4 w-3/4 bg-slate-200 dark:bg-white/10 rounded mb-2"></div>
                    <div className="h-4 w-1/2 bg-slate-200 dark:bg-white/10 rounded mb-8"></div>
                    <div className="h-10 w-full bg-purple-500/10 dark:bg-purple-500/20 border border-purple-500/20 dark:border-purple-500/50 rounded-lg flex items-center justify-center text-purple-600 dark:text-purple-300 text-sm font-semibold">RSVP Now</div>
                  </div>
                </div>
                
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-500/20 rounded-full blur-[80px] -z-10" />
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
