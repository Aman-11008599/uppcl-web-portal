import fs from "fs";
import path from "path";
import Slideshow from "@/components/slideshow/Slideshow";
import Marquee from "@/components/marquee/Marquee";
import { getDictionary } from "@/lib/getDictionary";

export default async function HomePage({ params,}: {params: Promise<{ lang: string }>;}) {
  
  const { lang } = await params;
  const dict = await getDictionary(lang as "en" | "hi");

  // use to automatically pick the images for slideshow
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
      <Marquee />
    </main>
  );
}
