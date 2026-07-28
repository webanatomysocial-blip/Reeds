"use client";
import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import '@/app/(Css)/(Home)/ImpactCards.css';

const impactData = [
  {
    id: 1,
    endValue: 1000,
    suffix: "+",
    title: "Lives Improved",
    desc: "Empowering rural families through education, healthcare, livelihoods, water, and sustainable development initiatives.",
    span: 1
  },
  {
    id: 2,
    endValue: 800,
    suffix: "+",
    title: "Villages Reached",
    desc: "Creating self-reliant communities through integrated rural development programs.",
    span: 1
  },
  {
    id: 3,
    endValue: 256,
    suffix: "+",
    title: "Children Educated",
    desc: "Providing quality education, learning opportunities, and brighter futures for children communities.",
    span: 1
  },
  {
    id: 4,
    endValue: 300,
    suffix: "+",
    title: "Water Projects",
    desc: "Delivering safe drinking water, sanitation facilities, and healthier living conditions for rural households.",
    span: 1
  },
  {
    id: 5,
    endValue: 1000,
    suffix: "+",
    title: "Schools Supported",
    desc: "Strengthening schools with better infrastructure, learning resources, sanitation, and programs.",
    span: 2
  }
];

const ImpactCard = ({ data }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className={`impact-card ${data.span === 2 ? 'span-2' : ''}`} ref={ref}>
      <div className="impact-card-overlay"></div>
      <div className="impact-card-content">
        <div className="impact-number">
          {inView ? (
            <CountUp 
              end={data.endValue} 
              duration={2.5} 
              separator="," 
              suffix={data.suffix} 
            />
          ) : (
            "0" + data.suffix
          )}
        </div>
        <div className="impact-title">{data.title}</div>
        <div className="impact-desc">{data.desc}</div>
      </div>
    </div>
  );
};

const ImpactCards = () => {
  return (
    <section className="impact-cards-container">
      {impactData.map((data) => (
        <ImpactCard key={data.id} data={data} />
      ))}
    </section>
  );
};

export default ImpactCards;
