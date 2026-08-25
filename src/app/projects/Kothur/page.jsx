import ProjectBanner from "../../(Components)/(Projects)/ProjectBanner";
import Headings from "../../(Components)/Headings";
import ProjectGallery from "../../(Components)/(Projects)/ProjectGallery";
import ProjectImpact from "../../(Components)/(Projects)/ProjectImpact";
import CTA from "../../(Components)/CTA";
import Loop from "../../(Components)/(Home)/Loop";
import TickerTape from "../../(Components)/(Home)/TickerTape";

export default function KothurProject() {
  const title = "Kothur MPPS";

  return (
    <>
      <ProjectBanner
        title={title}
        description={`We conducted 2 visits to ${title} to improve water, sanitation facilities and promote hygiene education among students and staff.`}
        visits={2}
        students={78}
        faculty={3}
        completed={100}
        image="/assets/Projects_Banner_Assets/Kothur.jpg"
      />
 <Headings
        eyebrowText="OUR IMPACT"
        eyebrowColor="#095e3f"
        headingText="Project Gallery"
        descriptionText="Strengthening school hygiene and access to clean water for 78 students and 3 faculty members."
      />
      <ProjectGallery images={[
    "/assets/Project_Gallery/kothur-gallery/IMG_20260310_132245.jpg",
    "/assets/Project_Gallery/kothur-gallery/IMG_20260310_132501.jpg",
    "/assets/Project_Gallery/kothur-gallery/IMG_20260310_132555.jpg",
    "/assets/Project_Gallery/kothur-gallery/IMG_20260310_135546.jpg",
    "/assets/Project_Gallery/kothur-gallery/IMG_20260310_135604.jpg",
    "/assets/Project_Gallery/kothur-gallery/IMG_20260310_140640.jpg",
    "/assets/Project_Gallery/kothur-gallery/WhatsApp Image 2026-03-10 at 6.05.54 PM.jpeg",
    "/assets/Project_Gallery/kothur-gallery/WhatsApp Image 2026-03-10 at 6.05.54 PM.jpg",
  ]} />
      <ProjectImpact impactText="Improved access to clean water and better hygiene practices among 78 students and 3 faculty members." />
      <TickerTape />

      <CTA />
      <Loop />
    </>
  );
}
