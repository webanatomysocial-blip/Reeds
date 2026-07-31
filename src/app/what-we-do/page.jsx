import Image from "next/image";
import InnerBanner from "../(Components)/InnerBanner";
import CTA from "../(Components)/CTA";
import ReedsProjects from "../(Components)/(Projects)/ProjectList";
import TickerTape from "../(Components)/(Home)/TickerTape";
import Headings from "../(Components)/Headings";
import ActionProgram from "../(Components)/(Home)/ActionProgram";
import Awards from "../(Components)/(Home)/Awards";
import Locations from "../(Components)/WhatWeDo/Locations";
import Loop from "../(Components)/(Home)/Loop";

const WhatWeDo = () => {   
  return (
    <>
      <InnerBanner 
        bgImage="/assets/banner.avif"
        eyebrowText="Action Programs"
        title="Programs That 
Makes Difference"
        desc="Programs that uplift communities through education, healthcare and live support."
      />
       
    <Headings
        eyebrowText="Founders Vision"
        eyebrowColor={"#095e3fff"}
        headingText="Action Programs."
        descriptionText="Every cause we support is driven by real needs, real people, and real outcomes."
      />
      <ActionProgram />
      <Locations/>
       <Headings
        eyebrowText="Awards & recognition"
        eyebrowColor={"#095e3fff"}
        headingText="Recognised by the country."
        descriptionText="Every cause we support is driven by real needs, real people, and real outcomes."
      />
      <Awards />
      <TickerTape />
      <CTA />
      <Loop />

    </>
    
  );
};

export default WhatWeDo;


