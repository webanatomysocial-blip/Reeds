import Image from "next/image";
import HomeBanner from "./(Components)/(Home)/HomeBanner";
import TickerTape from "./(Components)/(Home)/TickerTape";
import Headings from "./(Components)/Headings";
import CTA from "./(Components)/CTA";
import ImpactCards from "./(Components)/(Home)/ImpactCards";
import AboutReeds from "./(Components)/(Home)/AboutReeds";
import Founders from "./(Components)/(Home)/Founders";
import VIDEOFRAME from "./(Components)/VideoFrame";
import ActionProgram from "./(Components)/(Home)/ActionProgram";
import Donate from "./(Components)/(Home)/Donate";
import Transperancy from "./(Components)/(Home)/Transperancy";
import Awards from "./(Components)/(Home)/Awards";
import DummyBlog from "./(Components)/(Home)/DummyBlog";
import Loop from "./(Components)/(Home)/Loop";
const Home = () => {
  return (
    <>
      <HomeBanner />
      <TickerTape />
      <Headings
        eyebrowText="OUR IMPACT"
        eyebrowColor={"#095e3fff"}
        headingText="Change you can measure."
        descriptionText="Every rupee is tracked. Every outcome is audited. Here is what three and a half decades of steady, grassroots work looks like."
      />
      <ImpactCards />
      <AboutReeds />
      <Headings
        eyebrowText="Founders Vision"
        eyebrowColor={"#095e3fff"}
        headingText="Founders Block."
        descriptionText="Every cause we support is driven by real needs, real people, and real outcomes."
      />
      <Founders />
      <Headings
        eyebrowText="Founders Vision"
        eyebrowColor={"#095e3fff"}
        headingText="REED's works."
        descriptionText="Every cause we support is driven by real needs, real people, and real outcomes."
      />
      <VIDEOFRAME
        videos={[
          {
            iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/ZXGObFcjkyA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
            vidtitle:
              "International Rural Development Innovation Challenge–2026",
            viddesc: "Description lorem ipsum",
          },
          {
            iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/ZXGObFcjkyA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
            vidtitle: "World Rural Development Day Poster Release",
            viddesc: "Description lorem ipsum",
          },
        ]}
      />
      <Headings
        eyebrowText="Founders Vision"
        eyebrowColor={"#095e3fff"}
        headingText="Action Programs."
        descriptionText="Every cause we support is driven by real needs, real people, and real outcomes."
      />
      <ActionProgram />
      <Donate />
      <Headings
        eyebrowText="Awards & recognition"
        eyebrowColor={"#095e3fff"}
        headingText="Recognised by the country."
        descriptionText="Every cause we support is driven by real needs, real people, and real outcomes."
      />
      <Awards />
      <Transperancy/>
      <Headings
        eyebrowText="News & Blog"
        eyebrowColor={"#095e3fff"}
        headingText="Stories and insights."
        descriptionText="Feeding families, educating children & rebuilding lives what our impact shows."
      />
      <DummyBlog />
      <TickerTape />
      <CTA />
      <Loop />
    </>
  );
};

export default Home;
