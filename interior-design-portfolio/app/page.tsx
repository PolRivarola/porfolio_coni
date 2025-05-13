import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from 'lucide-react'

export default function Home() {
  const projects = [
    {
      id: "omotesando-koffee-hk",
      title: "Omotesando Koffee",
      category: "Hospitality",
      location: "Hong Kong",
      image: "/images/design.jpg",
    },
    {
      id: "vanity-mahjong-lv",
      title: "Vanity Mahjong for Louis Vuitton",
      category: "Product",
      location: "",
      image: "/images/design.jpg",
    },
    {
      id: "omotesando-koffee-salcedo",
      title: "Omotesando Koffee Salcedo",
      category: "Hospitality",
      location: "Manila",
      image: "/images/design.jpg",
    },
    {
      id: "kin-foodhalls",
      title: "KIN Foodhalls",
      category: "Hospitality",
      location: "Hong Kong",
      image: "/images/design.jpg",
    },
  ]

  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <header className="flex justify-between items-start mb-12">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif mb-6">STUDIO ADJECTIVE</h1>
            <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
              <span className="italic font-medium">adj.</span> A Space and Object design studio that weaves narratives
              into every work, shaping ideas with depth and intent. Guided by a sustainable design ethos - both visual
              and conceptual - crafting spaces and objects that transcend aesthetics. the studio&apos;s philosophy
              fosters meaningful connections between space, emotion, and experience, ensuring that design becomes not
              just seen, but deeply felt.
            </p>
          </div>
          <div className="hidden md:block">
            <div className="text-4xl font-serif">o|o|.</div>
          </div>
        </header>

        <nav className="mb-12">
          <ul className="flex space-x-8">
            <li>
              <Link href="/" className="text-primary font-medium hover:underline">
                Work
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-muted-foreground hover:text-primary hover:underline">
                About
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-muted-foreground hover:text-primary hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </nav>

        <div className="relative w-full">
  <div className="flex justify-end mb-2 pr-4">
    <span className="text-sm text-muted-foreground">scroll</span>
    <ChevronRight className="h-4 w-4 text-muted-foreground" />
  </div>

  <div className="w-full overflow-x-auto">
    <div className="flex space-x-4 pb-8 pr-4 scrollbar-thin snap-x snap-mandatory">
      {projects.map((project) => (
        <Link
          key={project.id}
          href={`/projects/${project.id}`}
          className="relative min-w-[280px] sm:min-w-[400px] md:min-w-[500px] h-[70vh] snap-start shrink-0"
        >
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/10 hover:bg-black/20 transition-colors">
            <div className="absolute bottom-6 left-6 text-white">
              <h2 className="text-xl md:text-2xl font-serif mb-1">{project.title}</h2>
              <p className="text-sm">
                {project.category} {project.location && `| ${project.location}`}
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  </div>
</div>

      </div>
    </main>
  )
}