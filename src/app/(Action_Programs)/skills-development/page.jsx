import InnerBanner from "../../(Components)/InnerBanner";
import Headings from "../../(Components)/Headings";
import ProjectGallery from "../../(Components)/(Projects)/ProjectGallery";
import ActionProgram from "../../(Components)/(Home)/ActionProgram";
import Locations from "../../(Components)/WhatWeDo/Locations";
import Awards from "../../(Components)/(Home)/Awards";
import TickerTape from "../../(Components)/(Home)/TickerTape";
import CTA from "../../(Components)/CTA";
import Loop from "../../(Components)/(Home)/Loop";

const SkillsDevelopment = () => {
  return (
    <>
      <InnerBanner
        bgImage="/assets/Gallery_Assets/DDUGKY-visit-in-Tamil-Nadu-scaled.jpg.jpeg"
        eyebrowText="Action Programs"
        title="Skills Development"
        desc="Vocational training and skilling programs that open doors to steady employment."
      />

      <Headings
        eyebrowText="Gallery"
        eyebrowColor={"#095e3fff"}
        headingText="Monitoring Developmental Programs"
        descriptionText="Every cause we support is driven by real needs, real people, and real outcomes."
      />
      <ProjectGallery />

      <Headings
        eyebrowText=""
        eyebrowColor={"#095e3fff"}
        headingText="Other Programs."
        descriptionText="Every cause we support is driven by real needs, real people, and real outcomes."
      />
      <ActionProgram currentSlug="skills-development" />

      <Locations />
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

export default SkillsDevelopment;
