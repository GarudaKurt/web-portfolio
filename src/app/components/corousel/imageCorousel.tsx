import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  images: { image: string }[];
};

export default function Carousel({ images }: Props) {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    });
  }, [emblaApi]);

  return (
    <div className="relative">
      <div className="overflow-hidden rounded-t-lg" ref={emblaRef}>
        <div className="flex">
          {images.map((img, index) => (
            <div
              className="relative h-48 overflow-hidden rounded-t-2xl"
              key={index}
            >
              <Image
                src={img.image}
                alt={`carousel ${index}`}
                width={300}
                height={180}
                className="w-full h-[160px] object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Carousel dots */}
      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1 z-10">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              selectedIndex === index ? "bg-pink-500" : "bg-white/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
