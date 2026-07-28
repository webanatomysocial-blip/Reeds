import Image from "next/image";
import InnerBanner from "../(Components)/InnerBanner";

import TickerTape from "../(Components)/(Home)/TickerTape";
import CTA from "../(Components)/CTA";

const About = () => {   
  return (
    <>
      <InnerBanner 
        bgImage="/assets/banner.avif"
        eyebrowText="Contact"
        title="Reach Out. 
We’re Here Always"
        desc="Have questions, ideas, or need support? Connect with us we’re ready to listen & help."
      />
   
      <TickerTape />
      <CTA />

    </>
    
  );
};

export default About;
