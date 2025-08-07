import { useState } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const ImageGallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  // Mock gallery images - in real app, these would come from a backend
  const galleryImages = [
    {
      id: 1,
      url: "/lovable-uploads/dab953ec-4e6a-44e3-8ecd-e3f77763124f.png",
      title: "Model Uydu Yarışması",
      description: "Öğrencilerimizin geliştirdiği model uydu projeleri"
    },
    {
      id: 2,
      url: "https://images.unsplash.com/photo-1446776877081-d282a0f896e2?w=800",
      title: "Roket Lansmanı",
      description: "Su roketimizin başarılı lansmanı"
    },
    {
      id: 3,
      url: "https://images.unsplash.com/photo-1570301855803-f0b0e0c5a7b5?w=800",
      title: "Ekip Çalışması",
      description: "Teknofest hazırlıklarında ekip üyelerimiz"
    },
    {
      id: 4,
      url: "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?w=800",
      title: "İnovasyon Merkezi",
      description: "Projelerimizi geliştirdiğimiz laboratuvar"
    },
    {
      id: 5,
      url: "https://images.unsplash.com/photo-1517976547714-720226b864c1?w=800",
      title: "Teknofest 2024",
      description: "Teknofest yarışmasında takımımız"
    },
    {
      id: 6,
      url: "https://images.unsplash.com/photo-1541873676-a18131494184?w=800",
      title: "Ödül Töreni",
      description: "Başarılarımızı kutladığımız an"
    }
  ];

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="gallery" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 glowing-text">
            Resim Galerisi
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Teknofest yolculuğumuzdan en özel anları ve başarılarımızı keşfedin
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.id}
              className="space-card group cursor-pointer overflow-hidden transform transition-all duration-300 hover:scale-105"
              onClick={() => openModal(index)}
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {image.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Modal */}
        {selectedImage !== null && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <div className="relative max-w-4xl max-h-full">
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 text-white hover:text-primary transition-colors z-10"
              >
                <X size={32} />
              </button>
              
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:text-primary transition-colors z-10"
              >
                <ChevronLeft size={48} />
              </button>
              
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-primary transition-colors z-10"
              >
                <ChevronRight size={48} />
              </button>

              <div className="text-center">
                <img
                  src={galleryImages[selectedImage].url}
                  alt={galleryImages[selectedImage].title}
                  className="max-w-full max-h-[80vh] object-contain rounded-lg"
                />
                <div className="mt-4 text-white">
                  <h3 className="text-xl font-semibold">
                    {galleryImages[selectedImage].title}
                  </h3>
                  <p className="text-gray-300">
                    {galleryImages[selectedImage].description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ImageGallery;