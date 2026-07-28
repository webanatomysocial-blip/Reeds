import React from "react";
import "@/app/(Css)/LogoCarousel.css";

// Images
const img1 = "/assets/About_Assets/1.avif";
const img2 = "/assets/About_Assets/1.avif";
const img3 = "/assets/About_Assets/1.avif";
const img4 = "/assets/About_Assets/1.avif";
const img6 = "/assets/About_Assets/1.avif";
const img9 = "/assets/About_Assets/1.avif";

export default function LogoCarousel({
  title = "Co-Innovative Partnerships",
  partnersImages = []
}) {

  const defaultImages = [img1, img2, img3, img4, img6, img9];
  const imagesToRender = partnersImages.length ? partnersImages : defaultImages;

  return (
    <section className="recognitions-section partners-section">
          <h2 className="eyebrow-text">{title}</h2>

      <div className="recognitions-container">

        <div className="recognitions-text-col">
        </div>

        <div className="recognitions-marquee-col">
          <div className="recognitions-marquee-track">

            {imagesToRender.map((img, index) => (
              <div key={`param-${index}`} className="recognition-item">
                <img
                  src={img}
                  alt={`Partner ${index + 1}`}
                  className="recognition-img"
                />
              </div>
            ))}

            {imagesToRender.map((img, index) => (
              <div key={`dup-${index}`} className="recognition-item">
                <img
                  src={img}
                  alt={`Partner Duplicate ${index + 1}`}
                  className="recognition-img"
                />
              </div>
            ))}

          </div>
        </div>

      </div>
    </section>
  );
}