// app/page.js

"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-pink-50 to-pink-300">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/asset/awan.png')] bg-cover bg-center animate-pulse"></div>

      {/* Logo di pojok kiri atas */}
      <div className="absolute top-4 left-6 z-20 animate-fadeIn">
        <Image
          src="/asset/logo.png"
          alt="Logo Creanomic"
          width={120}
          height={40}
          priority
        />
      </div>
      
{/* Naga Kiri fade-in */}
      <motion.div
        className="absolute top-10 -left-5 animate-sway"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.2 }}
      >
        <Image
          src="/asset/naga-kiri.png"
          alt="Dragon Left"
          width={250}
          height={250}
        />
      </motion.div>

      {/* Naga Kanan fade-in */}
      <motion.div
        className="absolute top-10 -right-5 animate-sway"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.4 }}
      >
        <Image
          src="/asset/naga-kanan.png"
          alt="Dragon Right"
          width={250}
          height={250}
        />
      </motion.div>


      {/* Gunung */}
      <Image
        src="/asset/gunung4.png"
        alt="Mountain"
        width={500}
        height={200}
         unoptimized
        className="absolute bottom-0 w-full animate-fadeIn"
      />

       {/* Konten Tengah */}
      <motion.div
        className="relative z-10 text-center -mt-10 md:-mt-16 animate-float"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, delay: 0.6 }}
      >
        <Image
          src="/asset/coming1.png"
          alt="Coming Soon Creanomic 2025"
          width={800}
          height={600}
          className="mx-auto w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] h-auto"
          unoptimized
          priority
        />
      </motion.div>
    </main>
  );
}
