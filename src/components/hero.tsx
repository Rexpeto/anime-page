import Image from "next/image";

const Hero = () => {
  return (
    <header className="flex justyfy-center lg:items-center max-lg:flex-col sm:gap-16 gap-6 py-16 sm:p-16 px-8 bg-hero bg-cover bg-no-repeat">
      <div className="flex-1 flex flex-col gap-10">
        <Image
          src="/logo.svg"
          alt="logo"
          width={60}
          height={60}
          className="object-contain"
        />

        <h1 className="sm:text-6xl text-5xl text-white lg:max-w-lg font-bold leading-[120%]">
          Explore The
          <span className="px-2 bg-red-gradient bg-clip-text text-transparent">
            Diverse Realms
          </span>
          of Anime Magic
        </h1>
      </div>

      <div className="relative lg:flex-1 justify-center w-full h-[60vh]">
        <Image
          src="/chainsaw.webp"
          alt="chainsaw"
          fill
          className="object-contain"
        />
      </div>
    </header>
  );
};

export default Hero;
