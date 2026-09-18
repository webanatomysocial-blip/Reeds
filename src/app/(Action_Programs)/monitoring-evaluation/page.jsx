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
        bgImage="/assets/Banner_Assets/monitoring-evaluation.webp"
        eyebrowText="Action Programs"
        title="Monitoring & Evaluation"
        desc="Tracking impact on the ground so every program keeps delivering real, measurable outcomes."
      />

      <Headings
        eyebrowText="Gallery"
        eyebrowColor={"#095e3f"}
        headingText="Monitoring Developmental Programs"
        descriptionText="Every cause we support is driven by real needs, real people, and real outcomes."
      />
      <ProjectGallery
        images={[
          "/assets/Main_Project_Gallery/Monitoring and evaluation/IMG-20221013-WA0023.webp",
          "/assets/Main_Project_Gallery/Monitoring and evaluation/IMG-20230127-WA0127 (1).webp",
          "/assets/Main_Project_Gallery/Monitoring and evaluation/IMG-20230208-WA0024 (1).webp",
          "/assets/Main_Project_Gallery/Monitoring and evaluation/IMG-20230209-WA0009 (1).webp",
          "/assets/Main_Project_Gallery/Monitoring and evaluation/IMG20220901124839.webp",
          "/assets/Main_Project_Gallery/Monitoring and evaluation/IMG20230123171408 (1).webp",
          "/assets/Main_Project_Gallery/Monitoring and evaluation/IMG20230124124603 (1).webp",
          "/assets/Main_Project_Gallery/Monitoring and evaluation/IMG_20220902_125721 (1).webp",
          "/assets/Main_Project_Gallery/Monitoring and evaluation/IMG_20220903_105050 (1).webp",
          "/assets/Main_Project_Gallery/Monitoring and evaluation/IMG_20220903_175805 (1).webp",
        ]}
      />
      <div className="content-div">
        <p className="para-text">
         <strong> Tracking Progress, Strengthening Impact:</strong> As National Level Monitoring
          Agency to the Ministry of Rural Development, REEDS conducted
          comprehensive evaluations across 60 villages in 6 districts of Tamil
          Nadu and Andhra Pradesh during 2024-25, assessing key rural
          development programs’ implementation and impact. Monitoring progress,
          empowering communities.
        </p>
      </div>
      <ProgramDetailsTable
        columns={[
          "Program",
          "State",
          "Districts",
          "Villages",
          "Schemes Covered",
          "Population Touched",
        ]}
        rows={[
          [
            "NLM PI 2025-26",
            "AP & KA",
            "Kurnool, Nandyal, Sri Sathya Sai, YSR Kadapa, Koppal & Ballari",
            60,
            11,
            "11,000",
          ],
          [
            "Special Monitoring 2025-26",
            "TN",
            "Tiruchirappalli District",
            4,
            "MGNREGA & PMAY – G",
            "1,050",
          ],
          [
            "NLM PI 2024-25",
            "AP & TN",
            "Eluru, Guntur, NTR, Tirupathuru, Kallakuruchi, Nagapatanam",
            60,
            11,
            "12,000",
          ],
        ]}
      />

      <Headings
        eyebrowText=""
        eyebrowColor={"#095e3f"}
        headingText="Other Programs."
        descriptionText="Every cause we support is driven by real needs, real people, and real outcomes."
      />
      <ActionProgram currentSlug="monitoring-evaluation" />

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

export default MonitoringEvaluation;
