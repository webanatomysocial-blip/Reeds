import Image from "next/image";
import "@/app/(Css)/(Home)/Founder.css";
const Founders = () => {
  return (
    <div className="founders-section">
      <div className="founders-container">
        <div className="vis-mis-row">
          <div className="vis-mis">
            <h2 className="sub-head-text" style={{ fontWeight: "400" }}>
              Our Vision
            </h2>
            <p className="sub-para-text">
              An empowered and inclusive rural India thrives through sustainable
              growth, equal opportunities, education, healthcare, technology,
              and community-driven initiatives for all.
            </p>
          </div>
          <div className="vis-mis-image-mobile">
            <Image
              src="/assets/About_Assets/about.webp"
              alt="REEDS Founders"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
          <div className="vis-mis">
            <h2 className="sub-head-text" style={{ fontWeight: "400" }}>
              Our Mission
            </h2>
            <p className="sub-para-text">
             We implement innovative strategies through public, private, and community partnerships to drive sustainable and inclusive socio-economic development, while strengthening rural capabilities and enabling communities to achieve improved outcomes at scale.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Founders;
