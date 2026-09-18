import InnerBanner from "../(Components)/InnerBanner";
import Transperancy from "../(Components)/(Home)/Transperancy";
import TickerTape from "../(Components)/(Home)/TickerTape";
import CTA from "../(Components)/CTA";
import Loop from "../(Components)/(Home)/Loop";

export default function NewsletterPage() {
  return (
    <>
      <InnerBanner
        bgImage="/assets/Gallery_Assets/DSC_6354.jpg.webp"
        eyebrowText="Gallery"
        title="Newsletter"
        desc="Field updates and impact stories from REEDS, straight from the ground."
      />

     

      <Transperancy
        eyebrowText="NEWSLETTER"
        headingText="Straight from the field."
        descText="Our latest newsletter, covering REEDS' recent activities, milestones and community impact."
        documents={[
          {
            title: "REEDS Newsletter - August 2026",
            date: "August 2026",
            size: "897KB",
            link: "https://reeds.in/reports/August-newsletter-2026.pdf",
            buttonText: "View Newsletter",
          },
          {
            title: "REEDS Newsletter - July 2026",
            date: "July 2026",
            size: "323KB",
            link: "https://reeds991907.substack.com/p/reeds-newsletter-july-2026",
            buttonText: "View Newsletter",
          },
        ]}
      />

      <TickerTape />
      <CTA />
      <Loop />
    </>
  );
}
