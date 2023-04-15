import React from "react";
import Pandulipi from "../../assets/img/2022.png";

function Hero2() {
  return (
    <div className="min-h-screen gap-x-60 bg-[#252B42] flex flex-col justify-center items-center xl:flex-row">
      <img
        className="p-10 max-w-sm md:max-w-lg xl:max-w-xl"
        src={Pandulipi}
        alt=""
      />
      <div className="text-white p-10 flex flex-col justify-center items-center xl:gap-y-32">
        <div className="flex flex-col gap-y-3  justify-center items-center">
          <h1 className="text-4xl xl:text-8xl">Pandulipi</h1>
          <h2 className="text-2xl xl:text-6xl">2021-2022</h2>
        </div>
        <a
          href="/elibrary"
          class="m-10 border-2 border-white text-white inline-flex justify-center items-center py-3 px-8 xl:py-4 xl:px-10  xl:text-2xl text-center transition-all hover:scale-110 hover:bg-white hover:text-[#252B42]"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}

export default Hero2;
