"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function LombaSection() {
  const lombaList = [
    {
      id: 1,
      img: "/lomba/lomba1.png",
      title: "Web Development",
      desc: "Lomba yang menantang peserta untuk membangun website inovatif dengan desain dan fungsi menarik.",
      finalists: [
        { name: "Delta Dev", institution: "Politeknik Negeri Malang" },
        { name: "Tim Icikiwir", institution: "Politeknik Negeri Jember" },
        { name: "AG TIM", institution: "Universitas Brawijaya" }
      ]
    },
    {
      id: 2,
      img: "/lomba/lomba2.png",
      title: "Financial Planner",
      desc: "Kompetisi yang menguji kemampuan perencanaan keuangan dalam menghadapi tantangan ekonomi modern.",
      finalists: [
        { name: "Sultan Wannabe", institution: "Universitas Bina Nusantara Malang" },
        { name: "Revival", institution: "Universitas Brawijaya" },
        { name: "Winner Creanomic2025", institution: "Universitas Brawijaya" }
      ]
    },
    {
      id: 3,
      img: "/lomba/lomba3.png",
      title: "Business Case",
      desc: "Peserta menganalisis dan memecahkan studi kasus bisnis nyata untuk memberikan solusi strategis.",
      finalists: [
        { name: "Profittera Team", institution: "Universitas Brawijaya" },
        { name: "3 Trio Vetdal", institution: "Universitas Brawijaya" },
        { name: "Triverra", institution: "Universitas Brawijaya" }
      ]
    },
    {
      id: 4,
      img: "/lomba/lomba4.png",
      title: "LKTI",
      desc: "Lomba Karya Tulis Ilmiah yang mendorong inovasi dan riset untuk memberikan kontribusi nyata bagi masyarakat.",
      finalists: [
        { name: "G Valley", institution: "Universitas Islam Negeri Maulana Malik Ibrahim Malang" },
        { name: "RERA", institution: "Universitas Andalas" },
        { name: "DejaVu Team", institution: "Universitas Brawijaya" }
      ]
    },
    {
      id: 5,
      img: "/lomba/lomba5.png",
      title: "Creative Poster",
      desc: "Lomba desain poster kreatif yang menggabungkan pesan visual, estetika, dan daya tarik komunikasi.",
      finalists: [
        { name: "Assyfa Fadhilah A.", institution: "Universitas Hasanuddin" },
        { name: "Maziyah Faridah", institution: "Universitas Brawijaya" },
        { name: "Kevin Oktaviano G.P.", institution: "Universitas Brawijaya" }
      ]
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen overflow-hidden">
      {/* === NAVBAR === */}
      <Navbar />

      {/* === GAMBAR CREA1 DI BAWAH NAVBAR === */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="relative w-full overflow-hidden"
      >
        <Image
          src="/asset/crea1.png"
          alt="ornamen bawah navbar"
          width={1920}
          height={400}
          className="w-full object-cover"
          priority
        />
      </motion.div>

      {/* === SECTION BIDANG DAN TANGKAI LOMBA === */}
      <section className="relative py-16 px-6 md:px-20">
        {/* === JUDUL === */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl md:text-3xl font-extrabold text-[#5F1124] mb-2 text-center"
        >
          JUARA BIDANG LOMBA
        </motion.h2>

        <p className="text-gray-700 mb-10 max-w-2xl mx-auto text-center">
          Creanomic 2025 sukses diselenggarakan dengan jumlah pendaftar sebanyak 283 peserta yang berasal dari 27 perguruan tinggi, termasuk Universitas Brawijaya. Peserta yang berpartisipasi berasal dari 11 provinsi di Indonesia, termasuk Jawa Timur. Para peserta terbagi ke dalam dua kategori lomba, yaitu kategori tim dan kategori individu pada cabang lomba Creative Poster.
        </p>

        {/* === GAMBAR LABEL LOMBA (SATU GAMBAR) === */}
        <div className="flex justify-center mb-12">
          <Image
            src="/asset/lomba.png"
            alt="Label Bidang dan Tangkai Lomba"
            width={850}
            height={200}
            className="object-contain drop-shadow-[0_0_12px_rgba(95,17,36,0.4)]"
          />
        </div>

        {/* === GRID LOMBA DENGAN FINALIS === */}
        <div className="relative max-w-7xl mx-auto space-y-16">
          {/* Decorative Background Elements */}
          <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#5F1124]/5 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-amber-500/5 rounded-full blur-3xl"></div>

          {lombaList.map((lomba, lombaIndex) => (
            <motion.div
              key={lomba.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: lombaIndex * 0.1 }}
              viewport={{ once: true }}
              className="relative bg-white rounded-3xl p-8 shadow-xl border-2 border-[#5F1124]/10"
            >
              {/* Header Lomba */}
              <div className="flex flex-col md:flex-row items-center gap-6 mb-8 pb-6 border-b-2 border-gray-100">
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 3 }}
                  className="relative"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-[#5F1124]/20 to-amber-500/20 rounded-full blur-xl"></div>
                  <div className="relative w-24 h-24 flex items-center justify-center">
                    <Image
                      src={lomba.img}
                      alt={lomba.title}
                      width={96}
                      height={96}
                      className="object-contain drop-shadow-lg"
                    />
                  </div>
                </motion.div>

                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl md:text-3xl font-bold text-[#5F1124] mb-2">
                    {lomba.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {lomba.desc}
                  </p>
                </div>
              </div>

              {/* Grid Finalis */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {lomba.finalists.map((finalist, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -8 }}
                    className="group relative"
                  >
                    <div className="relative bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 h-full border-2 border-[#5F1124]/10 hover:border-[#5F1124]/30 transition-all duration-300 overflow-hidden">
                      {/* Ranking Badge */}
                      <div className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-br from-[#5F1124] to-[#8B1538] rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-xs">
                          {index === 0 ? "1ST" : index === 1 ? "2ND" : "3RD"}
                        </span>
                      </div>

                      {/* Trophy Icon */}
                      <div className="mb-4">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-amber-100 to-amber-200">
                          <span className="text-3xl">🏆</span>
                        </div>
                      </div>

                      {/* Finalist Info */}
                      <div className="space-y-3">
                        <h4 className="text-xl font-bold text-[#5F1124] group-hover:text-[#8B1538] transition-colors">
                          {finalist.name}
                        </h4>
                        
                        <div className="flex items-center gap-2 text-gray-600">
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                          <span className="text-sm">{finalist.institution}</span>
                        </div>
                      </div>

                      {/* Decorative Corner */}
                      <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-[#5F1124]/5 to-transparent rounded-tl-full"></div>
                    </div>

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[#5F1124]/10 to-amber-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10 blur-xl"></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <br/>
      <br/>
      {/* === FOOTER === */}
      <Footer />
    </div>
  );
}