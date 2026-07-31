import Image from "next/image";
import InnerBanner from "../(Components)/InnerBanner";
import LogoCarousel from "../(Components)/LogoCarousel";
import ReedsVisionMission from "../(Components)/(About)/ReedsVisionMission";
import ReedsImpact from "../(Components)/(About)/ReedsImpact";
import ReedsValues from "../(Components)/(About)/Values"
import TrustedSupporters from "../(Components)/(About)/TrustedSupporters";
import TickerTape from "../(Components)/(Home)/TickerTape";
import CTA from "../(Components)/CTA";
import Loop from "../(Components)/(Home)/Loop";
const About = () => {   
  return (
    <>
      <InnerBanner 
        bgImage="/assets/banner.avif"
        eyebrowText="About us"
        title="Driven By Purpose And Impact"
        desc="Your support powers life-changing missions, communities and hope."
      />
      <LogoCarousel
      title={"Our Trusted Partners"}
      />
      <ReedsVisionMission/>
      <ReedsImpact/>
<ReedsValues/>
      <TrustedSupporters
        desktopPadding="100px 50px 0px 50px"
        mobilePadding="60px 20px 0px 20px"
      />
      <TrustedSupporters
        subHeading=""
        mainHeading="Advisory Council"
        desktopPadding="50px 50px 0px 50px"
        mobilePadding="30px 20px 0px 20px"
      />
      <TrustedSupporters
        subHeading=""
        mainHeading="Team Members"
        desktopPadding="50px 50px 100px 50px"
        mobilePadding="30px 20px 60px 20px"
      />
      <TickerTape />
      <CTA />
      <Loop />

    </>
    
  );
};

export default About;
