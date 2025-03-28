import { Clock, MapPin, Phone } from "lucide-react";
import { Button } from "./ui/button";

const Location = () => {
  return (
    <section
      id="location"
      className="py-16 md:py-24 bg-gradient-to-b from-black to-amber-950/30"
    >
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-300 mb-4">
            Find Us
          </h2>
          <p className="text-lg max-w-2xl mx-auto">
            Visit us at our convenient location in Stirling
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/2 bg-amber-950/30 p-6 rounded-lg">
            <h3 className="text-xl font-bold text-amber-300 mb-4">
              Contact Information
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-amber-300 mt-1" />
                <div>
                  <p className="font-bold">Address:</p>
                  <p>34 Murray Place, Stirling, FK8 2DD</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-amber-300 mt-1" />
                <div>
                  <p className="font-bold">Phone:</p>
                  <p>01786 643 524</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-amber-300 mt-1" />
                <div>
                  <p className="font-bold">Opening Hours:</p>
                  <p>Monday - Sunday: 11:30am - 10:00pm</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold text-amber-300 mb-4">
                Make a Reservation
              </h3>
              <p className="mb-4">
                For reservations, please call us or use the form below:
              </p>
              <Button
                disabled
                className="w-full bg-amber-300 text-black hover:bg-amber-400"
              >
                Comming Soon ...
              </Button>
            </div>
          </div>

          <div className="md:w-1/2 h-[400px] rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2224.2368021686448!2d-3.941024510315482!3d56.11842159473377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488863002ffddb17%3A0x1af232d0b976bd14!2shoianquan!5e0!3m2!1sen!2suk!4v1743074038009!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="Restaurant Location"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Location;
