import Image from "next/image";
import InnerBanner from "../(Components)/InnerBanner";
import TickerTape from "../(Components)/(Home)/TickerTape";
import CTA from "../(Components)/CTA";
import LogoCarousel from "../(Components)/LogoCarousel";
import Headings from "../(Components)/Headings";
import VIDEOFRAME from "../(Components)/VideoFrame";
import Transperancy from "../(Components)/(Home)/Transperancy";
import OurJourney from "../(Components)/Gallery/DoubleCarousel";
import Loop from "../(Components)/(Home)/Loop";

const Gallery = () => {
  return (
    <>
      <InnerBanner
        bgImage="/assets/Banner_Assets/Gallery.webp"
        bgPosition="top"
        eyebrowText="Gallery"
        title="New Gallery"
        desc="Our Journey Memories"
      />
      <LogoCarousel title={"Our Trusted Partners"} Mpadding="60px 20px 0px 20px" />
      <div id="photos" className="scroll-anchor-70">
        <Headings
          eyebrowText="New Gallery"
          eyebrowColor={"#095e3f"}
          headingText="Our Journey"
          descriptionText="Every cause we support is driven by real needs, real people, and real outcomes."
        />
        <OurJourney />
      </div>
      <div id="media" className="scroll-anchor-70">
        <Headings
          eyebrowText="Electronic Media Presence"
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
              iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/n4B3jUIxLv8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
              vidtitle:
                "UTV7 | India Regional Soft Launch of the CIRDAP–REEDS Rural Innovation Awards 2026",
              viddesc:
                "UTV7 reports on the India regional soft launch of the CIRDAP–REEDS Rural Innovation Awards 2026 programme.",
            },
            {
              iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/C0FHNRZxoRs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
              vidtitle:
                "Hybiz TV News | India Regional Soft Launch of the CIRDAP–REEDS Rural Innovation Awards 2026",
              viddesc:
                "Hybiz TV News covers the India regional soft launch event of the CIRDAP–REEDS Rural Innovation Awards 2026 programme.",
            },
            {
              iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/zmfWCNDBb4w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
              vidtitle: "International Women's Day",
              viddesc:
                "REEDS marks International Women's Day, celebrating the strength and resilience of women driving change in rural communities.",
            },
            {
              iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/V7U5e2cyvxQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
              vidtitle: "REEDS School WASH Activities",
              viddesc:
                "A look inside REEDS' school WASH programme, bringing clean water, sanitation and hygiene education to rural classrooms.",
            },
            {
              iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/qQzexfcC_94" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
              vidtitle: "World Water Day 2025",
              viddesc:
                "REEDS observes World Water Day 2025, spotlighting efforts to secure safe drinking water for rural communities.",
            },
            {
              iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/MW9Nx-8bYqk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
              vidtitle:
                "REEDS NGO Working for Rural Empowerment – Village Visit",
              viddesc:
                "REEDS NGO staff visit a rural village to review ongoing rural empowerment and development initiatives on the ground.",
            },
            {
              iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/cCfjgpf4ZqQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
              vidtitle: "Key Highlights of REEDS' Work",
              viddesc:
                "A quick look back at the key highlights of REEDS' work across education, water, sanitation and rural development.",
            },
          ]}
          columns={3}
          desktopPadding="0px 50px 100px 50px"
          mobilePadding="0px 20px 0px 20px"
        />
      </div>

      <div id="annual-report" className="scroll-anchor-70">
        <Transperancy />
      </div>

      <TickerTape />
      <CTA />
      <Loop />
    </>
  );
};

export default Gallery;
