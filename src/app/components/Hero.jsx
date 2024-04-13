"use client";
import Image from "next/image";
import { useState } from "react";

export default function Hero() {
  const [heroImage, setHeroImage] = useState("hero.jpg");
  return (
    <div className="w-full flex justify-center items-center overflow-hidden relative">
      <Image
        src={`/${heroImage}`}
        alt="Hero Image"
        width={1920}
        height={300}
        className="max-w-full max-h-96 object-cover"
      />
      <div className="absolute text-white backdrop-blur-sm w-full flex flex-col justify-center text-center p-8">
        <h1>Welcome to Kitchen Chronicles</h1>
        <p className="text-2xl ">Where Every Recipe Tells a Story!</p>
        <button className="bg-rose-400 p-2 rounded text-xl font-semibold w-40 mx-auto">
          Let's Cook!
        </button>
      </div>
    </div>
  );
}
