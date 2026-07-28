import Image from "next/image";
import InnerBanner from "../(Components)/InnerBanner";
import CTA from "../(Components)/CTA";
import ReedsProjects from "../(Components)/(Projects)/ProjectList";
import TickerTape from "../(Components)/(Home)/TickerTape";
import Headings from "../(Components)/Headings";
const Projects = () => {   
  return (
    <>
      <InnerBanner 
        bgImage="/assets/banner.avif"
        eyebrowText="Projects"
        title="Our Wash Projects"
        desc="Working together for clean water, sanitation & hygiene in schools and communities."
      />
        <Headings
        eyebrowText="Lorem Ipsum"
        eyebrowColor={"#095e3fff"}
        headingText="Recent Projects."
        descriptionText="Every cause we support is driven by real needs, real people, and real outcomes."
      />
  <ReedsProjects/>
      <TickerTape />
      <CTA />

    </>
    
  );
};

export default Projects;
