"use client";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ImageIcon, X } from "lucide-react";
import Image from "next/image";
import { DialogTitle } from "@radix-ui/react-dialog";
import { ScrollArea } from "./ui/scroll-area";
import { cn } from "@/lib/utils";
interface optionDish {
  title: string;
  source: string;
  price: number;
  type: string;
}
type Props = {
  option: {
    title: string;
    options: optionDish[];
  };
};
const MenuItemImageModal = ({ option }: Props) => {
  const [open, setOpen] = useState(false);
  const optionSourceLeangth = option.options.filter(
    (i) => i.source !== ""
  ).length;
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="cursor-pointer hover:text-amber-300 transition-colors">
          <ImageIcon />
        </button>
      </DialogTrigger>
      <DialogContent className="bg-black border-3 border-amber-300">
        <DialogHeader>
          <DialogTitle className="text-amber-300 font-bold text-md md:text-2xl flex justify-between">
            <p className="text-amber-300 font-bold text-xl md:text-2xl mb-3">
              {option.title}
            </p>
            <button
              onClick={() => setOpen(false)}
              className="rounded-full p-1 hover:bg-amber-950/30 transition-colors cursor-pointer"
            >
              <X className="h-5 w-5" />
            </button>
          </DialogTitle>
        </DialogHeader>
        <ScrollArea className="md:max-h-[27rem] max-h-[26rem]">
          <div
            className={cn(
              "grid gap-2 text-white",
              optionSourceLeangth === 1
                ? "grid-cols-1"
                : "grid-cols-1 md:grid-cols-2"
            )}
          >
            {option.options
              .filter((i) => i.source !== "")
              .map((item, index) => (
                <div key={index}>
                  <Image
                    className={cn(
                      "object-cover rounded-t-lg",
                      optionSourceLeangth === 1 && "w-full"
                    )}
                    width={300}
                    height={300}
                    src={item.source}
                    alt={item.title}
                  ></Image>
                  <p className="flex items-center justify-between mb-3 md:mb-2 rounded-b-lg bg-amber-300 text-black p-2 text-xs font-semibold">
                    <span>
                      {item.type}. {item.title}: <span>£</span>
                      {item.price}
                    </span>
                  </p>
                </div>
              ))}
            {option.options.filter((i) => i.source !== "").length === 0 && (
              <>Comming soon.</>
            )}
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default MenuItemImageModal;
