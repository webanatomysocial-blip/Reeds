import React from 'react';
import '@/app/(Css)/Projects/WashProjectsTable.css';

const washProjectsData = [
  { location: 'Narsapur MPPS', visits: 3, students: 37, faculty: 3 },
  { location: 'Bandamailaram MPPS', visits: 2, students: 75, faculty: 3 },
  { location: 'Nagaram MPPS & ZPHS', visits: 1, students: 505, faculty: 3 },
  { location: 'Kothur MPPS', visits: 2, students: 78, faculty: 3 },
  { location: 'Kokhonda MPPS', visits: 2, students: 104, faculty: 3 },
  { location: 'Nyamathapur MPPS', visits: 1, students: 27, faculty: 2 },
  { location: 'MPUPS Maktha Madharam', visits: 1, students: 63, faculty: 6 },
  { location: 'MPPS Ekvaipally', visits: 1, students: 61, faculty: 4 },
  { location: 'ZPHS Rimannaguda', visits: 1, students: 67, faculty: 8 },
  { location: 'ZPHS Ekvaipally', visits: 1, students: 99, faculty: 9 },
];

const totals = washProjectsData.reduce(
  (acc, row) => ({
    visits: acc.visits + row.visits,
    students: acc.students + row.students,
    faculty: acc.faculty + row.faculty,
  }),
  { visits: 0, students: 0, faculty: 0 }
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
        <table className="wash-table">
          <thead>
            <tr>
              <th>Location</th>
              <th>No of Visits</th>
              <th>Total Student</th>
              <th>Total Faculty</th>
            </tr>
          </thead>
          <tbody>
            {washProjectsData.map((row) => (
              <tr key={row.location}>
                <td>{row.location}</td>
                <td>{row.visits}</td>
                <td>{row.students}</td>
                <td>{row.faculty}</td>
              </tr>
            ))}
            <tr className="wash-table-total">
              <td>Total</td>
              <td>{totals.visits}</td>
              <td>{totals.students.toLocaleString()}</td>
              <td>{totals.faculty}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default WashProjectsTable;
