import React from 'react';
import '@/app/(Css)/Projects/WashProjectsTable.css';

const impactData = [
  { indicator: 'Students Impacted', achievement: '1,134' },
  { indicator: 'Community Members Impacted', achievement: '284' },
  { indicator: 'Schools Covered', achievement: '10' },
  { indicator: 'School Visits', achievement: '22' },
  { indicator: 'Districts Covered', achievement: '3' },
  { indicator: 'State Covered', achievement: 'Telangana' },
  { indicator: 'Academic Programme Period', achievement: '2023–2026' },
];

const schoolsData = [
  { school: 'MPPS Narasapur', village: 'Narasapur', district: 'Siddipet', visits: 9 },
  { school: 'MPPS Bandamailaram', village: 'Bandamailaram', district: 'Siddipet', visits: 3 },
  { school: 'ZPHS Nagaram', village: 'Nagaram', district: 'Medak', visits: 1 },
  { school: 'MPPS Kothur', village: 'Kothur', district: 'Siddipet', visits: 2 },
  { school: 'MPPS Kokkonda', village: 'Kokkonda', district: 'Siddipet', visits: 2 },
  { school: 'MPPS Nyamathapur', village: 'Nyamathapur', district: 'Rangareddy', visits: 1 },
  { school: 'MPUPS Maktha Madharam', village: 'Maktha Madharam', district: 'Medak', visits: 1 },
  { school: 'ZPHS Ekvaipally', village: 'Ekvaipally', district: 'Rangareddy', visits: 1 },
  { school: 'MPPS Ekvaipally', village: 'Ekvaipally', district: 'Rangareddy', visits: 1 },
  { school: 'ZPHS Rimmanaguda', village: 'Rimmanaguda', district: 'Siddipet', visits: 1 },
];

const schoolTotals = schoolsData.reduce(
  (acc, row) => ({ visits: acc.visits + row.visits }),
  { visits: 0 }
);

const WashProjectsTable = () => {
  return (
    <section className="wash-table-section">
      <div className="wash-table-header">
        <span className="wash-table-eyebrow">&bull; OUR WASH PROJECTS</span>
        <p className="sub-para-text">
          Working together for clean water, sanitation &amp; hygiene in schools and communities.
        </p>
      </div>

      <div className="wash-table-wrapper">
        <h3 className="sub-head-text" style={{ marginBottom: '20px', textAlign: 'center' }}>
          REEDS WASH Programme – Impact at a Glance
        </h3>
        <div className="wash-table-scroll">
          <table className="wash-table">
            <thead>
              <tr>
                <th>Impact Indicator</th>
                <th>Achievement</th>
              </tr>
            </thead>
            <tbody>
              {impactData.map((row) => (
                <tr key={row.indicator}>
                  <td>{row.indicator}</td>
                  <td>{row.achievement}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="para-text" style={{ margin: '50px 0' }}>
          <strong>Key Activities: </strong>
          Programme Focus – WASH awareness and hygiene promotion | School WASH
          assessments and monitoring | Baseline and midline assessments | WASH
          competitions and student engagement | School infrastructure
          verification | Distribution of WASH materials
        </p>

        <h3 className="sub-head-text" style={{ marginBottom: '20px', textAlign: 'center' }}>
          Schools Covered
        </h3>
        <div className="wash-table-scroll">
          <table className="wash-table wash-table-schools">
            <thead>
              <tr>
                <th>Sl. No.</th>
                <th>Government School</th>
                <th>Village / Area</th>
                <th>District</th>
                <th>Visits</th>
              </tr>
            </thead>
            <tbody>
              {schoolsData.map((row, index) => (
                <tr key={row.school}>
                  <td>{index + 1}</td>
                  <td>{row.school}</td>
                  <td>{row.village}</td>
                  <td>{row.district}</td>
                  <td>{row.visits}</td>
                </tr>
              ))}
              <tr className="wash-table-total">
                <td colSpan={2}>Total</td>
                <td>10 Schools</td>
                <td>3 Districts</td>
                <td>{schoolTotals.visits} Visits</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="para-text" style={{ marginTop: '32px' }}>
          <strong>Our Impact: </strong>
          REEDS works with government schools and rural communities to improve
          WASH practices, hygiene awareness, school facilities, and community
          participation, creating healthier and safer learning environments.
        </p>
      </div>
    </section>
  );
};

export default WashProjectsTable;
