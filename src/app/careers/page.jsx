import Image from "next/image";
import InnerBanner from "../(Components)/InnerBanner";
import PillButton from "../(Components)/PillButton";
import TickerTape from "../(Components)/(Home)/TickerTape";
import CTA from "../(Components)/CTA";
import Loop from "../(Components)/(Home)/Loop";
import "../(Css)/Careers.css";

const roleRows = [
  {
    slug: "internships",
    heading: "Internships",
    text: "REEDS provides enriching internship opportunities for students and recent graduates eager to explore the nonprofit sector. These internships are designed to offer hands-on experience through engaging fieldwork and meaningful projects that address real-world challenges. As an intern, you will work closely with our team to understand the unique issues faced by rural communities, gain invaluable insights, and develop innovative solutions to empower and uplift these communities. This is your chance to combine learning with impact, making a difference while building a strong foundation for your career in social development.",
    image: "/assets/Gallery_Assets/Focused-Group-Discussions.webp",
    imageFirst: false,
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLScdqK7DEveQEk3sKMozjHyFjsfrHgqQ-Wx9sXq64akyCEWXsA/viewform",
  },
  {
    slug: "volunteer",
    heading: "Volunteer",
    text: "REEDS provides volunteer opportunities for professionals seeking meaningful experience in the nonprofit sector. Engaging in fieldwork offers firsthand insights into the challenges faced by rural communities, inspiring innovative solutions and impactful contributions.",
    image: "/assets/Gallery_Assets/Assesments-scaled.jpg.webp",
    imageFirst: true,
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSd7YpWiff-NNlaK6bLfX_VcmqqQRJsb0yaUvM6n8zkWlOCSxg/viewform",
  },
  {
    slug: "project-based-roles",
    heading: "Project-Based Roles",
    text: "Welcome to the exciting world of project-based roles at REEDS! These roles are designed for passionate individuals eager to make a meaningful impact while gaining hands-on experience in addressing real-world challenges. As a project-based participant, you'll work closely with our team to design, implement, and manage initiatives that empower underserved communities. These roles offer the perfect opportunity to contribute your skills to transformative projects in areas such as rural development, community empowerment, sustainability, and social entrepreneurship. Whether you're a student, a recent graduate, or an experienced professional, this role will provide you with invaluable insights into the nonprofit sector, expose you to the complexities of fieldwork, and allow you to craft innovative solutions that drive lasting change. Join us and be a part of creating a brighter, more equitable future for all!",
    image: "/assets/Gallery_Assets/Team-interaction-with-Villagers.jpg.webp",
    imageFirst: false,
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSe5ncBcMUZoXh8te8X1ujogBXWJi6aiARrM6yi9_QmAwIT8GQ/viewform",
  },
  {
    slug: "temporary-assignments",
    heading: "Temporary Assignments",
    text: "Temporary assignment roles at REEDS are ideal for individuals looking to contribute their skills and expertise to impactful initiatives on a short-term basis. These roles are designed to address specific needs within our projects, allowing you to make a meaningful difference in a focused timeframe. As part of a temporary assignment, you'll collaborate with our dedicated team to support ongoing programs, conduct fieldwork, or assist with critical tasks such as research, training, or community outreach. These assignments provide a unique opportunity to gain hands-on experience, understand the challenges faced by marginalized communities, and contribute to solutions that create lasting change. Whether you're a professional seeking impactful volunteer work or a student looking to enhance your skills, temporary assignments offer a rewarding way to be part of our mission to empower and uplift communities.",
    image: "/assets/Gallery_Assets/DDUGKY-visit-in-Tamil-Nadu-scaled.jpg.webp",
    imageFirst: true,
    formLink: "https://docs.google.com/forms/d/e/1FAIpQLSe-8L7Ue0OtWp6RRT48hWHn3sfBQ0242Yu-aEir-kqkqQypbQ/viewform",
  },
];

const hiringPositionsLeft = [
  {
    num: "01",
    title: "Program Manager",
    desc: "Programme development, implementation and coordination.",
  },
  {
    num: "02",
    title: "Executive – Finance",
    desc: "Accounting, financial management and statutory compliance.",
  },
  {
    num: "03",
    title: "Research Assistant – Program Development",
    desc: "Research, project proposals and programme development.",
  },
];

const hiringPositionsRight = [
  {
    num: "04",
    title: "Administrative Assistant",
    desc: "Office administration, coordination and record management.",
  },
  {
    num: "05",
    title: "Social Media Intern",
    desc: "Digital communications, content creation and social media engagement.",
  },
];

