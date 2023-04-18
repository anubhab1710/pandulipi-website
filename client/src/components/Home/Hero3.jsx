import React, { useState } from 'react'
import LatestEventCard from './LatestEventCard'

function Hero3() {
    const items = [
        {
            title: "Xpressions",
            content:"The annual Creative Writing Contest is held in October. Students participate in this month-long contest and submit articles under various themes. The editorial team receives a staggering number of submissions in English, Bengali, Hindi and Nepali. From poetry to short stories, humorous incidents to argumentative essays, each write-up is filled to the brim with love.",
            imgLink: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.tI-fwrZIwEN4vkxcU24g7AHaEK%26pid%3DApi&f=1&ipt=ce4454730c936a1c648871d4966b90dc5570c820b0fa836f85bf15dc83cfd510&ipo=images"

        },
        {
            title: "Annual Award Ceremony",
            content:"The Annual Award Ceremony is the most awaited event of the year. In these event smiling faces collect shiny trophies and certificates. From Budspeak to Xpressions, all the students who had achieved a position in the contests arranged by the Magazine Club are rewarded with exciting goodies and surprises for their wins.",
            imgLink: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.tI-fwrZIwEN4vkxcU24g7AHaEK%26pid%3DApi&f=1&ipt=ce4454730c936a1c648871d4966b90dc5570c820b0fa836f85bf15dc83cfd510&ipo=images"

        },
        {
            title: "Tape a Tale: Stellar",
            content:"This is usually held in March. Conducted by Tape a Tale in association with Pandulipi, the event encourages college and university students to come out and share their stories. In the year 2023 Steller’s selection round at JGEC saw judges, like Deon Demamount and Kopal Khanna, the founder of Tape a Tale herself! Jolites from all years share their experiences like dealing with trauma, life lessons, first love, heartbreaks, and humorous accounts that have happened in their college life.",
            imgLink: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.tI-fwrZIwEN4vkxcU24g7AHaEK%26pid%3DApi&f=1&ipt=ce4454730c936a1c648871d4966b90dc5570c820b0fa836f85bf15dc83cfd510&ipo=images"

        },
        {
            title: "International Mother Language Day",
            content:"Pandulipi celebrates the International Mother Language Day on 21st every year by inviting students across all cultures to share a write-up in their mother tongue. There are several submissions in languages from Bengali, Hindi and, Nepali, and Santhali, and it is a delight to read every writeup, and indulge in the cultural palette every language has to offer.",
            imgLink: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.tI-fwrZIwEN4vkxcU24g7AHaEK%26pid%3DApi&f=1&ipt=ce4454730c936a1c648871d4966b90dc5570c820b0fa836f85bf15dc83cfd510&ipo=images"

        },
        {
            title: "Wall Magazine",
            content:"This is yet another beloved tradition of Pandulipi which involves mounting a Wall Magazine in the Administrative Building. The theme of this year’s Wall Magazine was: Unity in Diversity. Students join hands to create artworks, posters and flamboyant designs that adorns the wall.",
            imgLink: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.tI-fwrZIwEN4vkxcU24g7AHaEK%26pid%3DApi&f=1&ipt=ce4454730c936a1c648871d4966b90dc5570c820b0fa836f85bf15dc83cfd510&ipo=images"
        },
    ]

  return (
    <div className='bg-[#EEEEEE]'>
        <h2 className='text-5xl text-center p-10 text-[#295C7A] xl:text-7xl'>LATEST EVENTS</h2>
        <div className='flex justify-start items-center overflow-x-scroll scrollbar-hide gap-x-10 p-5 pb-20'>
            {items.map((item) =>
                <LatestEventCard title={item.title} content={item.content} imgLink={item.imgLink}/>
            )}
        </div>
    </div>
  )
}

export default Hero3