import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
            Hi, I&apos;m <span className="text-primary">Shiinedev</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Full-stack developer crafting beautiful, performant web experiences with modern technologies
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="text-lg px-8 py-6" asChild>
            <Link href="https://github.com/shiinedev" target="_blank">
            View My Work
           
            
            <ArrowDown className="ml-2 h-5 w-5" />
             </Link>
          </Button>
          <div className="flex gap-4">
            <Button variant="outline" size="icon" className="h-12 w-12 bg-transparent" asChild>
            <Link href="https://github.com/shiinedev">
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" className="h-12 w-12 bg-transparent" asChild>
                <Link href="https://github.com/shiinedev">
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="outline" size="icon" className="h-12 w-12 bg-transparent" asChild>
                <Link href={"/"}>
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
