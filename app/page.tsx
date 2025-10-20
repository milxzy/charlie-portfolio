import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Film } from "@/components/film"
import { Music } from "@/components/music"
import { Awards } from "@/components/awards"
import { Credits } from "@/components/credits"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Film />
      <Music />
      <Awards />
      <Credits />
      <Contact />
      <Footer />
    </main>
  )
}
