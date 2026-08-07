import InnerBanner from "../../(Components)/InnerBanner";
import Headings from "../../(Components)/Headings";
import ProjectGallery from "../../(Components)/(Projects)/ProjectGallery";
import ProgramDetailsTable from "../../(Components)/(Action_Programs)/ProgramDetailsTable";
import ActionProgram from "../../(Components)/(Home)/ActionProgram";
import Locations from "../../(Components)/WhatWeDo/Locations";
import Awards from "../../(Components)/(Home)/Awards";
import TickerTape from "../../(Components)/(Home)/TickerTape";
import CTA from "../../(Components)/CTA";
import Loop from "../../(Components)/(Home)/Loop";

const CommunityAwarenessEducation = () => {
  return (
    <>
      <InnerBanner
        bgImage="/assets/Gallery_Assets/Creating-Awareness.jpg.jpeg"
        eyebrowText="Action Programs"
        title="Community Awareness & Education"
        desc="Building awareness and access to education so communities can drive their own change."
      />

      <Headings
        eyebrowText="Gallery"
        eyebrowColor={"#095e3fff"}
        headingText="Monitoring Developmental Programs"
        descriptionText="Every cause we support is driven by real needs, real people, and real outcomes."
      />
      <ProjectGallery />

      <ProgramDetailsTable
        columns={[
          "Program",
          "States",
          "Districts",
          "Villages",
          "Schools Engaged",
          "Young Minds Empowered",
          "Population Touched",
        ]}
        rows={[["EAII", "AP", "Krishna", 12, 0, 0, "13,999"]]}
      />

      <Headings
        eyebrowText=""
        eyebrowColor={"#095e3fff"}
        headingText="Other Programs."
        descriptionText="Every cause we support is driven by real needs, real people, and real outcomes."
      />
      <ActionProgram currentSlug="community-awareness-education" />

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

export default CommunityAwarenessEducation;
