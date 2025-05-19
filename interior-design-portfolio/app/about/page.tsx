import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from 'lucide-react'

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <Link href="/" className="inline-flex items-center text-sm mb-8 hover:underline">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver a proyectos
        </Link>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          <div className="space-y-8">
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif mb-6">Constanza Ceballos R.</h1>
              <div className="prose max-w-none">
                <p>
                  STUDIO ADJECTIVE is a Space and Object design studio that weaves narratives into every work, shaping
                  ideas with depth and intent. Guided by a sustainable design ethos - both visual and conceptual - we
                  craft spaces and objects that transcend aesthetics.
                </p>
                <p>
                  Founded in 2016, our studio has grown into a multidisciplinary team of designers, architects, and
                  craftspeople who share a passion for thoughtful, meaningful design. We believe that great design
                  should evoke emotion and create experiences that resonate on a deeper level.
                </p>
                <p>
                  Our philosophy fosters meaningful connections between space, emotion, and experience, ensuring that
                  design becomes not just seen, but deeply felt. We approach each project with curiosity and care,
                  seeking to understand the unique context and requirements before developing solutions that are both
                  beautiful and functional.
                </p>
                <p>
                  We work across scales and typologies, from intimate residential spaces to commercial environments, and
                  from furniture pieces to comprehensive spatial experiences. Regardless of scale, our commitment to
                  quality, detail, and narrative remains constant.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-serif">Services</h2>
              <ul className="grid grid-cols-2 gap-2">
                <li>Interior Design</li>
                <li>Spatial Planning</li>
                <li>Product Design</li>
                <li>Furniture Design</li>
                <li>Exhibition Design</li>
                <li>Retail Design</li>
                <li>Hospitality Design</li>
                <li>Residential Design</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-xl font-serif">Team</h2>
              <div className="grid grid-cols-2 gap-8">
                <div>
                  <h3 className="font-medium">Emily Chen</h3>
                  <p className="text-sm text-muted-foreground">Founder, Creative Director</p>
                </div>
                <div>
                  <h3 className="font-medium">David Wong</h3>
                  <p className="text-sm text-muted-foreground">Founder, Design Director</p>
                </div>
                <div>
                  <h3 className="font-medium">Sarah Kim</h3>
                  <p className="text-sm text-muted-foreground">Senior Interior Designer</p>
                </div>
                <div>
                  <h3 className="font-medium">Michael Tan</h3>
                  <p className="text-sm text-muted-foreground">Product Designer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="relative h-[50vh] w-full">
              <Image src="/images/design.jpg" alt="Studio space" fill className="object-cover" />
            </div>
            <div className="relative h-[30vh] w-full">
              <Image src="/images/design.jpg" alt="Team at work" fill className="object-cover" />
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}