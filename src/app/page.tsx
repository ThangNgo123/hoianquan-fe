import Image from "next/image";
import Link from "next/link";
import { ChevronDown, MapPin, Phone, Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Header from "@/components/header";
import About from "@/components/about";
import Menu from "@/components/menu";
import Footer from "@/components/footer";
import Location from "@/components/location";
import Gallery from "@/components/gallery";
import InforBar from "@/components/infor-bar";

export default function Home() {
  return (
    <div>
      <Header />

      {/* Info Bar */}
      <InforBar />

      {/* About Section */}
      <About />

      {/* Menu Section */}
      <Menu />

      {/* Gallery Section */}
      <Gallery />

      {/* Location Section */}
      <Location />
    </div>
  );
}
