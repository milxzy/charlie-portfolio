import { Card, CardContent } from "@/components/ui/card"
import { MusicIcon, Play } from "lucide-react"

const musicProjects = [
  {
    title: "Echoes of Silence (Original Score)",
    type: "Film Score",
    year: "2024",
    description: "Minimalist piano and ambient textures exploring themes of isolation",
    duration: "12 tracks",
  },
  {
    title: "Urban Soundscapes",
    type: "Sound Design",
    year: "2023",
    description: "Field recordings and electronic manipulation for documentary work",
    duration: "8 tracks",
  },
  {
    title: "Wavelength (Experimental Composition)",
    type: "Original Composition",
    year: "2023",
    description: "Synth-driven score exploring the relationship between color and sound",
    duration: "6 tracks",
  },
  {
    title: "Between the Lines (Score)",
    type: "Film Score",
    year: "2022",
    description: "String quartet arrangements capturing emotional intimacy",
    duration: "10 tracks",
  },
]

export function Music() {
  return (
    <section id="music" className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-background to-secondary/10 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "0s" }} />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-balance bg-clip-text text-transparent bg-gradient-to-r from-accent to-primary">
              Music & Sound Design
            </h2>
            <p className="text-lg md:text-xl text-foreground/80 max-w-2xl text-pretty">
              Original compositions and sound design that enhance narrative storytelling
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {musicProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-2xl hover:shadow-primary/30 transition-all duration-500 hover:scale-105 border-2 border-transparent hover:border-accent/50">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center flex-shrink-0 group-hover:from-accent/40 group-hover:to-primary/40 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                      <MusicIcon className="h-7 w-7 text-accent group-hover:text-primary transition-colors" />
                    </div>

                    <div className="flex-1 space-y-3">
                      <div>
                        <h3 className="text-lg font-semibold mb-1 group-hover:text-accent transition-colors">
                          {project.title}
                        </h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <span className="text-accent font-medium">{project.type}</span>
                          <span>•</span>
                          <span>{project.year}</span>
                        </div>
                      </div>

                      <p className="text-sm text-muted-foreground leading-relaxed">{project.description}</p>

                      <div className="flex items-center justify-between pt-2">
                        <span className="text-xs text-muted-foreground">{project.duration}</span>
                        <button className="text-accent hover:text-accent/80 transition-colors">
                          <Play className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
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
