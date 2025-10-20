"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"
import { useEffect, useState } from "react"

export function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const scrollToFilm = () => {
    const element = document.querySelector("#film")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 z-0 animate-gradient" />

      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-30 mix-blend-overlay"
          poster="/cinematic-film-production-behind-the-scenes.jpg"
        >
          <source src="/cinematic-film-production-behind-the-scenes.jpg" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </div>

      {/* Floating accent elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "0s" }} />
        <div className="absolute top-40 right-20 w-48 h-48 bg-primary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-40 left-1/4 w-40 h-40 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className={`space-y-4 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight text-balance bg-clip-text text-transparent bg-gradient-to-r from-[#16425B] via-[#2F6690] to-[#3A7CA5]">
              Charlie Edwards
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-foreground font-light">Filmmaker & Composer</p>
          </div>

          <p
            className={`text-base sm:text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto leading-relaxed text-pretty ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
            style={{ animationDelay: "0.2s" }}
          >
            Crafting visual stories and sonic landscapes that resonate with emotion and authenticity
          </p>

          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 ${
              isVisible ? "animate-scale-in" : "opacity-0"
            }`}
            style={{ animationDelay: "0.4s" }}
          >
            <Button size="lg" onClick={scrollToFilm} className="min-w-[160px] animate-pulse-glow bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => {
                const element = document.querySelector("#contact")
                if (element) element.scrollIntoView({ behavior: "smooth" })
              }}
              className="min-w-[160px] border-2 border-accent hover:bg-accent/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToFilm}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-10 bg-accent/50 rounded-full p-3 backdrop-blur-sm hover:bg-accent/70 transition-colors"
        aria-label="Scroll down"
      >
        <ArrowDown className="h-6 w-6 text-accent-foreground" />
      </button>
    </section>
  )
}
