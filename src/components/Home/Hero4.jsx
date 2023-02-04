import React from "react";

function Hero4() {
  return (
    <div className="bg-[#295C7A]">
        <div className="text-white pb-20 flex flex-col items-center">
            <h2 className="text-5xl text-center p-10 xl:text-7xl">LATEST POSTS</h2>
            <div className="flex flex-col md:bg-[#224e68] items-center md:flex-row">
                <img className="max-w-sm p-10 md:p-0" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmlpnk72yciwc.i.optimole.com%2FcqhiHLc.WqA8~2eefa%2Fw%3Aauto%2Fh%3Aauto%2Fq%3A75%2Fhttps%3A%2F%2Fbleedingcool.com%2Fwp-content%2Fuploads%2F2020%2F10%2FChainsawMan_GN01_C1_Web-copy.jpg&f=1&nofb=1&ipt=b8114d3c2c074ea973c965613b268e59fdd69078a356d38257a57c55b1a48856&ipo=images" alt="" />
                <div className="p-10 flex flex-col items-center justify-center max-w-xl gap-y-10 md:items-start">
                    <h3 className="text-4xl xl:text-6xl">The Title</h3>
                    <p className="text-center overflow-hidden h-28  xl:h-56 xl:text-xl md:text-left">Lorem, iure maxime a voluptas aut expedita minus, qui officiis eum voluptatem et nisi asperiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, placeat ab perferendis facilis atque at blanditiis quaerat nobis voluptates hic officia labore vero itaque molestiae quasi ipsa voluptate praesentium excepturi.</p>
                    <a href="#" class="inline-flex justify-center items-center py-3 px-8 xl:py-4 xl:px-10  xl:text-2xl text-center font-semibold border-2 border-white text-white">
                        View Post
                    </a> 
                </div>
            </div>
        </div>
    </div>
  );
}

export default Hero4;
