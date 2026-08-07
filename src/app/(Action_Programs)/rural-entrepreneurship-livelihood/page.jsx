import InnerBanner from "../../(Components)/InnerBanner";
import Headings from "../../(Components)/Headings";
import ProjectGallery from "../../(Components)/(Projects)/ProjectGallery";
import ActionProgram from "../../(Components)/(Home)/ActionProgram";
import Locations from "../../(Components)/WhatWeDo/Locations";
import Awards from "../../(Components)/(Home)/Awards";
import TickerTape from "../../(Components)/(Home)/TickerTape";
import CTA from "../../(Components)/CTA";
import Loop from "../../(Components)/(Home)/Loop";

const RuralEntrepreneurshipLivelihood = () => {
  return (
    <>
      <InnerBanner
        bgImage="/assets/Gallery_Assets/Team-interaction-with-Villagers.jpg.jpeg"
        eyebrowText="Action Programs"
        title="Rural Entrepreneurship & Livelihood Promotion"
        desc="Helping rural communities build lasting livelihoods through enterprise and self-reliance."
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
      <ActionProgram currentSlug="rural-entrepreneurship-livelihood" />

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

export default RuralEntrepreneurshipLivelihood;
