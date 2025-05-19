"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { projects } from "@/lib/projects";
import { useState } from "react";
import PlanGallery from "@/components/PlanGallery";

export default function ProjectPage({ params }: { params: { id: string } }) {
  // This would typically come from a CMS or data source

  const project = projects[params.id as keyof typeof projects];
  const [showPlans, setShowPlans] = useState(false);

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <main className="min-h-screen">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-16">
          {/* Project description - sticky left */}
          <div className="lg:w-1/2">
            <div className="lg:sticky lg:top-24 space-y-8">
              <Link
                href="/"
                className="inline-flex items-center text-sm hover:underline"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Volver a proyectos
              </Link>
              <div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif mb-2">
                  {project.title}
                </h1>
                <p className="text-sm text-muted-foreground">
                  {project.category}{" "}
                  {project.location && `| ${project.location}`}
                </p>
              </div>

              <div className="prose max-w-none">
                <p>{project.description}</p>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  {project.year && (
                    <div>
                      <h3 className="text-sm font-medium">Year</h3>
                      <p className="text-sm text-muted-foreground">
                        {project.year}
                      </p>
                    </div>
                  )}
                  {project.area && (
                    <div>
                      <h3 className="text-sm font-medium">Area</h3>
                      <p className="text-sm text-muted-foreground">
                        {project.area}
                      </p>
                    </div>
                  )}
                  {project.client && (
                    <div>
                      <h3 className="text-sm font-medium">Client</h3>
                      <p className="text-sm text-muted-foreground">
                        {project.client}
                      </p>
                    </div>
                  )}
                  {project.services && (
                    <div className="col-span-2">
                      <h3 className="text-sm font-medium">Services</h3>
                      <ul className="text-sm text-muted-foreground">
                        {project.services.map((service, index) => (
                          <li key={index}>{service}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {project.plans && project.plans.length > 0 && (
                    <button
                      onClick={() => setShowPlans(true)}
                      className="mt-4 inline-block text-sm text-primary underline hover:opacity-80"
                    >
                      Ver piezas gráficas
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Project images - scrollable right */}
          <div className="lg:w-1/2 space-y-4">
            <div className="flex justify-end mb-2">
              <span className="text-sm text-muted-foreground">scroll</span>
              <ChevronRight className="h-4 w-4 text-muted-foreground" />
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 auto-rows-[180px] sm:auto-rows-[220px]">
              {project.images.map((image, index) => {
                const gridStyles = [
                  "col-span-2 row-span-1",
                  "col-span-1 row-span-2",
                  "col-span-2 row-span-2",
                  "col-span-3 row-span-1",
                ];

                return (
                  <motion.div
                    key={index}
                    className={`relative rounded-xl overflow-hidden ${
                      gridStyles[index % gridStyles.length]
                    }`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <button onClick={() => setSelectedImage(image)}>
                      <Image
                        src={image || "/placeholder.svg"}
                        alt={`${project.title} - Image ${index + 1}`}
                        fill
                        className="w-full h-auto object-cover"
                      />
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selectedImage}
              alt="Expanded view"
              width={1600}
              height={1200}
              className="max-w-[90vw] max-h-[90vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
            />

            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 text-white text-2xl font-bold"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>
      )}
      {showPlans && (
        <PlanGallery
          images={project.plans}
          onClose={() => setShowPlans(false)}
        />
      )}
    </main>
  );
}
