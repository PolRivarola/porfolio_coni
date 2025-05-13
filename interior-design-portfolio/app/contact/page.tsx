import Link from "next/link"
import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <Link href="/" className="inline-flex items-center text-sm mb-8 hover:underline">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to projects
        </Link>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          <div className="space-y-8">
            <div>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif mb-6">Contact</h1>
              <div className="prose max-w-none">
                <p>
                  We&apos;re always interested in new projects and collaborations. If you&apos;d like to discuss a
                  potential project or just want to say hello, please get in touch using the form or contact details
                  below.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium">Email</h3>
                <p className="text-sm">hello@studioadjective.com</p>
              </div>
              <div>
                <h3 className="text-sm font-medium">Phone</h3>
                <p className="text-sm">+852 1234 5678</p>
              </div>
              <div>
                <h3 className="text-sm font-medium">Address</h3>
                <p className="text-sm">
                  Studio 5A, 5/F
                  <br />
                  Design Building
                  <br />
                  123 Design Street
                  <br />
                  Central, Hong Kong
                </p>
              </div>
              <div>
                <h3 className="text-sm font-medium">Follow</h3>
                <div className="flex space-x-4 mt-2">
                  <Link href="#" className="text-sm hover:underline">
                    Instagram
                  </Link>
                  <Link href="#" className="text-sm hover:underline">
                    LinkedIn
                  </Link>
                  <Link href="#" className="text-sm hover:underline">
                    Pinterest
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div>
            <form className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <Input id="name" placeholder="Your name" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <Input id="email" type="email" placeholder="Your email" />
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input id="subject" placeholder="Subject" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea id="message" placeholder="Your message" rows={6} />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}