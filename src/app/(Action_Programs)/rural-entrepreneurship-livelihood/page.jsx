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
        bgImage="/assets/Banner_Assets/rural-entrepreneurship-livelihood.jpg"
        eyebrowText="Action Programs"
        title="Rural Entrepreneurship & Livelihood Promotion"
        desc="Helping rural communities build lasting livelihoods through enterprise and self-reliance."
      />

      <Headings
        eyebrowText="Gallery"
        eyebrowColor={"#095e3f"}
        headingText="Monitoring Developmental Programs"
        descriptionText="Every cause we support is driven by real needs, real people, and real outcomes."
      />
      <ProjectGallery images={[
          "/assets/Main_Project_Gallery/Rural Entrepreneurship & Livelihood Promotion/IMG20221124112616.jpg",
          "/assets/Main_Project_Gallery/Rural Entrepreneurship & Livelihood Promotion/WhatsApp Image 2022-07-15 at 2.35.34 PM (3).jpeg",
          "/assets/Main_Project_Gallery/Rural Entrepreneurship & Livelihood Promotion/WhatsApp Image 2022-08-18 at 11.51.13 AM.jpeg",
          "/assets/Main_Project_Gallery/Rural Entrepreneurship & Livelihood Promotion/WhatsApp Image 2022-11-24 at 7.52.14 PM (1).jpeg",
          "/assets/Main_Project_Gallery/Rural Entrepreneurship & Livelihood Promotion/WhatsApp Image 2022-12-29 at 4.30.02 PM.jpeg",
        ]} />
  <div className="content-div">
        <p className="para-text">
          REEDS believes India’s growth towards a five trillion-dollar economy
          can be catalyzed by the growth and development of the unorganized
          and rural sector and thereby playing a more meaningful role in the
          economy and consequent contribution towards equitable economic
          growth. Our key interventions in this area include:
        </p>
        <ul className="content-list">
          <li>
            REEDS had established a ‘Resource Center’, for providing
            knowledge and support for practical and commercial usage of
            renewable energy towards sustainable rural development and
            livelihoods promotion in cooperation with the Department of
            Economic and Social Affairs of United Nations, Winrock
            International India, and APITCO.
          </li>
          <li>
            To disseminate information to promote the cause of SMME
            entrepreneurship in Rural Areas, REEDS is in the process of
            publishing literature and extending training that would help
            establish/develop Small, Medium, and Micro Entrepreneurship and
            create employment.
          </li>
          <li>
            REEDS is an empaneled District Resource Agency to Andhra Pradesh
            Food Processing Society to facilitate financial assistance and
            handholding for the formalization of eligible micro food
            processing enterprises under the Pradhan Mantri Formalization of
            Micro Food Processing Enterprises Scheme [PMFPES] for 6 Districts
            in Andhra Pradesh.
          </li>
        </ul>
      </div>
      <Headings
        eyebrowText=""
        eyebrowColor={"#095e3f"}
        headingText="Other Programs."
        descriptionText="Every cause we support is driven by real needs, real people, and real outcomes."
      />
      <ActionProgram currentSlug="rural-entrepreneurship-livelihood" />

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

export default RuralEntrepreneurshipLivelihood;
