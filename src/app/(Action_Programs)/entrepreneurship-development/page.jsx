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

const EntrepreneurshipDevelopment = () => {
  return (
    <>
      <InnerBanner
        bgImage="/assets/Banner_Assets/entrepreneurship-development.webp"
        eyebrowText="Action Programs"
        title="Entrepreneurship Development"
        desc="Equipping aspiring entrepreneurs with the skills and support to build sustainable livelihoods."
      />

      <Headings
        eyebrowText="Gallery"
        eyebrowColor={"#095e3f"}
        headingText="Monitoring Developmental Programs"
        descriptionText="Every cause we support is driven by real needs, real people, and real outcomes."
      />
      <ProjectGallery
        images={[
          "/assets/Main_Project_Gallery/Entrepreneurship Development/IMG20240603171757 (1).webp",
          "/assets/Main_Project_Gallery/Entrepreneurship Development/IMG20240604183937 (1).webp",
          "/assets/Main_Project_Gallery/Entrepreneurship Development/IMG20240715112949 (1).webp",
          "/assets/Main_Project_Gallery/Entrepreneurship Development/IMG20240715122114 (1).webp",
          "/assets/Main_Project_Gallery/Entrepreneurship Development/IMG20240722154111 (1).webp",
          "/assets/Main_Project_Gallery/Entrepreneurship Development/IMG20240722161007 (1).webp",
          "/assets/Main_Project_Gallery/Entrepreneurship Development/IMG20240831142202 (1).webp",
          "/assets/Main_Project_Gallery/Entrepreneurship Development/IMG_20240603_180916 (1).webp",
          "/assets/Main_Project_Gallery/Entrepreneurship Development/IMG_20240831_221153 (1).webp",
          "/assets/Main_Project_Gallery/Entrepreneurship Development/MKKP2214 (1).webp",
        ]}
      />
      <div className="content-div">
        <p className="para-text">
         <strong> Wings of Change: Empowering Women Entrepreneurs:</strong> As the implementing
          partner of Bharat Cares’ transformative Onchee Udaan initiative, REEDS
          successfully equipped 38 women entrepreneurs in Krishna District,
          Andhra Pradesh—empowering low-income women with essential skills and
          resources to build sustainable micro-enterprises. When women rise,
          communities thrive.
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
        rows={[["Onchee Udaan", "AP", "NTR", 2, 152]]}
      />

      <Headings
        eyebrowText=""
        eyebrowColor={"#095e3f"}
        headingText="Other Programs."
        descriptionText="Every cause we support is driven by real needs, real people, and real outcomes."
      />
      <ActionProgram currentSlug="entrepreneurship-development" />

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

export default EntrepreneurshipDevelopment;
