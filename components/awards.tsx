import { Card, CardContent } from "@/components/ui/card"
import { Award, Trophy, Star } from "lucide-react"

const awards = [
  {
    title: "Best Student Short Film",
    organization: "Regional Film Festival",
    project: "Echoes of Silence",
    year: "2024",
    icon: Trophy,
  },
  {
    title: "Excellence in Cinematography",
    organization: "University Film Awards",
    project: "The Last Frame",
    year: "2023",
    icon: Award,
  },
  {
    title: "Audience Choice Award",
    organization: "Student Film Showcase",
    project: "Wavelength",
    year: "2023",
    icon: Star,
  },
  {
    title: "Best Original Score",
    organization: "Collegiate Media Awards",
    project: "Between the Lines",
    year: "2022",
    icon: Award,
  },
]

const recognitions = [
  "Official Selection - Sundance Film Festival (Student Category)",
  "Finalist - SXSW Student Film Competition",
  "Featured - American Cinematographer Magazine",
  "Dean's List - Outstanding Academic Achievement",
]

export function Awards() {
  return (
    <section id="awards" className="py-20 md:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance">Awards & Recognition</h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl text-pretty">
              Honored to have my work recognized by peers and industry professionals
            </p>
          </div>

          <div className="space-y-12">
            <div className="grid sm:grid-cols-2 gap-6">
              {awards.map((award, index) => {
                const Icon = award.icon
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <Icon className="h-6 w-6 text-accent" />
                        </div>

                        <div className="flex-1 space-y-2">
                          <h3 className="text-lg font-semibold">{award.title}</h3>
                          <p className="text-sm text-muted-foreground">{award.organization}</p>
                          <div className="flex items-center gap-2 text-sm pt-1">
                            <span className="text-accent font-medium">{award.project}</span>
                            <span className="text-muted-foreground">•</span>
                            <span className="text-muted-foreground">{award.year}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Additional Recognition</h3>
              <Card>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {recognitions.map((recognition, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">{recognition}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
