import fs from "fs";
import path from "path";
import Slideshow from "@/components/slideshow/Slideshow";

export default function HomePage() {
  const slidesDir = path.join(process.cwd(), "public/slides");

  const slides = fs
    .readdirSync(slidesDir)
    .filter((file) => /\.(jpg|jpeg|png|webp)$/i.test(file))
    .map((file) => ({
      src: `/slides/${file}`,
      alt: file.replace(/\.[^/.]+$/, ""),
    }));

  return (
    <main>
      <Slideshow slides={slides} />
    </main>
  );
}
