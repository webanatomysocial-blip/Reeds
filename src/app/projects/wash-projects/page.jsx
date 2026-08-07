import Link from "next/link";
import InnerBanner from "../../(Components)/InnerBanner";
import PillButton from "../../(Components)/PillButton";
import WashProjectsTable from "../../(Components)/(Projects)/WashProjectsTable";
import TickerTape from "../../(Components)/(Home)/TickerTape";
import CTA from "../../(Components)/CTA";
import Loop from "../../(Components)/(Home)/Loop";

const WashProjects = () => {
  return (
    <>
      <InnerBanner
        bgImage="/assets/Gallery_Assets/Creating-WASH-awareness-among-school-children-1.jpg.jpeg"
        title="Clean Water.
Healthy Communities.
Better Future."
        desc="We conducted 3 visits to Narsapur MPPS to improve water, sanitation facilities and promote hygiene education among students and staff."
      >
        <Link href="/projects" style={{ textDecoration: "none" }}>
          <PillButton
            text="View Projects"
            bg="#F59E0A"
            color="black"
            arrowBg="white"
            arrowColor="black"
            hoverFillColor="white"
            hoverTextColor="black"
          />
        </Link>
        <Link href="/about" style={{ textDecoration: "none" }}>
          <PillButton
            text="See Our Impact"
            bg="#095e3f"
            color="white"
            arrowBg="white"
            arrowColor="#095e3f"
            hoverFillColor="white"
            hoverTextColor="#095e3f"
          />
        </Link>
      </InnerBanner>

      <WashProjectsTable />

      <TickerTape />
      <CTA />
      <Loop />
    </>
  );
};

export default WashProjects;
