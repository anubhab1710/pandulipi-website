import React, { useState } from 'react'
import LatestEventCard from './LatestEventCard'

function Hero3() {
    // const [items, setItems] = useState([])
    // fetch("https://gogoanime.consumet.stream/popular")
    //                 .then((response) => response.json())
    //                 .then((animelist) => setItems(animelist));

    const items = [
        {
            animeId: 1,
            animeImg: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.tI-fwrZIwEN4vkxcU24g7AHaEK%26pid%3DApi&f=1&ipt=ce4454730c936a1c648871d4966b90dc5570c820b0fa836f85bf15dc83cfd510&ipo=images",
            animeTitle: "Mob Psycho 100"
        },
        {
            animeId: 2,
            animeImg: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.tI-fwrZIwEN4vkxcU24g7AHaEK%26pid%3DApi&f=1&ipt=ce4454730c936a1c648871d4966b90dc5570c820b0fa836f85bf15dc83cfd510&ipo=images",
            animeTitle: "Mob Psycho 100"
        },
        {
            animeId: 3,
            animeImg: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.tI-fwrZIwEN4vkxcU24g7AHaEK%26pid%3DApi&f=1&ipt=ce4454730c936a1c648871d4966b90dc5570c820b0fa836f85bf15dc83cfd510&ipo=images",
            animeTitle: "Mob Psycho 100"
        },
        {
            animeId: 4,
            animeImg: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.tI-fwrZIwEN4vkxcU24g7AHaEK%26pid%3DApi&f=1&ipt=ce4454730c936a1c648871d4966b90dc5570c820b0fa836f85bf15dc83cfd510&ipo=images",
            animeTitle: "Mob Psycho 100"
        },
        {
            animeId: 5,
            animeImg: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.tI-fwrZIwEN4vkxcU24g7AHaEK%26pid%3DApi&f=1&ipt=ce4454730c936a1c648871d4966b90dc5570c820b0fa836f85bf15dc83cfd510&ipo=images",
            animeTitle: "Mob Psycho 100"
        },
        {
            animeId: 6,
            animeImg: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.tI-fwrZIwEN4vkxcU24g7AHaEK%26pid%3DApi&f=1&ipt=ce4454730c936a1c648871d4966b90dc5570c820b0fa836f85bf15dc83cfd510&ipo=images",
            animeTitle: "Mob Psycho 100"
        },
        {
            animeId: 7,
            animeImg: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.tI-fwrZIwEN4vkxcU24g7AHaEK%26pid%3DApi&f=1&ipt=ce4454730c936a1c648871d4966b90dc5570c820b0fa836f85bf15dc83cfd510&ipo=images",
            animeTitle: "Mob Psycho 100"
        },
    ]

  return (
    <div className='bg-[#EEEEEE]'>
        <h2 className='text-5xl text-center p-10 text-[#295C7A] xl:text-7xl'>LATEST EVENTS</h2>
        <div className='flex justify-start items-center overflow-x-scroll gap-x-10 p-5 pb-20'>
            {items.map((item) =>
                <LatestEventCard key={item.animeId} link={item.animeImg} title={item.animeTitle}/>
            )}
        </div>
    </div>
  )
}

export default Hero3