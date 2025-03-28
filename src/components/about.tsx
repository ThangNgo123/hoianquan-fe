import Image from "next/image";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-300 mb-6">
              About Hoianquan
            </h2>
            <p className="text-lg mb-4">
              Phở - the quintessence of Vietnamese cuisine. Associated with the
              rice civilization and existing for hundreds of years, Vietnamese
              phở has followed Vietnamese people to many continents and is loved
              by friends all over the world.
            </p>
            <p className="text-lg mb-4">
              Although today, phở has developed and has many variation, the
              secret to having a bowl of "family-style phở with a rich ancient
              flavour" is still in the broth and other meaningful things.
            </p>
            <p className="text-lg">
              "The path of phở" is also the path to preserving and promoting the
              quintessence of Vietnamese culinary culture.
            </p>
          </div>
          <div className="w-full md:w-1/2 relative h-[400px] rounded-lg overflow-hidden">
            <Image
              src="/about-image.jpg"
              alt="Vietnamese Pho"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
