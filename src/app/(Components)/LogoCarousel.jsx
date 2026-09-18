import React from "react";
import Image from "next/image";
import "@/app/(Css)/LogoCarousel.css";

// Images
const defaultImages = [
  { src: "/assets/LogoCarousel/CIRDPA-150x150.png", link: "https://cirdap.org/" },
  { src: "/assets/LogoCarousel/zenith.png", link: "https://zenithenergy.com/" },
  { src: "/assets/LogoCarousel/amrita-vishwa-1.png", link: "https://www.amrita.edu/" },
  { src: "/assets/LogoCarousel/anurag-1-150x150.png", link: "https://www.anurag.edu.in/" },
  { src: "/assets/LogoCarousel/good-gov-150x150.png", link: "https://www.cgg.gov.in/" },
  { src: "/assets/LogoCarousel/life-skills.png", link: "https://www.lifeskill.org.in/" },
  { src: "/assets/LogoCarousel/manage-300x196.jpg.jpeg", link: "https://www.manage.gov.in/" },
  { src: "/assets/LogoCarousel/shobhit-150x150.png", link: "https://www.shobhituniversity.ac.in/" },
  { src: "/assets/LogoCarousel/social-brirds-150x150.png", link: "https://socialbirds.org/" },
  { src: "/assets/LogoCarousel/NIAM.png", link: "https://www.ccsniam.gov.in/" },
  { src: "/assets/LogoCarousel/APPC.png", link: "https://www.appc.in/" },
];

export default function LogoCarousel({
  title = "Co-Innovative Partnerships",
  partnersImages = [],
  Dpadding = "100px 50px 0",
  Mpadding = "60px 20px "
}) {

  const imagesToRender = (partnersImages.length ? partnersImages : defaultImages).map((item) =>
    typeof item === "string" ? { src: item, link: null } : item
  );

  return (
    <section className="recognitions-section partners-section" style={{ "--d-padding": Dpadding, "--m-padding": Mpadding }}>
          <h2 className="eyebrow-text">{title}</h2>

      <div className="recognitions-container">

        <div className="recognitions-text-col">
        </div>

        <div className="recognitions-marquee-col">
          <div className="recognitions-marquee-track">

            {imagesToRender.map(({ src, link }, index) => (
              <LogoItem key={`param-${index}`} src={src} link={link} alt={`Partner ${index + 1}`} />
            ))}

            {imagesToRender.map(({ src, link }, index) => (
              <LogoItem key={`dup-${index}`} src={src} link={link} alt={`Partner Duplicate ${index + 1}`} />
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}

function LogoItem({ src, link, alt }) {
  const image = <Image src={src} alt={alt} className="recognition-img" fill sizes="180px" />;

  return (
    <div className="recognition-item">
      {link ? (
        <a href={link} target="_blank" rel="noopener noreferrer" style={{ position: "absolute", inset: 0 }}>
          {image}
        </a>
      ) : (
        image
      )}
    </div>
  );
}