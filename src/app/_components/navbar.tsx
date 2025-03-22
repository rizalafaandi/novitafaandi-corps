"use client";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4 border-b border-slate-100">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">
          <Image
            src={"/assets/icons/logo/ic_logo_light.jpeg"}
            alt={`Cover Image for`}
            // className={cn("shadow-sm w-full", {
            //   "hover:shadow-lg transition-shadow duration-200": slug,
            // })}
            className="mr-2 w-10 h-10 md:w-32 md:h-32"
            width={200}
            height={200}
          />
        </Link>
        <div className="md:hidden z-50 relative">
          <div className="flex flex-row items-center gap-x-4">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none flex flex-col items-center"
            >
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: isOpen ? 45 : 0, y: isOpen ? 6 : 0 }}
                transition={{ duration: 0.3 }}
                className="w-6 h-0.5 bg-black dark:bg-white mb-1"
              ></motion.div>
              <motion.div
                initial={{ opacity: 1 }}
                animate={{ opacity: isOpen ? 0 : 1 }}
                transition={{ duration: 0.3 }}
                className="w-6 h-0.5 bg-black dark:bg-white mb-1"
              ></motion.div>
              <motion.div
                initial={{ rotate: 0 }}
                animate={{ rotate: isOpen ? -45 : 0, y: isOpen ? -6 : 0 }}
                transition={{ duration: 0.3 }}
                className="w-6 h-0.5 bg-black dark:bg-white"
              ></motion.div>
            </button>
          </div>
        </div>
        <div className="hidden md:flex space-x-4 justify-center items-center">
          {/* <Link href="/about" className="">
            About
          </Link> */}
          <Link
            href="/katalog"
            className="font-bold hover:cursor-pointer hover:text-slate-400"
          >
            Katalog
          </Link>
          <div className="w-[2px] h-6 bg-black rounded-full" />
          <Link
            href="/contact"
            className="font-bold hover:cursor-pointer hover:text-slate-400"
          >
            Kontak
          </Link>
        </div>
      </div>
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`${
          isOpen ? "mt-4" : ""
        } md:hidden overflow-hidden bg-gray-800`}
      >
        {/* <Link href="/about" className="block  p-4">
          About
        </Link> */}
        <Link href="/katalog" className="block  p-4">
          Katalog
        </Link>
        <Link href="/contact" className="block  p-4">
          Kontak
        </Link>
      </motion.div>
    </nav>
  );
}
