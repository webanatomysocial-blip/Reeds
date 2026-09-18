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
        bgImage="/assets/Action_Programs/Skills-Development.webp"
        eyebrowText="Action Programs"
        title="Skills Development"
        desc="Vocational training and skilling programs that open doors to steady employment."
        bgPosition="top"
      />

      <Headings
        eyebrowText="Gallery"
        eyebrowColor={"#095e3f"}
        headingText="Monitoring Developmental Programs"
        descriptionText="Every cause we support is driven by real needs, real people, and real outcomes."
      />
      <ProjectGallery />
      <div className="content-div">
        <p className="para-text">
          India possesses a significant demographic dividend. Over two-thirds of
          these live in rural areas! India will be able to utilize this dividend
          meaningfully when it is able to equip its workforce with the
          appropriate skills. REEDS trusts that there is a great deal to gain
          for everybody as rural, urban, and international communities interact
          and jointly address the challenge. REEDS’ engagement has yielded
          encouraging results in actionable collaborative skill development
          initiatives, with a focus on skill empowerment in rural and
          unorganized sectors. Our key interventions in this area include:
        </p>
        <ul className="content-list">
          <li>
            Initiating a series of Life Skills and Livelihood Skills
            International conferences aimed at developing the skill levels for
            sustainable rural economies and general quality of life in rural
            India.
          </li>
          <li>
            Organized 5 international conferences in a series that focused on
            the skill development of rural Indians.
          </li>
          <li>
            Established cooperative relationships with industry and academia in
            the area of skills development.
          </li>
        </ul>
      </div>
      <Headings
        eyebrowText=""
        eyebrowColor={"#095e3f"}
        headingText="Other Programs."
        descriptionText="Every cause we support is driven by real needs, real people, and real outcomes."
      />
      <ActionProgram currentSlug="skills-development" />

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

export default SkillsDevelopment;
