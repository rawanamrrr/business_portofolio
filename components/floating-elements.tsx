export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-accent/10 rounded-full animate-float" />
      <div
        className="absolute top-40 right-20 w-16 h-16 bg-secondary/10 rounded-lg animate-float"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-40 left-20 w-12 h-12 bg-accent/10 rounded-full animate-float"
        style={{ animationDelay: "4s" }}
      />
      <div
        className="absolute bottom-20 right-10 w-24 h-24 bg-secondary/10 rounded-lg animate-float"
        style={{ animationDelay: "1s" }}
      />

      {/* New drifting elements */}
      <div className="absolute top-1/4 left-1/3 w-8 h-8 bg-blue-500/20 rounded-full animate-drift" />
      <div
        className="absolute top-3/4 right-1/3 w-6 h-6 bg-purple-500/20 rounded-full animate-drift"
        style={{ animationDelay: "3s" }}
      />
      <div
        className="absolute top-1/2 left-1/4 w-10 h-10 bg-cyan-500/20 rounded-full animate-drift"
        style={{ animationDelay: "6s" }}
      />

      {/* Morphing blobs */}
      <div className="absolute top-16 right-1/3 w-32 h-32 bg-gradient-to-br from-purple-500/10 to-blue-500/10 animate-morphing" />
      <div
        className="absolute bottom-32 left-1/3 w-24 h-24 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 animate-morphing"
        style={{ animationDelay: "4s" }}
      />

      {/* Orbiting elements */}
      <div className="absolute top-1/3 left-1/2 w-4 h-4 bg-accent/30 rounded-full animate-orbit" />
      <div
        className="absolute bottom-1/3 right-1/2 w-3 h-3 bg-secondary/30 rounded-full animate-orbit"
        style={{ animationDelay: "5s", animationDirection: "reverse" }}
      />

      {/* Sparkling dots */}
      <div className="absolute top-32 left-1/4 w-2 h-2 bg-white/50 rounded-full animate-sparkle" />
      <div
        className="absolute top-64 right-1/4 w-2 h-2 bg-white/50 rounded-full animate-sparkle"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute bottom-48 left-1/2 w-2 h-2 bg-white/50 rounded-full animate-sparkle"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-64 right-1/3 w-2 h-2 bg-white/50 rounded-full animate-sparkle"
        style={{ animationDelay: "3s" }}
      />

      {/* Wave elements */}
      <div className="absolute top-48 left-16 w-6 h-6 bg-blue-400/20 rounded-full animate-wave" />
      <div
        className="absolute top-80 right-16 w-6 h-6 bg-purple-400/20 rounded-full animate-wave"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Rotating elements */}
      <div className="absolute top-1/3 right-1/4 w-32 h-32 border border-accent/20 rounded-full animate-rotate-slow" />
      <div
        className="absolute bottom-1/3 left-1/4 w-24 h-24 border border-secondary/20 rounded-lg animate-rotate-slow"
        style={{ animationDirection: "reverse" }}
      />

      {/* Additional rotating rings */}
      <div className="absolute top-20 left-1/2 w-16 h-16 border-2 border-dashed border-cyan-500/20 rounded-full animate-rotate-slow" />
      <div
        className="absolute bottom-20 right-1/2 w-20 h-20 border-2 border-dotted border-purple-500/20 rounded-full animate-rotate-slow"
        style={{ animationDirection: "reverse", animationDelay: "2s" }}
      />
    </div>
  )
}
