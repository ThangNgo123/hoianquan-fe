"use client";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import { menu } from "@/constant";
import Link from "next/link";

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
          <TabsList className="grid grid-cols-2 md:grid-cols-5 md:bg-amber-950/50 md:mb-8 mb-15 mx-auto">
            <TabsTrigger
              value="starters"
              className="data-[state=active]:bg-amber-300 data-[state=active]:text-black"
            >
              Starters & Sides
            </TabsTrigger>
            <TabsTrigger
              value="noodles"
              className="data-[state=active]:bg-amber-300 data-[state=active]:text-black"
            >
              Vietnamese Noodle Soup
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
            <TabsTrigger
              value="drinks"
              className="data-[state=active]:bg-amber-300 data-[state=active]:text-black"
            >
              Drinks
            </TabsTrigger>
          </TabsList>

          <TabsContent value="starters" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {menu.startersAndSides.slice(0, 4).map((item, index) => {
                return (
                  <div key={index} className="bg-amber-950/30 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-amber-300 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm mb-4">{item.description}</p>
                    {item.options.map((option, index) => {
                      return (
                        <div key={index} className="flex justify-between">
                          <span>
                            {option.type}. {option.title}
                          </span>
                          <span className="text-amber-300">
                            <span>£</span>
                            {option.price}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
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

          <TabsContent value="noodles" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {menu.vietnameseNoodleSoup.slice(0, 4).map((item, index) => {
                return (
                  <div key={index} className="bg-amber-950/30 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-amber-300 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm mb-4">{item.description}</p>
                    {item.options.map((option, index) => {
                      return (
                        <div key={index} className="flex justify-between">
                          <span>
                            {option.type}. {option.title}
                          </span>
                          <span className="text-amber-300">
                            <span>£</span>
                            {option.price}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>

            <div className="text-center">
              <Button
                variant="outline"
                className="border-amber-300 text-amber-300 hover:bg-amber-900/30"
                asChild
              >
                <Link href="/menu">View Full Vietnamese Noodle Menu</Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="desserts" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {menu.desserts.slice(0, 4).map((item, index) => {
                return (
                  <div key={index} className="bg-amber-950/30 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-amber-300 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm mb-4">{item.description}</p>
                    {item.options.map((option, index) => {
                      return (
                        <div key={index} className="flex justify-between">
                          <span>
                            {option.type}. {option.title}
                          </span>
                          <span className="text-amber-300">
                            <span>£</span>
                            {option.price}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
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

          <TabsContent value="drinks" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {menu.drinks.slice(0, 4).map((item, index) => {
                return (
                  <div key={index} className="bg-amber-950/30 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-amber-300 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm mb-4">{item.description}</p>
                    {item.options.map((option, index) => {
                      return (
                        <div key={index} className="flex justify-between">
                          <span>
                            {option.type}. {option.title}
                          </span>
                          <span className="text-amber-300">
                            <span>£</span>
                            {option.price}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
            </div>

            <div className="text-center">
              <Button
                variant="outline"
                className="border-amber-300 text-amber-300 hover:bg-amber-900/30"
                asChild
              >
                <Link href="/menu">View Full Drinks Menu </Link>
              </Button>
            </div>
          </TabsContent>

          <TabsContent value="sushi" className="space-y-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {menu.sushi.slice(0, 4).map((item, index) => {
                return (
                  <div key={index} className="bg-amber-950/30 p-6 rounded-lg">
                    <h3 className="text-xl font-bold text-amber-300 mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm mb-4">{item.description}</p>
                    {item.options.map((option, index) => {
                      return (
                        <div key={index} className="flex justify-between">
                          <span>
                            {option.type}. {option.title}
                          </span>
                          <span className="text-amber-300">
                            <span>£</span>
                            {option.price}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                );
              })}
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
