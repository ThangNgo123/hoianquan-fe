"use client";
import Link from "next/link";
import { Button } from "./ui/button";
import { MenuIcon, X } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Lắng nghe sự kiện cuộn để thêm hiệu ứng mượt mà
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="relative h-[90vh] w-full overflow-hidden transition-all">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10"></div>
      <div className="absolute inset-0 bg-[url('/hero-image.jpg')] bg-cover bg-center"></div>

      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 px-4 pt-4 md:px-8 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-md py-2 shadow-md"
            : "bg-transparent py-4"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center transition-all duration-300">
            <Image
              src="/logo.png"
              alt="Hoi An Quan Logo"
              width={isScrolled ? 60 : 80}
              height={isScrolled ? 60 : 80}
              className="mr-2 transition-all duration-300"
            />
            <h1
              className={`text-2xl font-bold text-amber-300 md:text-3xl transition-all duration-300 ${
                isScrolled ? "text-xl md:text-2xl" : ""
              }`}
            >
              Hoianquan
            </h1>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="outline"
            size="icon"
            className="md:hidden border-amber-300 text-amber-300"
            onClick={() => setOpen(true)}
          >
            <MenuIcon className="h-6 w-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {["About", "Menu", "Gallery", "Location"].map((item) => (
              <Link
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-amber-300 font-bold hover:text-amber-100 transition-all duration-300"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Menu - Custom Animation */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="fixed inset-0 bg-black z-50 w-full h-screen flex flex-col items-center justify-center"
          >
            {/* Close Button */}
            <button
              className="absolute top-5 right-5 text-amber-300"
              onClick={() => setOpen(false)}
            >
              <X className="w-10 h-10" />
            </button>

            {/* Navigation Links */}
            <nav className="flex flex-col gap-7 text-center">
              {["About", "Menu", "Location", "Contact"].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-amber-300 hover:text-amber-100 text-5xl font-bold"
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay:
                      0.1 *
                      ["About", "Menu", "Location", "Contact"].indexOf(item),
                  }}
                >
                  {item}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Content */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <h2 className="text-4xl md:text-6xl font-bold text-amber-300 mb-4">
          Authentic Vietnamese Cuisine
        </h2>
        <p className="text-xl md:text-2xl max-w-2xl mb-8">
          Experience the quintessence of Vietnamese culinary tradition
        </p>
        <Button
          asChild
          className="bg-amber-300 text-black hover:bg-amber-400 text-lg px-8 py-6 cursor-pointer"
        >
          <Link href="/menu">View Menu</Link>
        </Button>
      </div>
    </header>
  );
};

export default Header;
