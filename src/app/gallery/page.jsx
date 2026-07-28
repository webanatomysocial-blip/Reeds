import Image from "next/image";
import InnerBanner from "../(Components)/InnerBanner";
import TickerTape from "../(Components)/(Home)/TickerTape";
import CTA from "../(Components)/CTA";
import LogoCarousel from "../(Components)/LogoCarousel";
import Headings from "../(Components)/Headings";
import VIDEOFRAME from "../(Components)/VideoFrame";
import Transperancy from "../(Components)/(Home)/Transperancy";
const Gallery= () => {   
  return (
    <>
      <InnerBanner 
        bgImage="/assets/banner.avif"
        eyebrowText="Gallery"
        title="New Gallery"
        desc="Our Journey Memories"
      />
      <LogoCarousel
      title={"Our Trusted Partners"}
      />
        <Headings
        eyebrowText="Electronic Media Presence"
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
          {
            iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/ZXGObFcjkyA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
            vidtitle: "World Rural Development Day Poster Release",
            viddesc: "Description lorem ipsum",
          },
          {
            iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/ZXGObFcjkyA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
            vidtitle: "World Rural Development Day Poster Release",
            viddesc: "Description lorem ipsum",
          },
          {
            iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/ZXGObFcjkyA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
            vidtitle: "World Rural Development Day Poster Release",
            viddesc: "Description lorem ipsum",
          },
          {
            iframe: `<iframe width="560" height="315" src="https://www.youtube.com/embed/ZXGObFcjkyA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`,
            vidtitle: "World Rural Development Day Poster Release",
            viddesc: "Description lorem ipsum",
          },
        ]}
        columns={3}
        desktopPadding="0px 50px 100px 50px"
        mobilePadding="60px 20px"
      />

      <Transperancy/>

      <TickerTape />
      <CTA />

    </>
    
  );
};

export default Gallery;
