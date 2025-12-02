import { useState } from "react";
import { X } from "lucide-react";

const galleryCategories = [
  { id: "all", name: "All" },
  { id: "oldagehome", name: "Old Age Home" },
  { id: "blood", name: "Blood Donation" },
  { id: "eye", name: "Eye Camp" },
  { id: "medical", name: "Medical Camp" },
  { id: "education", name: "Education" },
];

const galleryImages = [
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-02-at-1.32.45-PM-6-1764692142031.jpeg?width=8000&height=8000&resize=contain",
    alt: "Mahatma Old Age Home Residents Group Photo",
    category: "oldagehome",
    title: "Our Beloved Residents",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-02-at-1.32.45-PM-5-1764692141984.jpeg?width=8000&height=8000&resize=contain",
    alt: "Residents Playing Traditional Board Game",
    category: "oldagehome",
    title: "Recreation - Board Games",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-02-at-1.32.45-PM-4-1764692141904.jpeg?width=8000&height=8000&resize=contain",
    alt: "Fun Activities at Old Age Home",
    category: "oldagehome",
    title: "Fun Activities",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-02-at-1.32.45-PM-3-1764692142038.jpeg?width=8000&height=8000&resize=contain",
    alt: "Women Playing Pallanguzhi",
    category: "oldagehome",
    title: "Traditional Games - Pallanguzhi",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-02-at-1.32.45-PM-2-1764692142513.jpeg?width=8000&height=8000&resize=contain",
    alt: "Carrom Board Game",
    category: "oldagehome",
    title: "Indoor Games - Carrom",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-02-at-1.32.45-PM-10-1764692142083.jpeg?width=8000&height=8000&resize=contain",
    alt: "Blood Donation Camp and ENT Camp",
    category: "blood",
    title: "Blood Donation & ENT Camp",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-02-at-1.32.45-PM-9-1764692141834.jpeg?width=8000&height=8000&resize=contain",
    alt: "Free Eye Camp",
    category: "eye",
    title: "Free Eye Camp",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-02-at-1.32.45-PM-8-1764692142077.jpeg?width=8000&height=8000&resize=contain",
    alt: "Free Medical Camp with Medicine Distribution",
    category: "medical",
    title: "Free Medical Camp",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-02-at-1.32.45-PM-7-1764692142279.jpeg?width=8000&height=8000&resize=contain",
    alt: "Free Uniform and Notebooks to Students",
    category: "education",
    title: "Educational Support Program",
  },
  {
    src: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/render/image/public/document-uploads/WhatsApp-Image-2025-12-02-at-1.32.45-PM-1-1764692141636.jpeg?width=8000&height=8000&resize=contain",
    alt: "Founder J.R. Ramesh",
    category: "oldagehome",
    title: "Our Founder",
  },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<typeof galleryImages[0] | null>(null);

  const filteredImages = activeCategory === "all"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <div className="bg-green-50 min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">Our Gallery</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our collection of memorable moments from the old age home and various community service programs.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {galleryCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all ${
                activeCategory === category.id
                  ? "bg-green-700 text-white"
                  : "bg-white text-gray-700 hover:bg-green-100"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={index}
              className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer bg-white"
              onClick={() => setSelectedImage(image)}
            >
              <div className="aspect-[4/3] relative">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <p className="text-white font-semibold text-lg">{image.title}</p>
                  <p className="text-green-200 text-sm">{image.alt}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-4 right-4 text-white hover:text-green-300 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <div className="max-w-4xl max-h-[90vh] relative" onClick={(e) => e.stopPropagation()}>
              <img
                src={selectedImage.src}
                alt={selectedImage.alt}
                className="max-h-[80vh] w-auto object-contain rounded-lg"
              />
              <div className="text-center mt-4">
                <p className="text-white font-semibold text-xl">{selectedImage.title}</p>
                <p className="text-gray-300">{selectedImage.alt}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
