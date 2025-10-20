"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Award, Camera, Music as MusicIcon, Film, Palette, Users } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const creditCategories = [
  {
    icon: Camera,
    title: "Cinematography",
    credits: [
      { name: "Sarah Mitchell", role: "Director of Photography - 'Echoes of Silence'" },
      { name: "James Chen", role: "Camera Operator - 'The Last Frame'" },
      { name: "Alex Rodriguez", role: "Gaffer - Multiple Projects" },
    ],
  },
  {
    icon: MusicIcon,
    title: "Music & Sound",
    credits: [
      { name: "Emma Thompson", role: "Sound Designer - 'Urban Soundscapes'" },
      { name: "Michael Park", role: "Mixing Engineer - Various Scores" },
      { name: "Lisa Wang", role: "Foley Artist - 'Between the Lines'" },
    ],
  },
  {
    icon: Film,
    title: "Production",
    credits: [
      { name: "David Johnson", role: "Producer - 'Echoes of Silence'" },
      { name: "Rachel Green", role: "Production Manager - 'Wavelength'" },
      { name: "Tom Anderson", role: "Production Assistant - Multiple Projects" },
    ],
  },
  {
    icon: Palette,
    title: "Post-Production",
    credits: [
      { name: "Kevin Martinez", role: "Editor - 'The Last Frame'" },
      { name: "Sophia Lee", role: "Color Grader - Various Projects" },
      { name: "Chris Taylor", role: "VFX Artist - 'Wavelength'" },
    ],
  },
]

const specialThanks = [
  "University Film Department",
  "Local Film Community",
  "Family and Friends",
  "Festival Organizers",
  "All Cast and Crew Members",
]

export function Credits() {
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
    <section
      ref={sectionRef}
      id="credits"
      className="py-20 md:py-32 bg-gradient-to-br from-accent/20 via-background to-primary/20 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "0s" }} />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className={`mb-12 md:mb-16 text-center ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance bg-clip-text text-transparent bg-gradient-to-r from-primary via-accent to-secondary">
              Credits & Collaborators
            </h2>
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto text-pretty">
              Grateful to work alongside talented artists and professionals who bring stories to life
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12">
            {creditCategories.map((category, categoryIndex) => (
              <Card
                key={categoryIndex}
                className={`group overflow-hidden hover:shadow-2xl hover:shadow-accent/30 transition-all duration-500 hover:scale-105 border-2 border-transparent hover:border-primary/50 ${
                  isVisible ? "animate-scale-in" : "opacity-0"
                }`}
                style={{ animationDelay: `${categoryIndex * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center group-hover:from-primary/50 group-hover:to-accent/50 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                      <category.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.credits.map((credit, creditIndex) => (
                      <div
                        key={creditIndex}
                        className="border-l-2 border-accent/50 pl-4 py-2 hover:border-primary transition-colors duration-300"
                      >
                        <p className="font-semibold text-foreground">{credit.name}</p>
                        <p className="text-sm text-muted-foreground">{credit.role}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Special Thanks Section */}
          <Card
            className={`overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 border-2 border-accent/30 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
            style={{ animationDelay: "0.5s" }}
          >
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-accent/40 to-primary/40 mb-4 animate-pulse-glow">
                  <Users className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                  Special Thanks
                </h3>
              </div>

              <div className="flex flex-wrap justify-center gap-3">
                {specialThanks.map((thanks, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-gradient-to-r from-accent/20 to-primary/20 rounded-full text-sm font-medium text-foreground hover:from-accent/40 hover:to-primary/40 transition-all duration-300 hover:scale-110 cursor-default border border-accent/30"
                  >
                    {thanks}
                  </span>
                ))}
              </div>

              <div className="mt-8 text-center">
                <p className="text-muted-foreground italic">
                  "Creativity is a collaborative journey. Thank you to everyone who has been part of mine."
                </p>
                <p className="text-foreground font-semibold mt-2">— Charlie Edwards</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
