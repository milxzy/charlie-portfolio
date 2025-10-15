import { Card } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 md:mb-12 text-balance">About Me</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <Card className="aspect-[3/4] bg-muted overflow-hidden">
                <img src="/professional-film-student-portrait.jpg" alt="Charlie Edwards" className="w-full h-full object-cover" />
              </Card>
            </div>

            <div className="md:col-span-2 space-y-6">
              <div className="prose prose-lg max-w-none">
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                  I'm a passionate filmmaker and composer dedicated to creating compelling visual narratives that
                  explore the human condition. My work bridges the gap between cinema and music, crafting immersive
                  experiences that resonate on both emotional and intellectual levels.
                </p>

                <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                  Currently pursuing my undergraduate degree in Film Studies, I've developed a unique voice that
                  combines technical precision with artistic vision. My films have been recognized at various festivals,
                  and my compositions have enhanced narratives across multiple mediums.
                </p>

                <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                  I'm now seeking opportunities to further my education at the graduate level, where I can continue to
                  push the boundaries of storytelling and expand my creative practice.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Education</p>
                  <p className="font-medium">BA Film Studies</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-medium">Tulsa, Oklahoma</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Specialization</p>
                  <p className="font-medium">Narrative Cinema</p>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">Focus</p>
                  <p className="font-medium">Sound Design</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
