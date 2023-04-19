import React, { useState } from "react";
import LatestEventCard from "./LatestEventCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./home.css"

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

  function SampleNextArrow(props) {
    const {onClick } = props;
    return (
      <button className="next cadn" onClick={onClick}>
        <i className="fas fa-arrow-right" />
      </button>
    );
  }
  

  function SamplePrevArrow(props) {
    const {onClick } = props;
    return (
      <button  className="prev cadp" onClick={onClick}>
        <i className="fas fa-arrow-left" />
      </button>
    );
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 2,
    initialSlide: 0,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    autoplaySpeed: 4000,
    druggable: true,
    adaptiveHeight: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      }
    ]
  };

  return (
    <div className="bg-[#EEEEEE]">
      <h2 className="text-5xl text-center p-10 text-[#295C7A] xl:text-7xl">
        LATEST EVENTS
      </h2>
      {/* <div className="flex justify-start overflow-x-scroll scrollbar-hide gap-x-10 p-5 pb-20"> */}
      <div className="slide-container">
        <Slider {...settings}>
          {items.map((item) => (
            <LatestEventCard title={item.title} content={item.content} />
          ))}
        </Slider>
      </div>
      {/* <div className="flex justify-start overflow-x-scroll scrollbar-hide gap-x-10 p-5 pb-20">
        {items.map((item) => (
          <LatestEventCard title={item.title} content={item.content} />
        ))}
      </div> */}
    </div>
  );
}

export default Hero3;
