"use client"

import { Button } from "@/components/ui/button"
import { MessageCircle, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function AgencyCTA() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section className="py-32 bg-slate-50 dark:bg-[#020512] transition-colors duration-500 relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-500/10 rounded-full blur-[120px] mix-blend-screen" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-gradient-to-b from-white dark:from-white/10 to-slate-50 dark:to-white/[0.02] border border-slate-200 dark:border-white/10 rounded-[3rem] p-12 md:p-24 text-center overflow-hidden relative backdrop-blur-sm"
        >
          {/* Inner Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-50 blur-sm" />
          
          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight max-w-3xl mx-auto">
            Ready to build your next big digital experience?
          </h2>
          
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-12 max-w-2xl mx-auto">
            Let's collaborate to craft something extraordinary. Your vision, our expertise—let's make it happen.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-slate-900 text-white dark:bg-white dark:text-black hover:bg-slate-800 dark:hover:bg-slate-200 rounded-full px-8 h-14 text-base font-semibold w-full sm:w-auto"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            
            <a 
              href="https://wa.me/yourwhatsappnumber" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366] border border-[#25D366]/20 px-8 h-14 text-base font-semibold hover:bg-[#25D366]/20 transition-colors w-full sm:w-auto"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
