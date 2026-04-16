"use client";

import { useState } from "react";

const situations = [
  "Sell My House As-Is (No Repairs)",
  "Stop Foreclosure Fast",
  "Sell Inherited Property",
  "Selling a Rental with Tenants",
  "Urgent Timeline",
  "Probate / Estate Sale",
  "Divorce Transition",
  "Vacant Home Costs"
];

const markets = [
  "Newark",
  "Essex County",
  "Union County",
  "Hudson County",
  "Middlesex County",
  "Passaic County",
  "Another New Jersey market"
];

export function PrivateConsultationCard() {
  const [name, setName] = useState("");
  const [situation, setSituation] = useState(situations[0]);
  const [market, setMarket] = useState(markets[0]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(`Private consultation: ${situation}`);
    const body = encodeURIComponent(
      [
        `Situation: ${situation}`,
        `Market: ${market}`,
        `Name: ${name || "Not provided"}`
      ].join("\n")
    );

    window.location.href = `mailto:ocastro@buymyhome.net?subject=${subject}&body=${body}`;
  };

  return (
    <form className="consultation-card" onSubmit={handleSubmit}>
      <p className="eyebrow">Private Consultation</p>
      <h3>Start with the situation, then choose the right strategy.</h3>
      <p>
        Share the scenario and market. Marino will follow up with a more
        tailored recommendation.
      </p>

      <label htmlFor="consultation-situation">Situation</label>
      <select
        id="consultation-situation"
        value={situation}
        onChange={(event) => setSituation(event.target.value)}
      >
        {situations.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <label htmlFor="consultation-market">Market</label>
      <select
        id="consultation-market"
        value={market}
        onChange={(event) => setMarket(event.target.value)}
      >
        {markets.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>

      <label htmlFor="consultation-name">Name</label>
      <input
        id="consultation-name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="Your name"
      />

      <button className="button button-solid consultation-button" type="submit">
        Request Consultation
      </button>

      <div className="consultation-meta">
        <span>(973) 851-3790</span>
        <span>ocastro@buymyhome.net</span>
      </div>
    </form>
  );
}
