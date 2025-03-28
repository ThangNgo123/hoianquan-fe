import { Clock, MapPin, Phone } from "lucide-react";

const InforBar = () => {
  return (
    <div className="bg-amber-900/50 py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 px-4">
        <div className="flex items-center gap-2">
          <Phone className="h-5 w-5 text-amber-300" />
          <span className="text-amber-100">01786 643 524</span>
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="h-5 w-5 text-amber-300" />
          <span className="text-amber-100">
            34 Murray Place, Stirling, FK8 2DD
          </span>
        </div>
        <div className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-amber-300" />
          <div className="text-amber-100 flex md:flex-row flex-col lg:gap-2 gap-1 items-center">
            <div>Open 7 Days:</div>
            <div>Monday - Sunday</div>
            <div>( 11:30am - 10:00pm )</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InforBar;
