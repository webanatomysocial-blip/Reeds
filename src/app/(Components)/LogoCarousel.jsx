import React from "react";
import Image from "next/image";
import "@/app/(Css)/LogoCarousel.css";

// Images
const defaultImages = [
  "/assets/LogoCarousel/CIRDPA-150x150.png",
  "/assets/LogoCarousel/Z_Logo-3-e1663336214242-768x524.png",
  "/assets/LogoCarousel/amrita-vishwa-1.png",
  "/assets/LogoCarousel/anurag-1-150x150.png",
  "/assets/LogoCarousel/good-gov-150x150.png",
  "/assets/LogoCarousel/life-skills.png",
  "/assets/LogoCarousel/manage-300x196.jpg.jpeg",
  "/assets/LogoCarousel/shobhit-150x150.png",
  "/assets/LogoCarousel/social-brirds-150x150.png"
];

export default function LogoCarousel({
  title = "Co-Innovative Partnerships",
  partnersImages = [],
  Dpadding = "100px 50px 0",
  Mpadding = "60px 20px "
}) {

  const imagesToRender = partnersImages.length ? partnersImages : defaultImages;

  return (
    <section className="recognitions-section partners-section" style={{ "--d-padding": Dpadding, "--m-padding": Mpadding }}>
          <h2 className="eyebrow-text">{title}</h2>

      <div className="recognitions-container">

        <div className="recognitions-text-col">
        </div>

        <div className="recognitions-marquee-col">
          <div className="recognitions-marquee-track">

            {imagesToRender.map((img, index) => (
              <div key={`param-${index}`} className="recognition-item">
                <Image
                  src={img}
                  alt={`Partner ${index + 1}`}
                  className="recognition-img"
                  fill
                  sizes="180px"
                />
              </div>
            ))}

            {imagesToRender.map((img, index) => (
              <div key={`dup-${index}`} className="recognition-item">
                <Image
                  src={img}
                  alt={`Partner Duplicate ${index + 1}`}
                  className="recognition-img"
                  fill
                  sizes="180px"
                />
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}