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
import RecentBlogs from "./(Components)/(Home)/RecentBlogs";
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
        eyebrowText="Our Vision & Mission"
        eyebrowColor={"#095e3fff"}
        headingText="Founders Block."
        descriptionText="Every cause we support is driven by real needs, real people, and real outcomes."
      />
      <Founders />
      <Headings
        eyebrowText="in the news"
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
            viddesc:
              "Held on 22 December 2025 at Hotel Plaza, Hyderabad, the event marked the regional launch of the CIRDAP-REEDS International Rural Development Innovation Challenge 2026.",
          },
          {
            iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/mqm1h4mC7LA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
            vidtitle:
              "World Rural Development Day Poster Release | Hyderabad | V6 News",
            viddesc:
              "The official poster for World Rural Development Day was unveiled at an event held in Hyderabad, with coverage by V6 News.",
          },
          // {
          //   iframe: `<iframe width="560" height="315" src="" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
          //   vidtitle: "Republic Day Celebration with a Cause",
          //   viddesc: "A Republic Day celebration dedicated to honoring the nation while promoting social responsibility and community development initiatives.",
          // },
        ]}
        columns={2}
      />
      <Headings
        eyebrowText="What we do"
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
      <Transperancy />
      <Headings
        eyebrowText="News & Blog"
        eyebrowColor={"#095e3fff"}
        headingText="Stories and insights."
        descriptionText="Feeding families, educating children & rebuilding lives what our impact shows."
      />
      <RecentBlogs
        desktopPadding="0px 50px 100px 50px"
        mobilePadding="60px 20px 60px 20px"
      />
      <TickerTape />
      <CTA />
      <Loop />
    </>
  );
};

export default Home;
