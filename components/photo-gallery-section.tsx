"use client"

import { useInView } from "@/hooks/use-in-view"
import { useState } from "react"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function PhotoGallerySection() {
  const { ref, inView } = useInView({ threshold: 0.2 })
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const galleryImages = [
    {
      src: "/gallery-a2sv-g7.jpeg",
      alt: "A2SV Group Photo",
      caption: "G7 students beginning the A2SV journey together and supporting one another.",
    },
    {
      src: "/elissa-profile.png",
      alt: "Portfolio Profile",
      caption: "A portrait featured in my personal portfolio.",
    },
  ]

  const openModal = (index: number) => setSelectedImage(index)
  const closeModal = () => setSelectedImage(null)

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length)
    }
  }

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1)
    }
  }

  return (
    <section id="gallery" ref={ref} className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <h2 className="text-sm uppercase tracking-wider text-primary mb-4 font-mono">Photo Gallery</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Moments & Memories</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A collection of memorable moments from my journey in technology, education, and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-xl cursor-pointer transition-all duration-700 hover:scale-105 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => openModal(index)}
            >
              <div className="aspect-square bg-muted relative overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-sm font-medium">{image.caption}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90" onClick={closeModal}>
            <div className="relative max-w-4xl max-h-screen p-4" onClick={(e) => e.stopPropagation()}>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-2 right-2 z-10 text-white hover:bg-white/20"
                onClick={closeModal}
              >
                <X className="w-6 h-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute left-2 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
                onClick={prevImage}
              >
                <ChevronLeft className="w-6 h-6" />
              </Button>

              <Button
                variant="ghost"
                size="icon"
                className="absolute right-2 top-1/2 -translate-y-1/2 z-10 text-white hover:bg-white/20"
                onClick={nextImage}
              >
                <ChevronRight className="w-6 h-6" />
              </Button>

              <div className="relative flex items-center justify-center max-w-4xl mx-auto">
                <img
                  src={galleryImages[selectedImage].src}
                  alt={galleryImages[selectedImage].alt}
                  className="w-full h-auto max-h-[70vh] object-contain rounded-xl"
                />
              </div>
              <div className="text-center mt-4 text-white">
                <p className="text-lg font-medium">{galleryImages[selectedImage].alt}</p>
                <p className="text-sm mt-2">{galleryImages[selectedImage].caption}</p>
              </div>

              <div className="text-center mt-4 text-white">
                <p className="text-sm">
                  {selectedImage + 1} of {galleryImages.length}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
