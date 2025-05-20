import { useEffect, useRef, useState, useCallback } from "react";
import { useRouter } from "next/router";
import { Box } from "@chakra-ui/react";
import { animate, createDraggable, createScope, createSpring } from "animejs";
import { SkeletonCircle } from "src/presentation/ui/skeleton";
import GImage from "./GImage";

import logo from "public/assets/logo.png";

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
  const rootRef = useRef<HTMLDivElement | null>(null);
  const scopeRef = useRef<ReturnType<typeof createScope> | null>(null);
  const [, setRotationCount] = useState(0);
  const router = useRouter();

  useEffect(() => {
    scopeRef.current = createScope({ root: rootRef }).add((self) => {
      createDraggable(".logo", {
        container: [0, 0, 0, 0],
        releaseEase: createSpring({ stiffness: 200 }),
      });

      self.add("rotateLogo", (count) => {
        animate(".logo", {
          rotate: count * 360,
          ease: "out(4)",
          duration: 1500,
        });
      });
    });

    return () => {
      scopeRef.current?.revert();
    };
  }, []);

  const handleClick = useCallback(() => {
    setRotationCount((prev) => {
      const next = prev + 1;
      scopeRef.current?.methods.rotateLogo(next);
      return next;
    });
    router.push("/");
  }, [router]);

  return (
    <Box ref={rootRef}>
      <GImage
        className="logo"
        width={width}
        height={height}
        src={src}
        alt={alt}
        fallback={fallback}
        onClick={handleClick}
        role="button"
        tabIndex={0}
      />
    </Box>
  );
}
