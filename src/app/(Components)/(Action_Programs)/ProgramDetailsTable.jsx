import React from 'react';
import '@/app/(Css)/(Action_Programs)/ProgramDetailsTable.css';

const ProgramDetailsTable = ({ columns, rows }) => {
  return (
    <section className="program-table-section">
      <div className="program-table-wrapper">
        <table className="program-table">
          <thead>
            <tr>
              {columns.map((col) => (
                <th key={col}>{col}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, index) => (
              <tr key={index}>
                {row.map((cell, cellIndex) => (
                  <td key={cellIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ProgramDetailsTable;
