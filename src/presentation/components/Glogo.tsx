import Image from "next/image";
import logo from "public/assets/logo.png";

interface LogoProps {
  width?: number;
  height?: number;
}

export default function Logo({ width = 50, height = 50 }: LogoProps) {
  return <Image src={logo} alt="Logo" width={width} height={height} />;
}
