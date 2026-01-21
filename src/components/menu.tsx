"use client";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { menu } from "@/constant";
import Link from "next/link";

// Helper function to render menu items consistently
const renderMenuItem = (item: any, index: number) => {
  return (
    <div key={index} className="bg-amber-950/30 p-6 rounded-lg">
      <h3 className="text-xl font-bold text-amber-300 mb-2">
        {item.type}. {item.title}
      </h3>
      <p className="text-sm mb-4">{item.description || ""}</p>

      {/* Check if item has options array or is a simple item with price */}
      {"options" in item && item.options ? (
        <>
          {item.options.map((option: any, optionIndex: number) => {
            // Handle nested options structure
            if (
              "options" in option &&
              option.options &&
              option.options.length > 0
            ) {
              return (
                <div key={optionIndex} className="mb-4">
                  <div className="font-semibold mb-2">
                    {option.type}. {option.title}
                  </div>
                  {option.description && (
                    <p className="text-sm text-orange-300 mb-2">
                      {option.description}
                    </p>
                  )}
                  {option.options.map(
                    (nestedOption: any, nestedIndex: number) => (
                      <div
                        key={nestedIndex}
                        className="flex justify-between ml-4 mb-1"
                      >
                        <span>
                          {nestedOption.type}. {nestedOption.title}
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
            if ("price" in option && option.price !== undefined) {
              return (
                <div key={optionIndex} className="mb-2">
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
                  {"description" in option && option.description && (
                    <p className="text-sm text-orange-300 ml-4">
                      {option.description}
                    </p>
                  )}
                </div>
              );
            }

            // Handle combo items - options without individual prices
            return (
              <div key={optionIndex} className="mb-1">
                <span className="text-gray-200">• {option.title}</span>
              </div>
            );
          })}

          {/* Show total price for combo items */}
          {"price" in item && (
            <div className="flex justify-between mt-3 pt-2 border-t border-amber-300/30">
              <span className="font-semibold">Total Price:</span>
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
  );
};

const Menu = () => {
  return (
    <section
      id="menu"
      className="py-16 md:py-24 bg-gradient-to-b from-black to-amber-950/30"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-300 mb-4">
            Our Menu
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Discover our authentic Vietnamese dishes prepared with fresh
            ingredients and traditional recipes
          </p>
        </div>

        <Tabs defaultValue="starters" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 md:bg-amber-950/50 md:mb-8 mb-15 mx-auto">
            <TabsTrigger
              value="starters"
              className="data-[state=active]:bg-amber-300 data-[state=active]:text-black"
            >
              Starters & Sides
            </TabsTrigger>
            <TabsTrigger
              value="mains"
              className="data-[state=active]:bg-amber-300 data-[state=active]:text-black"
            >
              Mains
            </TabsTrigger>
            <TabsTrigger
              value="sushi"
              className="data-[state=active]:bg-amber-300 data-[state=active]:text-black"
            >
              Sushi
            </TabsTrigger>
            <TabsTrigger
              value="desserts"
              className="data-[state=active]:bg-amber-300 data-[state=active]:text-black"
            >
              Desserts
            </TabsTrigger>
          </TabsList>

          <TabsContent value="starters" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {menu.startersAndSides.slice(0, 4).map(renderMenuItem)}
            </div>

            <div className="text-center">
              <Button
                variant="outline"
                className="border-amber-300 text-amber-300 hover:bg-amber-900/30"
                asChild
              >
                <Link href="/menu">View Full Starters Menu</Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="mains" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {menu.mains.slice(0, 4).map(renderMenuItem)}
            </div>

            <div className="text-center">
              <Button
                variant="outline"
                className="border-amber-300 text-amber-300 hover:bg-amber-900/30"
                asChild
              >
                <Link href="/menu">View Full Mains Menu</Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="desserts" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {menu.desserts.slice(0, 4).map(renderMenuItem)}
            </div>

            <div className="text-center">
              <Button
                variant="outline"
                className="border-amber-300 text-amber-300 hover:bg-amber-900/30"
                asChild
              >
                <Link href="/menu">View Full Desserts Menu</Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="sushi" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {menu.sushi.slice(0, 4).map(renderMenuItem)}
            </div>

            <div className="text-center">
              <Button
                variant="outline"
                className="border-amber-300 text-amber-300 hover:bg-amber-900/30"
                asChild
              >
                <Link href="/menu">View Full Sushi Menu</Link>
              </Button>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold text-amber-300 mb-4">
            Allergy Information
          </h3>
          <p className="text-lg max-w-2xl mx-auto mb-6">
            If you have a food allergy please inform a member of our staff
            before you place order
          </p>
          <Button
            className="bg-amber-300 text-black hover:bg-amber-400 cursor-pointer"
            onClick={() => {
              const files = ["/menu-1.jpg", "/menu-2.jpg"];
              files.forEach((file) => {
                const link = document.createElement("a");
                link.href = file;
                const fileName = file.split("/").pop() ?? "default.jpg"; // Nếu undefined thì đặt giá trị mặc định
                link.download = fileName;
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
              });
            }}
          >
            Download Full Menu
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Menu;
