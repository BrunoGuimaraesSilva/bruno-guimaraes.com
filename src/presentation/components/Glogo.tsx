import logo from "public/assets/logo.png";
import { SkeletonCircle } from "src/presentation/ui/skeleton";
import GImage from "./GImage";

interface LogoProps {
  width?: number;
  height?: number;
  src?: string;
  alt?: string;
  fallback?: React.ReactNode;
}

export default function Logo({
  width = 50,
  height = 50,
  src = logo,
  alt = "Logo",
  fallback = <SkeletonCircle size="10" />,
}: LogoProps) {
  return <GImage width={width} height={height} src={src} alt={alt} fallback={fallback} />;
}
