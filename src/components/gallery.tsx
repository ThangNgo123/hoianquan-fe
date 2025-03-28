import Image from "next/image";
const images = [
  "/gallery-1.webp",
  "/gallery-2.webp",
  "/gallery-3.webp",
  "/gallery-4.jpg",
  "/gallery-5.jpg",
  "/gallery-6.jpg",
  "/gallery-7.jpg",
  "/gallery-8.webp",
];
const Gallery = () => {
  return (
    <section id="gallery" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-300 mb-4">
            Gallery
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            A glimpse of our delicious dishes and cozy atmosphere
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative h-48 md:h-76 rounded-lg overflow-hidden"
            >
              <Image
                src={image}
                alt="Vietnamese Dish"
                fill
                className="object-cover hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
