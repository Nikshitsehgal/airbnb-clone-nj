import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://a0.muscache.com/im/pictures/e4a2a61c-589f-4e49-b3b8-968a6bc23389.jpg?im_w=2560"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-1/3 w-full">
        <p className="font-bold text-2xl md:text-4xl lg:text-6xl pb-3 ml-5 md:ml-20 text-white">
          Olympian & <br /> Paralympian <br /> Online <br /> Experiences
        </p>
        <button className="text-black bg-white ml-5 md:ml-20 md:px-4 md:py-2 px-3 py-2 text-sm shadow-md rounded-xl font-semibold my-3 active:scale-90 transition duration-150">
          Explore Now
        </button>
      </div>
    </div>
  );
}

export default Banner;
