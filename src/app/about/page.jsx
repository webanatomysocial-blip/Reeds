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
        bgImage="/assets/About_Assets/aboutBanner.png"
        eyebrowText="About us"
        title="Driven By Purpose And Impact"
        desc="Your support powers life-changing missions, communities and hope."
      />
      <div id="partners" style={{ scrollMarginTop: "-100px" }}>
        <LogoCarousel
        title={"Our Trusted Partners"}
        Dpadding="100px 50px 80px 50px"

        />
      </div>
      <div id="overview" style={{ scrollMarginTop: "-100px" }}>
        <ReedsVisionMission/>
      </div>
      <ReedsImpact/>
<ReedsValues/>
      <div id="who-we-are" style={{ scrollMarginTop: "-100px" }}>
        <TrustedSupporters
          desktopPadding="100px 50px 0px 50px"
          mobilePadding="60px 20px 0px 20px"
          members={[
            {
              name: "M Ravindra Vikram",
              role: "Chairman",
              hoverText: "M Ravindra Vikram is the Chairman of REEDS. He is a prominent advocate for grassroots social enterprise models, financial inclusion for self-help groups, and leveraging technology to bridge the urban-rural divide.",
              image: "/assets/About_Assets/ravindra.png"
            },
            {
              name: "Dr. Ravi Kumar Reddy",
              role: "Secretary",
              hoverText: "Dr. Ravi K Reddy is a Chartered Accountant and a Business Advisory Consultant. He consults for many businesses, especially the small, medium and emerging enterprises. Ravi passionately believes rural empowerment is a concern to a country like India. His role was prominent in making REEDS visible nationally and internationally. Ravi co-organized two International Conferences – SKILLS2010 in December 2010 and SKILLS2013 in December 2013 at Hyderabad, India.",
              image: "/assets/About_Assets/Ravi-Reddy-Sir.jpg.jpeg"
            },
            {
              name: "S Sunanda",
              role: "Treasurer",
              hoverText: "S Sunanda is a graduate of Arts from Sri Venkateswara University, Tirupati. Sunanda has been passionately involved for many years with women empowerment issues especially for the less educated and poor women with a particular focus on making access to skill and knowledge in Embroidery techniques by hand thereby they are able to increase their income opportunities. Sunanda supports REEDS community participation endeavors.",
              image: "/assets/About_Assets/sunanda.jpg.jpeg"
            },
            {
              name: "G Sudhir Paul",
              role: "Member",
              hoverText: "G Sudhir Paul has been a dedicated supporter of rural development initiatives. Under his guidance, several programs targeting youth skill building, healthcare literacy, and vocational training have been successfully implemented across rural regions.",
              image: "/assets/About_Assets/sudhir.jpg.jpeg"
            },
            {
              name: "Hari Prasad Reddy",
              role: "Member",
              hoverText: "Hari Prasad Reddy brings decades of experience in community farming, water resource management, and rural supply chain optimization. He advises REEDS on agricultural empowerment models and clean energy adoption.",
              image: "/assets/About_Assets/hari-scaled.jpg.jpeg"
            }
          ]}
        />
      </div>
      
      <TrustedSupporters
        subHeading=""
        mainHeading="Advisory Council"
        desktopPadding="50px 50px 50px 50px"
        mobilePadding="30px 20px 60px 20px"
        members={[
          {
            name: "Shailendra Kumar Hajela",
            role: "",
            hoverText: "Dr. Hajela is eminent telecommunication professional with a record of service at the highest levels of Government, Industry, and the United Nations. He has been Consultant to UNDP, UNESCAP, ITU, APT, WB, ADB, Government of India and Private sector industry.",
            image: "/assets/About_Assets/Shailendra.jpeg"
          },
          {
            name: "Sumeet Rawla",
            role: "",
            hoverText: "Ms. Sumeet Rawla leads Philanthropic Initiatives at Community Pure Water Foundation, USA. She has a breadth of experience with Global 2000 multinationals, technology start-ups, and not-for-profit ventures. An activist at heart, Sumeet Rawla is focused on actions that bring measurable impact within a finite time-span.",
            image: "/assets/About_Assets/Sumeet-1.jpg.jpeg"
          },
          {
            name: "Sridhar DLV",
            role: "",
            hoverText: "Mr. Sridhar has pursued his engineering at MIT, India and heads South India's largest heavy equipment transportation fleet. Sridhar is a socio-economic impact generalist and a philanthropist. His wide interests beyond the philanthropy, include entrepreneurship mentoring, elderly care and travel.",
            image: "/assets/About_Assets/sridhar.jpg.jpeg"
          },
          {
            name: "Vijay Reddy",
            role: "",
            hoverText: "Mr. Vijay is a successful entrepreneur and a graduate of mechanical engineering. He is president and co-founder of US based Bean Infosystems LLC, a leading software technology and consultancy company. Passionate about development, Vijay founded SocialBirds, a digital crowdfunding platform for non-profits.",
            image: "/assets/About_Assets/vijay.jpg"          },
          {
            name: "Harshita Sannapureddy",
            role: "",
            hoverText: "Ms. Harshita is a multifaceted leader with a proven track record in various industries. She is an MBA from the Indian School of Business and a Young Leader Awardee for the class of 2018. As a NISM-certified investment consultant, she actively helps start-ups raise funds, driving growth and innovation.",
            image: "/assets/About_Assets/harshita.jpg.jpeg"
          },
          {
            name: "Suma Niveditha Karasala",
            role: "",
            hoverText: "Ms. Suma is an accomplished professional in Social Impact Assessment, Corporate Social Responsibility, and Academics. As a co-founder and chief strategist with Anusandhan Social Consultants, she has led and contributed to various development projects aimed at creating positive change in communities. She has a master's degree in social work.",
            image: "/assets/About_Assets/suma.jpg.jpeg"
          },
          {
            name: "Hemnath Rao Hanumankar",
            role: "",
            hoverText: "Dr. Hemnath Rao, founder Director, StratPol International Advisory Services and Formerly Senior Professor & Director, Development Management Institute (DMI), Patna. Rao served on various expert committees of the Government of India in the Ministries of Agriculture, Rural Development, Panchayati Raj, Human Resources Development.",
            image: "/assets/About_Assets/Hemnath-Rao.jpg.jpeg"
          },
          {
            name: "Mohan Reddy A",
            role: "",
            hoverText: "Mr. Mohan Reddy is a Chartered Accountant and a professional in the management of Biomass Power Generation, Climate Change, and Clean Development mechanisms. He heads a leading renewable energy organization specialized in NetZero, Carbon Asset Development, Energy Savings, Solar Energy, and Water Management.",
            image: "/assets/About_Assets/Mohan-Reddy.png"
          },
          {
            name: "Sadamate V.V",
            role: "",
            hoverText: "Dr. Sadamate is an Eminent Agricultural Extension Specialist & Former Adviser to Agriculture, Planning Commission, Government of India. He graduated from Pune Agriculture College and Masters / PhD in Agricultural Extension from Indian Agricultural Research Institute, New Delhi. He Worked as Principal Consultant with FAO.",
            image: "/assets/About_Assets/sadamata-VV-300x292.png"
          },
          {
            name: "Srinivasa Rao S",
            role: "",
            hoverText: "Mr. Srinivasa Rao, recipient of the prestigious \"Enterprise Excellence Award\" of the Association of Small and Medium Enterprises, Singapore is a renowned techno-management professional with a focus on Micro, Small, and Medium Enterprises. He retired as MD, APITCO, an organization involved the SME sector.",
            image: "/assets/About_Assets/Srinivas-Rao.jpeg"
          },
          {
            name: "Manas Ranjan Mohanty",
            role: "",
            hoverText: "Former Managing Director of Bharatiya Reserve Bank with deep expertise in trade finance, credit risk and banking operations. His leadership has significantly influenced the financial services sector. He brings strategic financial acumen to REEDS' rural enterprise and livelihoods agenda.",
            image: "/assets/About_Assets/Manas-Ranjan-Sir-260x300.png"
          }
        ]}
      />
      <TrustedSupporters
        subHeading=""
        mainHeading="Executives"
        desktopPadding="0px 50px 100px 50px"
        mobilePadding="30px 20px 0px 20px"
        members={[
  {
    name: "Poonam Thakur",
    role: "Vice President - Programs & Partnerships",
    hoverText: "Ms. Poonam is an agriculture consultant, blogger and content writer having experience in skill development, rural monitoring, agripreneurship development and innovation advisory. She has worked with various central government and private organizations and managed international projects like FTF ITT (USAID funded) and SKILLS – Leveraging Digital India for Rural Empowerment. She is a gold medalist in MBA (Agribusiness Management).",
    image: "/assets/About_Assets/1-Poonam20Thakur.png"
  },
  {
    name: "Sneha Somavarapu",
    role: "Finance and Risk Advisory Consultant",
    hoverText: "Sneha holds an IPCC qualification from the Institute of Chartered Accountants of India. She has extensive experience in tax computation, financial statement preparation and review, statutory filings, conference coordination, content research, outreach communications, and logistics management.",
    image: "/assets/About_Assets/Sneha-Madam-REEDS.jpeg"
  },
  {
    name: "Lakshmi Tejaswi",
    role: "Senior Executive Administrator",
    hoverText: "Lakshmi Tejaswi serves as an Executive Administrator with strong organizational and leadership skills. Previously a Business Development Associate, she combines operational expertise with client relationship management and strategic growth. She holds a Bachelor of Technology in Electronics and Communication Engineering.",
    image: "/assets/About_Assets/Tejaswi.jpg.jpeg"
  },
  {
    name: "Vijay Raj P",
    role: "Asst Manager - Administration & Outsourcing",
    hoverText: "Mr. Vijay serves in the Administration and Outsourcing department. He specializes in vendor management, data analysis, field surveys, project planning, office event coordination, and executive support. He worked as Program Coordinator for MoRD Monitoring and Evaluation studies in Karnataka and Andhra Pradesh and holds a Master's degree in Arts.",
    image: "/assets/About_Assets/3-Pottipogu20Vijay20Raj.png"
  },
  {
    name: "Naveen T",
    role: "Office Executive",
    hoverText: "With eight years of experience at REEDS, Naveen is skilled in multitasking, office administration, secretarial work, reception, and operational support. His experience enables him to efficiently manage office equipment and support day-to-day organizational activities.",
    image: "/assets/About_Assets/4-Navin20-Office20Executive.png"
  }
]}
      />
      <TickerTape />
      <CTA />
      <Loop />

    </>
    
  );
};

export default About;