export default function CareersPage() {
  return (
    <>
      <InnerBanner
        bgImage="/assets/Banner_Assets/Contact.webp"
        bgPosition="top"
        eyebrowText="Careers"
        title="Careers"
        desc="Join us in making a difference—your passion and skills can help transform lives and empower communities."
      />

      <section className="careers-intro">
        <div className="careers-intro-text">
          <h2 className="careers-intro-heading">
            Join Our Team and Make a Difference
          </h2>
          <p className="sub-para-text">
            REEDS is an IS/ISO 9001:2015 certified not-for-profit organization
            with wide experience in the design, development, implementation,
            and evaluation of programs related to the enhancement of the
            quality of rural life. REEDS is actively engaged in several change
            initiatives for the socio-economic empowerment of rural
            communities with a focus on creating scalable and lasting
            solutions. We address social, economic and environmental
            challenges faced by the Rural communities. Our work is driven by
            a shared passion for creating positive change in the quality life
            of Rural communities. We embrace diversity in all its forms and
            are committed to fostering an inclusive work environment where
            everyone feels valued and respected. Join our dedicated and
            talented team who share a common vision and are committed to
            social justice and empowerment.
          </p>
          <p className="sub-para-text">
            REEDS wish to engage the services of social development
            professionals for our various ongoing and upcoming positions.
            Interested individuals are requested to fill the CV template as
            per their suitability and availability.
          </p>
        </div>
        <div className="careers-intro-image">
          <Image
            src=" /assets/Banner_Assets/Home-2.webp"
            alt="REEDS team"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </section>

      <section className="careers-positions">
        <div className="careers-positions-header">
          <span className="eyebrow-text">VARIOUS</span>
          <h2 className="head-text">Positions</h2>
        </div>

        {/* --- REEDS | WE ARE HIRING FEATURED SECTION --- */}
        <div className="careers-hiring-card" id="we-are-hiring">
          <div className="hiring-header-area">
            <div className="hiring-eyebrow-wrap">
              <span className="hiring-pulse-dot"></span>
              <span className="hiring-eyebrow-text">REEDS | WE ARE HIRING</span>
            </div>
            <h3 className="hiring-title">Join Us in Improving Rural Life!</h3>
            <p className="sub-para-text hiring-intro">
              REEDS, a not-for-profit organisation working to improve rural livelihoods and empower communities, invites applications for the following positions:
            </p>
          </div>

          <div className="hiring-positions-grid-2col">
            <div className="hiring-positions-col">
              {hiringPositionsLeft.map((pos) => (
                <div className="hiring-position-item" key={pos.num}>
                  <div className="hiring-pos-badge">{pos.num}</div>
                  <div className="hiring-pos-details">
                    <div className="hiring-pos-head">
                      <h4 className="hiring-pos-title">{pos.title}</h4>
                      <a
                        href={`mailto:info@reeds.in?subject=Application%20for%20${encodeURIComponent(pos.title)}%20-%20REEDS`}
                        className="hiring-pos-apply-link"
                        title={`Apply for ${pos.title}`}
                      >
                        Apply ↗
                      </a>
                    </div>
                    <p className="hiring-pos-desc">{pos.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="hiring-positions-col">
              {hiringPositionsRight.map((pos) => (
                <div className="hiring-position-item" key={pos.num}>
                  <div className="hiring-pos-badge">{pos.num}</div>
                  <div className="hiring-pos-details">
                    <div className="hiring-pos-head">
                      <h4 className="hiring-pos-title">{pos.title}</h4>
                      <a
                        href={`mailto:info@reeds.in?subject=Application%20for%20${encodeURIComponent(pos.title)}%20-%20REEDS`}
                        className="hiring-pos-apply-link"
                        title={`Apply for ${pos.title}`}
                      >
                        Apply ↗
                      </a>
                    </div>
                    <p className="hiring-pos-desc">{pos.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hiring-note-banner">
            <span className="hiring-note-icon">✨</span>
            <p className="hiring-note-text">
              We welcome applications from motivated and confident individuals with relevant qualifications, skills and a genuine interest in contributing to rural development.
            </p>
          </div>

          <div className="hiring-meta-grid">
            <div className="hiring-meta-item">
              <span className="hiring-meta-icon">📍</span>
              <div className="hiring-meta-body">
                <strong className="hiring-meta-label">Location</strong>
                <p className="hiring-meta-desc">The positions are based in Hyderabad, with flexibility for some functions to be performed remotely.</p>
              </div>
            </div>
            <div className="hiring-meta-item">
              <span className="hiring-meta-icon">💼</span>
              <div className="hiring-meta-body">
                <strong className="hiring-meta-label">Compensation &amp; Culture</strong>
                <p className="hiring-meta-desc">REEDS is an equal opportunity employer, offering competitive compensation in line with social sector norms, qualifications and experience.</p>
              </div>
            </div>
          </div>

          <div className="hiring-apply-box">
            <div className="hiring-apply-head">
              <span className="hiring-apply-icon">✉️</span>
              <div>
                <h4 className="hiring-apply-title">How to Apply</h4>
                <p className="hiring-apply-deadline">Application Deadline: <strong>15 November 2026</strong></p>
              </div>
            </div>
            <p className="hiring-apply-instructions">
              Interested candidates may email their CV, a brief cover letter highlighting relevant skills and experience, expected remuneration, and, where applicable, a portfolio of relevant work to{" "}
              <a href="mailto:info@reeds.in?subject=Application%20for%20Position%20-%20REEDS" className="hiring-email-link">
                info@reeds.in
              </a>{" "}
              by <strong>15 November 2026</strong>.
            </p>
            <p className="hiring-shortlist-note">
              * Only shortlisted applicants will be contacted.
            </p>
            <div className="hiring-apply-actions">
              <a
                href="mailto:info@reeds.in?subject=Application%20for%20Position%20-%20REEDS"
                style={{ textDecoration: "none" }}
              >
                <PillButton
                  text="Email Application (info@reeds.in)"
                  bg="#0b6b3b"
                  color="#ffffff"
                  arrowBg="#ffffff"
                  arrowColor="#0b6b3b"
                  hoverFillColor="#f5f5f5"
                  hoverTextColor="#000000"
                />
              </a>
            </div>
          </div>
        </div>

        <div className="careers-row">
          <div className="careers-row-text">
            <h3 className="sub-head-text">
              Expression of Interest (EOI) — Logo &amp; Web Design Services
            </h3>
            <p className="sub-sub-para-text">
              Our partner in rural empowerment,{" "}
              <em>First-global Services &amp; Technologies Pvt. Ltd. (FST)</em>,
              is inviting creative individuals or agencies to help build a
              strong and impactful brand identity. As a social enterprise
              focused on empowering entrepreneurs and enhancing service
              accessibility in Tier II and rural India, FST seeks
              professional support in developing key branding and digital
              assets. The scope includes designing a distinctive logo with
              tagline, official letterheads, visiting cards, and multi-size
              envelopes. A clean, dynamic website is also in the pipeline,
              with potential for future expansion. Interested service
              providers are requested to submit an EOI including a brief
              proposal, relevant portfolio or past work samples, estimated
              timeline, and cost. Submissions are due by May 1, 2025 and
              should be sent to{" "}
              <a href="mailto:fgstpl@gmail.com">fgstpl@gmail.com</a>. Join us
              in shaping a brand that empowers communities and expands access
              to essential services across India.{" "}
              <a href="https://www.reeds.in" target="_blank" rel="noopener noreferrer">
                www.reeds.in
              </a>
            </p>
            <PillButton
              text="Share the profile now"
              bg="#0b6b3b"
              color="#ffffff"
              arrowBg="#ffffff"
              arrowColor="#0b6b3b"
              hoverFillColor="#f5f5f5"
              hoverTextColor="#000000"
            />
          </div>
          <div className="careers-row-image">
            <Image
              src="/assets/Home_Assets/card4.webp"
              alt="Expression of Interest"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        </div>

        {roleRows.map((role) => (
          <div
            id={role.slug}
            className={`careers-row scroll-anchor-60${role.imageFirst ? " careers-row-reverse" : ""}`}
            key={role.heading}
          >
            <div className="careers-row-text">
              <h3 className="sub-head-text">{role.heading}</h3>
              <p className="sub-para-text">{role.text}</p>
              <a href={role.formLink} target="_blank" rel="noopener noreferrer" style={{ textDecoration: "none" }}>
                <PillButton
                  text="Apply Now"
                  bg="#0b6b3b"
                  color="#ffffff"
                  arrowBg="#ffffff"
                  arrowColor="#0b6b3b"
                  hoverFillColor="#f5f5f5"
                  hoverTextColor="#000000"
                />
              </a>
            </div>
            <div className="careers-row-image">
              <Image src={role.image} alt={role.heading} fill style={{ objectFit: "cover" }} />
            </div>
          </div>
        ))}
      </section>

      <TickerTape />
      <CTA />
      <Loop />
    </>
  );
}
