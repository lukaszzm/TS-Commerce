import Image from "next/image";

interface ProductImageProps {
  src: string;
  alt: string;
}

export function ProductImage({ src, alt }: ProductImageProps) {
  return (
    <div className="mb-4 relative w-full">
      <Image
        src={src}
        alt={alt}
        className="mx-auto"
        width={600}
        height={400}
        priority
      />
    </div>
  );
}
