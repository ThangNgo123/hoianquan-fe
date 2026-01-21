"use client";
import HeaderMenuPage from "@/components/header-menu-page";
import { menu } from "@/constant";
import { ChevronUp, ImageIcon, Plus, X } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import MenuItemImageModal from "@/components/image-item";

const imagesStarters = [
  { title: "Fried Shrimp Green Rice Crispy", source: "/gallery-1.webp" },
  { title: "Pho bo", source: "/gallery-2.webp" },
  { title: "Sushi Bowl", source: "/gallery-3.webp" },
];

const MenuPage = () => {
  const [expanded, setExpanded] = useState<string | null>(null);
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  const toggleCategory = (category: string) => {
    setExpanded(expanded === category ? null : category);
  };

  return (
    <>
      <HeaderMenuPage />
      <div className="relative grid grid-cols-12 w-full">
        <div className="hidden md:block col-span-3 p-5 w-full">
          <div className="sticky top-30 p-4 rounded-xl border-2 flex flex-col gap-3 border-amber-200 ">
            <h2 className="text-sm font-semibold">Filter by:</h2>
            {[
              { title: "Starters & Sides", key: "startersAndSides" },
              { title: "Mains", key: "mains" },
              { title: "Sushi", key: "sushi" },
              { title: "Desserts", key: "desserts" },
            ].map(({ title, key }) => (
              <div key={key}>
                <div className="flex justify-between items-center">
                  <p className="font-bold">{title}</p>
                  <button
                    onClick={() => toggleCategory(key)}
                    className="text-amber-300 hover:text-amber-100 transition-transform"
                  >
                    {expanded === key ? <X size={20} /> : <Plus size={20} />}
                  </button>
                </div>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: expanded === key ? "auto" : 0,
                    opacity: expanded === key ? 1 : 0,
                  }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <ul className="flex flex-col gap-1 mt-2">
                    {menu[key as keyof typeof menu].map((item, index) => (
                      <Link
                        className="cursor-pointer hover:text-amber-100"
                        href={`#${encodeURIComponent(item.title)}`}
                        key={index}
                      >
                        <li className="text-sm">- {item.title}</li>
                      </Link>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
        <div className="md:col-span-8 col-span-12">
          <div className="p-5">
            {[
              { title: "Starters & Sides", key: "startersAndSides" },
              { title: "Mains", key: "mains" },
              { title: "Sushi", key: "sushi" },
              { title: "Desserts", key: "desserts" },
            ].map(({ title, key }) => (
              <div className="mb-10" key={key}>
                <div className="md:text-5xl text-3xl font-bold mb-2 md:ml-5">
                  {title}
                </div>
                {/* <div className="grid grid-cols-1 md:w-full w-[16rem] mx-auto md:grid-cols-4 gap-6 my-4">
                  {title === "Starters & Sides" &&
                    imagesStarters.map((image, index) => (
                      <div
                        key={index}
                        className="rounded-lg overflow-hidden shadow-lg hover:scale-105 transition-transform duration-300"
                      >
                        <div className="relative h-48">
                          <Image
                            src={image.source}
                            alt={image.title}
                            fill
                            className="object-cover"
                          />
                        </div>

                        <div className="flex items-center justify-between bg-amber-300 text-black p-2 text-xs font-semibold">
                          <span>{image.title}</span>
                        </div>
                      </div>
                    ))}
                </div> */}
                <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
                  {menu[key as keyof typeof menu].map((item, index) => (
                    <div
                      id={item.title}
                      key={index}
                      className="bg-amber-950/30 p-6 rounded-lg "
                    >
                      <div className="grid grid-cols-12 gap-4 items-center justify-center">
                        <div className="col-span-11 text-xl font-bold text-amber-300">
                          {item.type}. {item.title}
                        </div>
                        <div className="col-span-1 justify-center">
                          <MenuItemImageModal
                            option={{
                              title: item.title,
                              options:
                                "options" in item ? item.options || [] : [],
                              description: item.description || "",
                            }}
                          />
                        </div>
                      </div>
                      <p className="text-sm mb-4">{item.description || ""}</p>
                      {/* Check if item has options array or is a simple item with price */}
                      {"options" in item && item.options ? (
                        // Handle items with options array
                        <>
                          {item.options.map((option, index) => {
                            // Handle nested options structure
                            if (
                              "options" in option &&
                              option.options &&
                              option.options.length > 0
                            ) {
                              return (
                                <div key={index} className="mb-4">
                                  <div className="font-semibold">
                                    {option.type}. {option.title}
                                  </div>
                                  {"description" in option &&
                                    option.description && (
                                      <p className="text-sm text-orange-300 mb-2">
                                        {option.description}
                                      </p>
                                    )}
                                  {option.options.map(
                                    (nestedOption, nestedIndex) => (
                                      <div
                                        key={nestedIndex}
                                        className="flex justify-between ml-4 mb-1"
                                      >
                                        <span>
                                          {nestedOption.type}.{" "}
                                          {nestedOption.title}
                                        </span>
                                        <span className="text-amber-300">
                                          <span>£</span>
                                          {nestedOption.price}
                                        </span>
                                      </div>
                                    )
                                  )}
                                </div>
                              );
                            }
                            // Handle simple options with individual prices
                            if (
                              "price" in option &&
                              option.price !== undefined
                            ) {
                              return (
                                <div key={index} className="mb-2">
                                  <div className="flex justify-between">
                                    <span>
                                      {item.options && item.options.length > 1
                                        ? `${option.type}. `
                                        : ""}
                                      {option.title}
                                    </span>
                                    <span className="text-amber-300">
                                      <span>£</span>
                                      {option.price}
                                    </span>
                                  </div>
                                  {"description" in option &&
                                    option.description && (
                                      <p className="text-sm text-orange-300 ml-4">
                                        {option.description}
                                      </p>
                                    )}
                                </div>
                              );
                            }
                            // Handle combo items - options without individual prices
                            return (
                              <div key={index} className="mb-1">
                                <span className="text-orange-300">
                                  • {option.title}
                                </span>
                              </div>
                            );
                          })}
                          {/* Show total price for combo items */}
                          {"price" in item && (
                            <div className="flex justify-between mt-3 pt-2 border-t border-amber-300/30">
                              <span className="font-semibold">
                                Total Price:
                              </span>
                              <span className="text-amber-300 font-semibold">
                                <span>£</span>
                                {item.price as number}
                              </span>
                            </div>
                          )}
                        </>
                      ) : (
                        // Handle simple items with direct price (legacy structure)
                        <div className="flex justify-between">
                          <span>{item.title}</span>
                          <span className="text-amber-300">
                            <span>£</span>
                            {"price" in item ? (item.price as number) : 0}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Allergy Warning Section */}
        <div className="col-span-12 mt-8 mb-12 text-center bg-red-950/20 border border-red-500/30 rounded-lg p-6 mx-5">
          <h3 className="text-xl font-bold text-red-400 mb-4">
            ALLERGY INFORMATION!
          </h3>
          <p className="text-lg max-w-2xl mx-auto font-semibold text-red-300">
            IF YOU HAVE A FOOD ALLERGY PLEASE INFORM A MEMBER OF OUR STAFF BEFORE YOU PLACE ORDER
          </p>
        </div>
        
        {showButton && (
          <button
            onClick={scrollToTop}
            className="fixed cursor-pointer bottom-5 right-5 bg-amber-400 text-white p-3  md:p-5 rounded-full shadow-lg hover:bg-amber-500 transition-all"
          >
            <ChevronUp className="w-6 h-6 md:w-8 md:h-8" />
          </button>
        )}
      </div>
    </>
  );
};

export default MenuPage;
