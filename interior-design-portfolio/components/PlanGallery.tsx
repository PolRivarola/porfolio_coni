"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

interface PlanGalleryProps {
  images: string[];
  onClose: () => void;
}

export default function PlanGallery({ images, onClose }: PlanGalleryProps) {
  const [expandedImage, setExpandedImage] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  // Función para navegar izquierda/derecha
  const goTo = useCallback(
    (dir: "prev" | "next") => {
      setCurrentIndex((prev) => {
        if (dir === "prev") return (prev - 1 + images.length) % images.length;
        else return (prev + 1) % images.length;
      });
    },
    [images.length]
  );

  // Manejo de teclado
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (expandedImage) {
        if (e.key === "ArrowRight") goTo("next");
        if (e.key === "ArrowLeft") goTo("prev");
        if (e.key === "Escape") setExpandedImage(null);
      } else {
        if (e.key === "Escape") onClose();
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [expandedImage, goTo, onClose]);

  return (
    <>
      {/* FONDO DESENFOCADO */}
      <div
        className="fixed inset-0 z-50 bg-black/60 backdrop-blur-lg overflow-auto"
        onClick={onClose}
      >
        <div
          className="min-h-screen w-full p-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          onClick={(e) => e.stopPropagation()}
        >
          {images.map((img, i) => (
            <div
              key={i}
              onClick={() => {
                setExpandedImage(img);
                setCurrentIndex(i);
              }}
              className="relative w-full h-80 rounded-xl overflow-hidden cursor-pointer hover:scale-[1.02] transition-transform duration-300 ease-in-out"
            >
              <Image
                src={img}
                alt={`Plan ${i + 1}`}
                fill
                className="object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* Botón ✕ para cerrar la galería */}
        <button
          onClick={onClose}
          className="fixed top-6 right-8 text-white text-4xl font-bold bg-black/60 backdrop-blur px-3 py-1 rounded-full hover:bg-black/80 z-[70]"
          aria-label="Cerrar galería"
        >
          ✕
        </button>
      </div>

      {/* MODAL EXPANDIDO */}
      {expandedImage && (
        <div
          className="fixed inset-0 z-[60] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setExpandedImage(null)}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            <TransformWrapper
              initialScale={1}
              minScale={1}
              maxScale={5}
              doubleClick={{ disabled: false }}
              wheel={{ disabled: false }}
              pinch={{ disabled: false }}
            >
              <TransformComponent wrapperClass="rounded-lg">
                <Image
                  unoptimized
                  src={images[currentIndex]}
                  alt={`Plano ${currentIndex + 1}`}
                  width={1600}
                  height={1200}
                  className="max-w-[90vw] max-h-[90vh] object-contain"
                />
              </TransformComponent>
            </TransformWrapper>

            {/* Botón cerrar imagen expandida */}
            <button
              onClick={() => setExpandedImage(null)}
              className="absolute top-4 right-4 text-white text-4xl font-bold z-[70]"
              aria-label="Cerrar plano"
            >
              ✕
            </button>

            {/* Flechas de navegación */}
            <button
              onClick={() => goTo("prev")}
              className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 rounded-full p-2"
              aria-label="Anterior"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={() => goTo("next")}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 rounded-full p-2"
              aria-label="Siguiente"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
