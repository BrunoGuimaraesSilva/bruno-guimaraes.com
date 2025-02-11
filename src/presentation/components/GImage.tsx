import Image, { ImageProps } from "next/image";
import { useState } from "react";
import { Skeleton } from "src/presentation/ui/skeleton";

interface GenericImageProps extends Omit<ImageProps, "src" | "alt"> {
  width?: number;
  height?: number;
  src: string;
  alt: string;
  fallback?: React.ReactNode;
}

export default function GImage({
  width = 100,
  height = 100,
  src,
  alt,
  fallback = <Skeleton height={height} width={width} />, 
  ...rest
}: GenericImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return <>{fallback}</>;
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      onError={() => setHasError(true)}
      {...rest}
    />
  );
}
