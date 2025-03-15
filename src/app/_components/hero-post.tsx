"use client";
import { type Author } from "@/interfaces/author";
import DateFormatter from "./date-formatter";
import Image from "next/image";
import { useEffect, useState } from "react";

type Props = {
  title: string;
  coverImage: string;
  date?: string;
  excerpt: string;
  author: Author;
  slug: string;
  subtitle?: string;
};

export function HeroPost({ title, date, excerpt, subtitle }: Props) {
  const [logos, setLogos] = useState("/assets/icons/logo/ic_logo_light.jpeg");
  useEffect(() => {
    const dark = matchMedia(`(prefers-color-scheme: dark)`).matches;
    if (dark) {
      setLogos("/assets/icons/logo/ic_logo_dark.jpeg");
    } else {
      setLogos("/assets/icons/logo/ic_logo_light.jpeg");
    }
  }, []);
  return (
    <section>
      <div className="text-center mb-20">
        <h1 className="text-7xl pb-4 text-center font-extrabold animate-text">
          Kebaya Impian, Pesona Sejati
        </h1>
        <div className="mb-4 md:mb-0 text-lg font-semibold">
          {subtitle ? subtitle : <DateFormatter dateString={date} />}
        </div>
      </div>
      <div className="flex mb-20 md:mb-28 gap-10 items-center">
        <Image
          src={"/assets/icons/logo/hero_icon.jpeg"}
          alt={`Cover Image for`}
          className="mr-2 w-10 h-10 md:w-1/4 md:h-auto rounded-lg"
          width={1300}
          height={100}
        />
        <div className="w-2/3">
          <h4 className="hover:underline text-3xl font-bold pb-10">{title}</h4>
          <p className="text-lg leading-relaxed mb-10">{excerpt}</p>
        </div>
      </div>
    </section>
  );
}
