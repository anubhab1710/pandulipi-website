import React from 'react'
import Hero from './Hero'
import Hero2 from './Hero2'
import Hero3 from './Hero3'
// import Hero4 from './Hero4'
import ContactUs from "./components/ContactUs";

function Home() {
  return (
    <>
        <Hero/>
        <Hero2/>
        <Hero3/>
        {/* <Hero4/> */}
        <ContactUs/>
    </>
  )
}

export default Home