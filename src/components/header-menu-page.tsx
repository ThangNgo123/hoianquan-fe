"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { MenuIcon, X, ChevronDown, ChevronUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { menu } from "@/constant";

const HeaderMenuPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleCategory = (key: string) => {
    setExpanded(expanded === key ? null : key);
  };

  const closeMenu = () => setOpen(false);

  return (
    <header className="relative h-[40vh] w-full overflow-hidden transition-all">
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black z-10"></div>
      <div className="absolute inset-0 bg-[url('/hero-image.jpg')] bg-cover bg-center"></div>

      <nav
        className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 px-4 pt-4 md:px-8 ${
          isScrolled
            ? "bg-black/80 backdrop-blur-md py-2 shadow-md"
            : "bg-transparent py-4"
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center transition-all duration-300">
            <Image
              src="/logo.png"
              alt="Hoi An Quan Logo"
              width={isScrolled ? 50 : 70}
              height={isScrolled ? 50 : 70}
              className="mr-2 transition-all duration-300"
            />
            <div
              className={`text-lg font-bold text-amber-300 md:text-xl transition-all duration-300 ${
                isScrolled ? "text-base md:text-lg" : ""
              }`}
            >
              <Link href={`/`}>Hoianquan</Link>
            </div>
          </div>

          <Button
            variant="outline"
            size="icon"
            className="md:hidden border-amber-300 text-amber-300"
            onClick={() => setOpen(true)}
          >
            <MenuIcon className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
          <Button
            className="md:block hidden font-bold text-amber-300 text-xl"
            asChild
          >
            <Link href={`/`}>Home</Link>
          </Button>
        </div>
      </nav>

      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-4">
        <h2 className="text-2xl md:text-4xl font-bold text-amber-300 mb-4">
          Menu
        </h2>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            className="fixed inset-0 bg-black z-50 w-full h-screen flex flex-col items-center justify-center px-6"
          >
            <button
              className=" bg-amber-300 w-full my-2 text-black font-bold flex flex-row justify-center items-center"
              onClick={closeMenu}
            >
              <span>Close</span>
            </button>

            <nav className="flex flex-col gap-4 w-full max-w-xs">
              {Object.keys(menu).map((key) => (
                <motion.div
                  key={key}
                  className="text-lg font-semibold text-amber-300 border-b border-amber-300 pb-2"
                >
                  <div className="flex justify-between items-center">
                    <p className="text-base">
                      {key
                        .replace(/([A-Z])/g, " $1")
                        .trim()
                        .replace(/\b\w/g, (char) => char.toUpperCase())}
                    </p>
                    <button
                      onClick={() => toggleCategory(key)}
                      className="text-amber-300 hover:text-amber-100 transition-transform"
                    >
                      {expanded === key ? (
                        <ChevronUp size={16} />
                      ) : (
                        <ChevronDown size={16} />
                      )}
                    </button>
                  </div>
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{
                      height: expanded === key ? "auto" : 0,
                      opacity: expanded === key ? 1 : 0,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden mt-2"
                  >
                    <ul className="flex flex-col gap-1">
                      {menu[key as keyof typeof menu].map((item, index) => (
                        <Link
                          className="cursor-pointer text-white hover:text-amber-100 text-sm"
                          href={`/menu/#${item.title}`}
                          key={index}
                          onClick={closeMenu}
                        >
                          <li>{item.title}</li>
                        </Link>
                      ))}
                    </ul>
                  </motion.div>
                </motion.div>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default HeaderMenuPage;
