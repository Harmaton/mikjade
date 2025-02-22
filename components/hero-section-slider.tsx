"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "./ui/images-slider";
import Link from "next/link";

export function ImagesSliderHero() {
  const images = [
    '/cabinet1.jpg',
    '/mdoor.jpg',
    '/wad.jpg',
    '/cabinet2.jpg',
    '/cabinet3.jpg',
    '/cabinet4.jpg',
    '/cabinet6.jpg',
    '/imageg.jpg',
    '/gypsum.jpg',
    '/door.jpg',
    '/fl1.jpg'
  ];
  return (
    <ImagesSlider className="h-[35rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <h1 className="font-playfair text-6xl text-center md:text-7xl text-white font-semibold">
              Mikjade Ventures Limited
            </h1>
        <motion.p className="font-semibold text-xl md:text-2xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
        Your one-stop solution for <span className="bg-amber-500/20 px-1 rounded text-amber-300">custom furniture</span>, <span className="bg-purple-500/20 px-1 rounded text-purple-300">interior design</span>, <span className="bg-emerald-500/20 px-1 rounded text-emerald-300">kitchen interiors</span>, <span className="bg-blue-500/20 px-1 rounded text-blue-300">CCTV installations</span> and all cabinetry services in Africa and beyond
        </motion.p>
        <Link href={'#services'}>
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Explore our Services →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-blue-900 to-transparent" />
        </button>
        </Link>
      </motion.div>
    </ImagesSlider>
  );
}
