import Image from "next/image";
import InnerBanner from "../(Components)/InnerBanner";
import CTA from "../(Components)/CTA";
import ReedsProjects from "../(Components)/(Projects)/ProjectList";
import TickerTape from "../(Components)/(Home)/TickerTape";
import Headings from "../(Components)/Headings";
import Loop from "../(Components)/(Home)/Loop";

const Projects = () => {
  return (
    <>
      <InnerBanner
        bgImage="/assets/Gallery_Assets/Creating-WASH-awareness-among-school-children-1.jpg.jpeg"
        eyebrowText="Projects"
        title="Our Wash Projects"
        desc="Working together for clean water, sanitation & hygiene in schools and communities."
      />
      <Headings
        eyebrowText="OUR INITIATIVES"
        eyebrowColor={"#095e3fff"}
        headingText="Recent Projects."
        descriptionText="Every cause we support is driven by real needs, real people, and real outcomes."
      />
      <ReedsProjects mobilePadding={"0px 20px 60px 20px"} />
      <TickerTape />
      <CTA />
      <Loop />
    </>
  );
};

export default Projects;
