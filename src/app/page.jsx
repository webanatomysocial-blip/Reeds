import Image from "next/image";
import Link from "next/link";
import HomeBanner from "./(Components)/(Home)/HomeBanner";
import PillButton from "./(Components)/PillButton";
import TickerTape from "./(Components)/(Home)/TickerTape";
import Headings from "./(Components)/Headings";
import CTA from "./(Components)/CTA";
// import ImpactCards from "./(Components)/(Home)/ImpactCards";
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
      {/*
      <Headings
        eyebrowText="OUR IMPACT"
        eyebrowColor={"#095e3f"}
        headingText="Change you can measure."
        descriptionText="Empowering rural communities across India through inclusive, sustainable development. "
      />
      <ImpactCards />
      */}
      <AboutReeds />
      <Headings
        eyebrowText="Our Vision & Mission"
        eyebrowColor={"#095e3f"}
        headingText="Founders Block."
        descriptionText="Building self-reliant rural communities through opportunity, innovation, and equity. "
      />
      <Founders />
      <Headings
        eyebrowText="in the news"
        eyebrowColor={"#095e3f"}
        headingText="REED's works."
        descriptionText="Creating healthier, skilled, resilient, and self-reliant rural communities."
      />
      <VIDEOFRAME
        videos={[
          {
            iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/ZXGObFcjkyA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
            vidtitle:
              "V6 Telugu News | CIRDAP–REEDS Rural Innovation Awards 2026 Soft Launch",
            viddesc:
              "V6 News covers the Telugu-language soft launch of the CIRDAP–REEDS Rural Innovation Awards 2026, held on 22 December 2025.",
          },
          {
            iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/zmfWCNDBb4w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
            vidtitle: "International Women's Day",
            viddesc:
              "REEDS marks International Women's Day, celebrating the strength and resilience of women driving change in rural communities.",
          },
          {
            iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/cCfjgpf4ZqQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
            vidtitle: "Key Highlights of REEDS' Work",
            viddesc:
              "A quick look back at the key highlights of REEDS' work across education, water, sanitation and rural development.",
          },
        ]}
        columns={3}
      />
      <div className="videoframe-explore-all-wrapper" style={{ display: "flex", justifyContent: "center", marginTop: "20px", marginBottom: "0px" }}>
        <Link href="/gallery#media" style={{ textDecoration: "none" }}>
          <PillButton
            text="Explore All"
            bg="#0b6b3b"
            color="#ffffff"
            arrowBg="#ffffff"
            arrowColor="#0b6b3b"
            hoverFillColor="#f5f5f5"
            hoverTextColor="#000000"
          />
        </Link>
      </div>
      <Headings
        eyebrowText="What we do"
        eyebrowColor={"#095e3f"}
        headingText="Action Programs."
        descriptionText="Advancing rural development through sustainable solutions, partnerships, and lasting impact. "
      />
      <ActionProgram />
      <Donate />
      <Headings
        eyebrowText="Awards & recognition"
        eyebrowColor={"#095e3f"}
        headingText="Recognised by the country."
        descriptionText="Recognised for rural innovation, impactful partnerships, and community-led progress."
      />
      <Awards />
      <Transperancy
        mobilePadding={"0px 20px 60px 20px"}
        desktopPadding={"0px 50px 70px 50px"}
      />
      <Headings
        eyebrowText="News & Blog"
        eyebrowColor={"#095e3f"}
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
