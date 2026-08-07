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
        bgImage="/assets/Gallery_Assets/Creating-Awareness.jpg.jpeg"
        eyebrowText="Action Programs"
        title="Programs That 
Makes Difference"
        desc="Programs that uplift communities through education, healthcare and live support."
      />

      <div id="programs" style={{ scrollMarginTop: "-100px" }}>
        <Headings
          eyebrowText="Founders Vision"
          eyebrowColor={"#095e3fff"}
          headingText="Action Programs."
          descriptionText="Every cause we support is driven by real needs, real people, and real outcomes."
        />
        <ActionProgram showButton={false} showAll />
      </div>
      <div id="locations" style={{ scrollMarginTop: "-100px" }}>
        <Locations />
      </div>
      <div id="awards" style={{ scrollMarginTop: "-100px" }}>
        <Headings
          eyebrowText="Awards & recognition"
          eyebrowColor={"#095e3fff"}
          headingText="Recognised by the country."
          descriptionText="Every cause we support is driven by real needs, real people, and real outcomes."
        />
        <Awards />
      </div>
      <TickerTape />
      <CTA />
      <Loop />
    </>
  );
};

export default WhatWeDo;
