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

const MonitoringEvaluation = () => {
  return (
    <>
      <InnerBanner
        bgImage="/assets/Gallery_Assets/Monitoring-Studies-REEDS-1.jpeg"
        eyebrowText="Action Programs"
        title="Monitoring & Evaluation"
        desc="Tracking impact on the ground so every program keeps delivering real, measurable outcomes."
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
          "State",
          "Districts",
          "Villages",
          "Schemes Covered",
          "Young Minds Empowered",
          "Population Touched",
        ]}
        rows={[
          [
            "NLM PI 2024-25",
            "AP & TN",
            "Eluru, Guntur, NTR, Tirupathuru, Kallakuruchi, Nagapatanam",
            60,
            11,
            0,
            "12,000",
          ],
          [
            "Special Monitoring 2025-26",
            "TN",
            "Tiruchirappalli District",
            4,
            "MGNREGA & PMAY – G",
            0,
            "1,050",
          ],
          [
            "NLM PI 2025-26",
            "AP & KA",
            "Kurnool, Nandyal, Sri Sathya Sai, YSR Kadapa, Koppal & Ballari",
            60,
            11,
            0,
            "11,000",
          ],
        ]}
      />

      <Headings
        eyebrowText=""
        eyebrowColor={"#095e3fff"}
        headingText="Other Programs."
        descriptionText="Every cause we support is driven by real needs, real people, and real outcomes."
      />
      <ActionProgram currentSlug="monitoring-evaluation" />

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

export default MonitoringEvaluation;
