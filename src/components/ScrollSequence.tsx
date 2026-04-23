"use client";

import { useEffect, useRef, useState, useMemo } from "react";
import { useScroll, useTransform, useMotionValueEvent } from "framer-motion";

interface ScrollSequenceProps {
  frameCount: number;
  basePath: string;
}

export default function ScrollSequence({ frameCount, basePath }: ScrollSequenceProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const images = useMemo<HTMLImageElement[]>(() => [], []);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    offset: ["start start", "end end"],
  });

  const frameIndex = useTransform(scrollYProgress, [0, 1], [0, frameCount - 1]);

  useEffect(() => {
    let loadedCount = 0;

    const preloadImages = () => {
      for (let i = 1; i <= frameCount; i++) {
        const img = new Image();
        const paddedIndex = i.toString().padStart(3, "0");
        img.src = `${basePath}/ezgif-frame-${paddedIndex}.jpg`;
        img.onload = () => {
          loadedCount++;
          if (loadedCount === frameCount) {
            setImagesLoaded(true);
            renderFrame(0);
          }
        };
        images[i - 1] = img;
      }
    };

    preloadImages();
  }, [frameCount, basePath, images]);

  const renderFrame = (index: number) => {
    const canvas = canvasRef.current;
    if (!canvas || !images[index]) return;

    const context = canvas.getContext("2d");
    if (!context) return;

    const img = images[index];
    
    // Clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Calculate aspect ratio / scale to cover
    const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
    const x = (canvas.width / 2) - (img.width / 2) * scale;
    const y = (canvas.height / 2) - (img.height / 2) * scale;
    
    context.drawImage(img, x, y, img.width * scale, img.height * scale);
  };

  useMotionValueEvent(frameIndex, "change", (latest) => {
    renderFrame(Math.floor(latest));
  });

  useEffect(() => {
    const handleResize = () => {
      if (canvasRef.current) {
        canvasRef.current.width = window.innerWidth;
        canvasRef.current.height = window.innerHeight;
        renderFrame(Math.floor(frameIndex.get()));
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, [frameIndex]);

  return (
    <div className="sticky top-0 h-screen w-full overflow-hidden">
      <canvas
        ref={canvasRef}
        className="h-full w-full object-cover"
      />
      {!imagesLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-[#f5f5f5]">
          <div className="text-black font-serif text-2xl animate-pulse">
            LOADING EXPERIENCE...
          </div>
        </div>
      )}
    </div>
  );
}
