import React from "react";
import LatestEventCard from "./LatestEventCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Hero3() {
  const items = [
    {
      title: "Xpressions",
      content:
        "The annual Creative Writing Contest is held in October. Students participate in this month-long contest and submit articles under various themes. The editorial team receives a staggering number of submissions in English, Bengali, Hindi and Nepali. From poetry to short stories, humorous incidents to argumentative essays, each write-up is filled to the brim with love.",
    },
    {
      title: "Annual Award Ceremony",
      content:
        "The Annual Award Ceremony is the most awaited event of the year. In these event smiling faces collect shiny trophies and certificates. From Budspeak to Xpressions, all the students who had achieved a position in the contests arranged by the Magazine Club are rewarded with exciting goodies and surprises for their wins.",
    },
    {
      title: "Tape a Tale: Stellar",
      content:
        "This is usually held in March. Conducted by Tape a Tale in association with Pandulipi, the event encourages college and university students to come out and share their stories. In the year 2023 Steller’s selection round at JGEC saw judges, like Deon Demamount and Kopal Khanna, the founder of Tape a Tale herself! Jolites from all years share their experiences like dealing with trauma, life lessons, first love, heartbreaks, and humorous accounts that have happened in their college life.",
    },
    {
      title: "International Mother Language Day",
      content:
        "Pandulipi celebrates the International Mother Language Day on 21st every year by inviting students across all cultures to share a write-up in their mother tongue. There are several submissions in languages from Bengali, Hindi and, Nepali, and Santhali, and it is a delight to read every writeup, and indulge in the cultural palette every language has to offer.",
    },
    {
      title: "Wall Magazine",
      content:
        "This is yet another beloved tradition of Pandulipi which involves mounting a Wall Magazine in the Administrative Building. The theme of this year’s Wall Magazine was: Unity in Diversity. Students join hands to create artworks, posters and flamboyant designs that adorns the wall.",
    },
  ];

  return (
    <div className="bg-[#EEEEEE]">
      <h2 className="text-5xl text-center p-10 text-[#295C7A] xl:text-7xl">
        LATEST EVENTS
      </h2>
      <div className=" pb-20">
        <Swiper
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={40}
          slidesPerView={1}
          breakpoints={{
            576: {
              // width: 576,
              slidesPerView: 2,
            },
            768: {
              // width: 768,
              slidesPerView: 3,
            },
          }}
          navigation
          // pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {items.map((item) => (
            <SwiperSlide>
              <div className="pl-10">
                <LatestEventCard title={item.title} content={item.content} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Hero3;
