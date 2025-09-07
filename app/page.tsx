// app/page.js

"use client";
import Image from "next/image";

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

      {/* Naga Kiri */}
   <Image
  src="/asset/naga-kiri.png"
  alt="Dragon Left"
  width={250}
  height={250}
  className="absolute top-10 -left-5 animate-sway"
/>


      {/* Naga Kanan */}
      <Image
        src="/asset/naga-kanan.png"
        alt="Dragon Right"
        width={250}
        height={250}
        className="absolute top-10 -right-5 animate-sway"
      />

      {/* Gunung */}
      <Image
        src="/asset/gunung4.png"
        alt="Mountain"
        width={500}
        height={200}
         unoptimized
        className="absolute bottom-0 w-full animate-fadeIn"
      />

      {/* Konten Tengah pakai gambar responsif */}
      <div className="relative z-10 text-center -mt-10 md:-mt-16">
        <Image
          src="/asset/coming1.png"
          alt="Coming Soon Creanomic 2025"
          width={800}
          height={600}
          className="mx-auto w-[90%] sm:w-[70%] md:w-[50%] lg:w-[40%] h-auto animate-float "
          unoptimized
          priority
        />
      </div>
    </main>
  );
}
