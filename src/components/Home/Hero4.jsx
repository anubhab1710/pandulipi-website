import React from "react";
import LatestPostsCard from "./LatestPostsCard";

function Hero4() {
    const posts = [
        {
            title:"The Title",
            content:"Lorem, iure maxime a voluptas aut expedita minus, qui officiis eum voluptatem et nisi asperiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, placeat ab perferendis facilis atque at blanditiis quaerat nobis voluptates hic officia labore vero itaque molestiae quasi ipsa voluptate praesentium excepturi.",
            link:"",
        },
        {
            title:"The Title",
            content:"Lorem, iure maxime a voluptas aut expedita minus, qui officiis eum voluptatem et nisi asperiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, placeat ab perferendis facilis atque at blanditiis quaerat nobis voluptates hic officia labore vero itaque molestiae quasi ipsa voluptate praesentium excepturi.",
            link:"",
        },
        {
            title:"The Title",
            content:"Lorem, iure maxime a voluptas aut expedita minus, qui officiis eum voluptatem et nisi asperiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, placeat ab perferendis facilis atque at blanditiis quaerat nobis voluptates hic officia labore vero itaque molestiae quasi ipsa voluptate praesentium excepturi.",
            link:"",
        },
        {
            title:"The Title",
            content:"Lorem, iure maxime a voluptas aut expedita minus, qui officiis eum voluptatem et nisi asperiores. Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, placeat ab perferendis facilis atque at blanditiis quaerat nobis voluptates hic officia labore vero itaque molestiae quasi ipsa voluptate praesentium excepturi.",
            link:"",
        },
    ]

  return (
    <div className="bg-[#295C7A]">
        <div className="text-white pb-20 flex flex-col items-center">
            <h2 className="text-5xl text-center p-10 xl:text-7xl">LATEST POSTS</h2>
            <div className=" flex overflow-x-scroll w-full gap-x-10 md:gap-x-20 p-10 md:px-20">
                {posts.map((post) => (
                    <LatestPostsCard title={post.title} content={post.content} link={post.link} />
                ))}
            </div>
        </div>
    </div>
  );
}

export default Hero4;
