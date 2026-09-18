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
        bgImage="/assets/Banner_Assets/community-awareness-education.webp"
        eyebrowText="Action Programs"
        title="Community Awareness & Education"
        desc="Building awareness and access to education so communities can drive their own change."
      />
      <Headings
        eyebrowText="Gallery"
        eyebrowColor={"#095e3f"}
        headingText="Monitoring Developmental Programs"
        descriptionText="Every cause we support is driven by real needs, real people, and real outcomes."
      />
      <ProjectGallery
        images={[
          "/assets/Main_Project_Gallery/Community awareness/WhatsApp Image 2025-05-27 at 13.33.43.webp",
          "/assets/Main_Project_Gallery/Community awareness/WhatsApp Image 2025-06-13 at 1.25.18 PM.webp",
          "/assets/Main_Project_Gallery/Community awareness/WhatsApp Image 2025-08-11 at 19.25.51_683c6786.webp",
          "/assets/Main_Project_Gallery/Community awareness/WhatsApp Image 2025-08-29 at 13.49.55_06946a17.webp",
          "/assets/Main_Project_Gallery/Community awareness/WhatsApp Image 2025-08-29 at 15.25.36_6865b352.webp",
          "/assets/Main_Project_Gallery/Community awareness/WhatsApp Image 2025-09-17 at 15.37.57_c7f67ac5.webp",
          "/assets/Main_Project_Gallery/Community awareness/WhatsApp Image 2025-10-21 at 17.55.23_fe59b155.webp",
          "/assets/Main_Project_Gallery/Community awareness/WhatsApp Image 2025-10-22 at 18.13.47_3b318a73.webp",
          "/assets/Main_Project_Gallery/Community awareness/WhatsApp Image 2025-11-10 at 16.59.03_a3c17519.webp",
          "/assets/Main_Project_Gallery/Community awareness/WhatsApp Image 2025-11-21 at 17.02.56_c58d9d9d.webp",
          "/assets/Main_Project_Gallery/Community awareness/WhatsApp Image 2025-11-24 at 15.49.38_370c8af5.webp",
          "/assets/Main_Project_Gallery/Community awareness/WhatsApp Image 2025-11-27 at 14.02.45_dbdc8c21.webp",
          "/assets/Main_Project_Gallery/Community awareness/WhatsApp Image 2025-11-27 at 17.18.00_b61b9f74.webp",
          "/assets/Main_Project_Gallery/Community awareness/WhatsApp Image 2025-11-28 at 14.26.17_6d4be640.webp",
          "/assets/Main_Project_Gallery/Community awareness/WhatsApp Image 2025-12-30 at 10.31.50 AM.webp",
          "/assets/Main_Project_Gallery/Community awareness/WhatsApp Image 2025-12-30 at 10.31.51 AM.webp",
        ]}
        objectPosition="bottom"
      />
      <div className="content-div">
        <p className="para-text">
         <strong>Enabling Healthy Communities:</strong> As Implementation Support Agency to
          Evidence Action International under the Jal Jeevan Mission, REEDS is
          enabling access to safe drinking water through in-line chlorination
          technology across four Andhra Pradesh districts. 12,645 individuals
          (3,323 families) in 10 villages gained access to safe drinking water,
          transforming community health outcomes. Safe water, healthier futures.
        </p>
      </div>
      <ProgramDetailsTable
        columns={[
          "Program",
          "States",
          "Districts",
          "Villages",
          "Population Touched",
        ]}
        rows={[["EAII", "AP", "Krishna", 12, "13,999"]]}
      />
      <Headings
        eyebrowText=""
        eyebrowColor={"#095e3f"}
        headingText="Other Programs."
        descriptionText="Every cause we support is driven by real needs, real people, and real outcomes."
      />
      <ActionProgram currentSlug="community-awareness-education" />
      <Locations />
      <Headings
        eyebrowText="Awards & recognition"
        eyebrowColor={"#095e3f"}
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
