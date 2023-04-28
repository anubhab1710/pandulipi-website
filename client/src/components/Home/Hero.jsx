import React from "react";

function Hero() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <img
        className="absolute -z-10 h-[120vh] w-full object-cover"
        src="https://img.freepik.com/premium-photo/simple-composition-from-many-hardback-books-tinted-classic-blue-color_96336-515.jpg?w=2000"
        alt=""
      />
      <div className="m-5 py-14 rounded-3xl max-w-7xl bg-gray-300 bg-opacity-50 backdrop-blur-md transition-all duration-500 flex flex-col justify-center items-center">
        <h1 className="text-7xl xl:text-8xl">Pandulipi</h1>
        <h2 className="text-5xl xl:text-7xl text-[#295C7A]">The Magazine Club of JGEC</h2>
        <div className="p-10 md:p-20 text-justify max-w-6xl xl:text-2xl">
          <p>
            Soon after the Jalpaiguri Government Engineering College came into
            existence, the then students felt the need to create a society that
            could have represented the latent creativity among students. Thus in
            the year 1969 Magazine Club was constituted.
          </p>
          <br />
          <p>
            Since it got established, The Magazine Club of JGEC has been
            striding steadily in the realm of Literature and Arts. Since 1969,
            the Magazine Club has always put its nose on the grindstone and
            reflected upon the essence of the college through its various
            editions. With an impeccable record of 50+ glorious years, The
            Magazine Club has become synonymous with pride and prestige for any
            member, who has been a part of this great institution.
          </p>
        </div>
        <a
          href="/about"
          class="transition ease-in-out delay-150 inline-flex justify-center items-center py-3 px-8 xl:py-4 xl:px-10  xl:text-2xl text-center font-semibold text-gray-900 border-2 border-[#295C7A] hover:bg-[#295C7A] hover:text-white hover:scale-110 hover:translate-y-1"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}

export default Hero;
