"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import InnerBanner from "../(Components)/InnerBanner";
import TickerTape from "../(Components)/(Home)/TickerTape";
import CTA from "../(Components)/CTA";
import Loop from "../(Components)/(Home)/Loop";
import "../(Css)/ForeignContributions.css";

const contributionsData = [
  {
    year: "2025-26",
    amount: "4,45,955.72",
    details: [
      { donor: "CAF America", amount: "3,63,945.72", date: "05/05/2025" },
      { donor: "CAF America", amount: "42,250.00", date: "14/05/2025" },
      { donor: "CAF America", amount: "8,051.00", date: "19/05/2025" },
      { donor: "CAF America", amount: "31,709.00", date: "28/07/2025" },
    ],
  },
  {
    year: "2024-25",
    amount: "31,01,643.89",
    details: [
      { donor: "Trust Sourcing Solutions", amount: "5,76,427.00", date: "19/04/2024" },
      { donor: "UK Online Giving", amount: "24,05,552.94", date: "06/05/2024" },
      { donor: "Bright Funds", amount: "10,016.21", date: "09/11/2024" },
      { donor: "UK Online Giving", amount: "28,958.00", date: "09/01/2025" },
      { donor: "CAF America", amount: "51,889.01", date: "27/01/2025" },
      { donor: "Bright Funds - USA", amount: "25,157.50", date: "06/02/2025" },
      { donor: "CAF America", amount: "3,642.73", date: "19/03/2025" },
    ],
  },
  {
    year: "2023-24",
    amount: "29,48,019.00",
    details: [
      { donor: "Charities Aid Foundation America, USA", amount: "3,64,544.20", date: "22/09/2023" },
      { donor: "The UK Online Giving Foundation", amount: "23,76,463.12", date: "06/10/2023" },
      { donor: "The UK Online Giving Foundation", amount: "32,824.00", date: "31/12/2023" },
      { donor: "The UK Online Giving Foundation", amount: "33,130.38", date: "08/01/2024" },
      { donor: "The UK Online Giving Foundation", amount: "8,067.30", date: "31/01/2024" },
      { donor: "Bright Funds", amount: "1,32,990.00", date: "22/03/2024" },
    ],
  },
  {
    year: "2022-23",
    amount: "47,914.00",
    details: [
      { donor: "The UK Online Giving Foundation", amount: "31,949.32", date: "30/12/2022" },
      { donor: "The UK Online Giving Foundation", amount: "3,993.67", date: "30/12/2022" },
      { donor: "The UK Online Giving Foundation", amount: "7,987.33", date: "30/12/2022" },
      { donor: "The UK Online Giving Foundation", amount: "3,983.68", date: "05/01/2023" },
    ],
  },
  {
    year: "2021-22",
    amount: "73,447.00",
    details: [
      { donor: "The UK Online Giving Foundation", amount: "73,447.00", date: "08/03/2022" },
    ],
  },
  {
    year: "2018-19",
    amount: "6,05,841.00",
    details: [
      { donor: "Leiden University, Netherlands", amount: "6,05,841.00", date: "14/12/2018" },
    ],
  },
  {
    year: "2017-18",
    amount: "1,82,283.00",
    details: [
      { donor: "Give2Asia, USA", amount: "38,790.00", date: "02/05/2017" },
      { donor: "Give2Asia, USA", amount: "1,43,493.00", date: "23/01/2018" },
    ],
  },
  {
    year: "2016-17",
    amount: "44,241.60",
    details: [
      { donor: "Kushil Gunasekera, Sri Lanka", amount: "44,241.60", date: "29/11/2016" },
    ],
  },
  {
    year: "2015-16",
    amount: "3,05,837.00",
    details: [
      { donor: "Give2Asia, USA", amount: "3,05,837.00", date: "17/03/2016" },
    ],
  },
];

function DonorModal({ row, onClose }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!mounted || !row) return null;

  return createPortal(
    <div className="fc-modal-overlay" onClick={onClose}>
      <div className="fc-modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="fc-modal-close" onClick={onClose} aria-label="Close">
          &times;
        </button>
        <h3 className="fc-modal-title">{row.year}</h3>
        <div className="fc-detail-table-wrapper">
          <table className="fc-detail-table">
            <thead>
              <tr>
                <th>Details of Donors</th>
                <th>Amount Received (₹)</th>
                <th>Date of Receipt</th>
              </tr>
            </thead>
            <tbody>
              {row.details.map((d, i) => (
                <tr key={i}>
                  <td>{d.donor}</td>
                  <td>{d.amount}</td>
                  <td>{d.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>,
    document.body
  );
}

export default function ForeignContributionsPage() {
  const [openYear, setOpenYear] = useState(null);

  const activeRow = contributionsData.find((r) => r.year === openYear);

  const toggleYear = (year, hasDetails) => {
    if (!hasDetails) return;
    setOpenYear(year);
  };

  return (
    <>
      <InnerBanner
        eyebrowText=""
        title="Foreign Contributions"
        desc="A year-wise record of foreign contributions received by REEDS under FCRA."
      />

      <section className="fc-table-section">
        <div className="fc-table-wrapper">
          <table className="fc-table">
            <thead>
              <tr>
                <th>Financial Year</th>
                <th>Amount Received ₹</th>
              </tr>
            </thead>
            <tbody>
              {contributionsData.map((row) => {
                const hasDetails = row.details.length > 0;
                return (
                  <tr key={row.year} className={hasDetails ? "fc-row-clickable" : ""}>
                    <td
                      className="fc-table-link"
                      onClick={() => toggleYear(row.year, hasDetails)}
                    >
                      {row.year}
                    </td>
                    <td
                      className="fc-table-link"
                      onClick={() => toggleYear(row.year, hasDetails)}
                    >
                      ₹ {row.amount}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <DonorModal row={activeRow} onClose={() => setOpenYear(null)} />

      <TickerTape />
      <CTA />
      <Loop />
    </>
  );
}
