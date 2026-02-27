import { ReactNode } from "react";
import { notFound } from "next/navigation";
import { getDictionary } from "@/lib/getDictionary";
import Navbar from "@/components/navbar/Navbar";

const supportedLanguages = ["en", "hi"];

export async function generateStaticParams() {
  return supportedLanguages.map((lang) => ({ lang }));
}

export default async function LangLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!supportedLanguages.includes(lang)) {
    notFound();
  }

  const dictionary = await getDictionary(lang as "en" | "hi");

  return (
    <>
      <Navbar dictionary={dictionary} lang={lang as "en" | "hi"} />
      {children}
    </>
  );
}