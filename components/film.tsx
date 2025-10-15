"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Play } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const films = [
  {
    title: "Echoes of Silence",
    year: "2024",
    role: "Director, Writer",
    description: "A contemplative exploration of isolation in the digital age",
    thumbnail: "/cinematic-moody-film-scene.jpg",
    duration: "15 min",
  },
  {
    title: "The Last Frame",
    year: "2023",
    role: "Director, Cinematographer",
    description: "A documentary about analog photography in the modern world",
    thumbnail: "/vintage-camera-documentary-style.jpg",
    duration: "22 min",
  },
  {
    title: "Wavelength",
    year: "2023",
    role: "Director, Composer",
    description: "An experimental short film exploring synesthesia through color and sound",
    thumbnail: "/abstract-colorful-experimental-film.jpg",
    duration: "8 min",
  },
  {
    title: "Between the Lines",
    year: "2022",
    role: "Writer, Editor",
    description: "A narrative about connection and miscommunication in relationships",
    thumbnail: "/intimate-relationship-film-scene.jpg",
    duration: "18 min",
  },
]

export function Film() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} id="film" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className={`mb-12 md:mb-16 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">Film Work</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl text-pretty">
              A selection of my recent projects exploring narrative, documentary, and experimental cinema
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {films.map((film, index) => (
              <Card
                key={index}
                className={`group overflow-hidden hover:shadow-lg transition-all hover:scale-[1.02] ${
                  isVisible ? "animate-fade-in-up" : "opacity-0"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-0">
                  <div className="relative aspect-video overflow-hidden bg-muted">
                    <img
                      src={film.thumbnail || "/placeholder.svg"}
                      alt={film.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center transform scale-75 group-hover:scale-100 transition-transform">
                        <Play className="h-6 w-6 text-accent-foreground ml-1" />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      {film.duration}
                    </div>
                  </div>

                  <div className="p-6 space-y-3">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">{film.title}</h3>
                      <span className="text-sm text-muted-foreground whitespace-nowrap">{film.year}</span>
                    </div>
                    <p className="text-sm text-primary font-medium">{film.role}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{film.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
