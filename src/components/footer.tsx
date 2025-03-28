import Link from "next/link";
import { Button } from "./ui/button";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-amber-950 py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex items-center mb-6 md:mb-0">
            <Image
              src="/logo.png"
              alt="Hoi An Quan Logo"
              width={55}
              height={55}
              className="mr-2"
            />
            <h2 className="text-xl font-bold text-amber-300">Hoianquan</h2>
          </div>
          <div className="flex gap-4">
            <Link href="#" className="text-amber-300 hover:text-amber-100">
              Facebook
            </Link>
            <Link href="#" className="text-amber-300 hover:text-amber-100">
              Instagram
            </Link>
            <Link href="#" className="text-amber-300 hover:text-amber-100">
              TripAdvisor
            </Link>
          </div>
        </div>

        <div className="border-t border-amber-800 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-bold text-amber-300 mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="#" className="hover:text-amber-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="hover:text-amber-300">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#menu" className="hover:text-amber-300">
                    Menu
                  </Link>
                </li>
                <li>
                  <Link href="#location" className="hover:text-amber-300">
                    Location
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-amber-300 mb-4">
                Opening Hours
              </h3>
              <p className="mb-2">Monday - Sunday</p>
              <p className="mb-4">11:30am - 10:00pm</p>
              <p>We are open 7 days a week including bank holidays</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-amber-300 mb-4">Contact</h3>
              <p className="mb-2">34 Murray Place, Stirling, FK8 2DD</p>
              <p className="mb-2">01786 643 524</p>
              <p className="mb-4">hoianquan2025@gmail.com</p>
            </div>
          </div>

          <div className="text-center mt-8 pt-8 border-t border-amber-800">
            <p>
              &copy; {new Date().getFullYear()} Hoi An Quan. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
