"use client";

import { useState } from "react";

const stepLabels = [
  "Situation",
  "Location",
  "Property",
  "Timeline",
  "Contact",
  "Review"
];

const situationOptions = [
  "Sell My House As-Is (No Repairs)",
  "Stop Foreclosure Fast",
  "Sell Inherited Property",
  "Selling a Rental with Tenants",
  "Urgent Timeline",
  "Probate / Estate Sale",
  "Divorce Transition",
  "Vacant Home Costs"
];

const locationOptions = [
  "Newark",
  "Essex County",
  "Union County",
  "Middlesex County",
  "Another NJ area",
  "Outside NJ"
];

const propertyTypes = [
  "Single Family",
  "Multifamily",
  "Condo or Townhome",
  "Mixed Use",
  "Investment Property",
  "Not sure yet"
];

const timelineOptions = [
  "As soon as possible",
  "Within 30 days",
  "1 to 3 months",
  "Just exploring options"
];

export function OfferForm({ compact = false }) {
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    situation: situationOptions[0],
    location: locationOptions[0],
    propertyType: propertyTypes[0],
    street: "",
    city: "",
    state: "NJ",
    zip: "",
    propertyDetails: "",
    timeline: timelineOptions[0],
    fullName: "",
    phone: "",
    email: "",
    notes: ""
  });

  const progress = `${step + 1} of ${stepLabels.length}`;

  const updateField = (key, value) =>
    setForm((current) => ({
      ...current,
      [key]: value
    }));

  const nextStep = () => setStep((current) => Math.min(current + 1, 5));
  const prevStep = () => setStep((current) => Math.max(current - 1, 0));

  const handleSubmit = (event) => {
    event.preventDefault();

    const subject = encodeURIComponent(`New website lead: ${form.situation}`);
    const body = encodeURIComponent(
      [
        `Situation: ${form.situation}`,
        `Location: ${form.location}`,
        `Property type: ${form.propertyType}`,
        `Address: ${[form.street, form.city, form.state, form.zip].filter(Boolean).join(", ") || "Not provided"}`,
        `Property details: ${form.propertyDetails || "Not provided"}`,
        `Timeline: ${form.timeline}`,
        `Name: ${form.fullName || "Not provided"}`,
        `Phone: ${form.phone || "Not provided"}`,
        `Email: ${form.email || "Not provided"}`,
        `Notes: ${form.notes || "Not provided"}`
      ].join("\n")
    );

    window.location.href = `mailto:ocastro@buymyhome.net?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  return (
    <form className={`offer-form ${compact ? "compact" : ""}`} onSubmit={handleSubmit}>
      <div className="offer-form-head">
        <div>
          <p className="eyebrow">Find Options For Your Situation</p>
          <h3>Step {progress}</h3>
        </div>
        <span>{stepLabels[step]}</span>
      </div>

      <div className="progress-track" aria-hidden="true">
        <span style={{ width: `${((step + 1) / stepLabels.length) * 100}%` }} />
      </div>

      {submitted ? (
        <div className="success-panel">
          <h4>Your inquiry is ready to send.</h4>
          <p>
            If your email app did not open, call Marino directly at{" "}
            <a href="tel:9738513790">(973) 851-3790</a>.
          </p>
        </div>
      ) : (
        <>
          {step === 0 && (
            <fieldset className="form-step">
              <label>Which situation best matches the property?</label>
              <div className="choice-grid situation-grid">
                {situationOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    className={form.situation === option ? "selected" : ""}
                    onClick={() => updateField("situation", option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </fieldset>
          )}

          {step === 1 && (
            <fieldset className="form-step">
              <label>Where is the opportunity located?</label>
              <div className="choice-grid timeline-grid">
                {locationOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    className={form.location === option ? "selected" : ""}
                    onClick={() => updateField("location", option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </fieldset>
          )}

          {step === 2 && (
            <fieldset className="form-step">
              <label>Tell Marino about the property or deal</label>
              <div className="choice-grid">
                {propertyTypes.map((option) => (
                  <button
                    key={option}
                    type="button"
                    className={form.propertyType === option ? "selected" : ""}
                    onClick={() => updateField("propertyType", option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
              <div className="form-row property-row">
                <input
                  value={form.street}
                  onChange={(event) => updateField("street", event.target.value)}
                  placeholder="Street address"
                />
                <input
                  value={form.city}
                  onChange={(event) => updateField("city", event.target.value)}
                  placeholder="City"
                />
                <input
                  value={form.state}
                  onChange={(event) => updateField("state", event.target.value)}
                  placeholder="State"
                />
              </div>
              <textarea
                rows="5"
                value={form.propertyDetails}
                onChange={(event) => updateField("propertyDetails", event.target.value)}
                placeholder="Condition, occupancy, estimated value, investment angle, or anything else Marino should know."
              />
              <input
                value={form.zip}
                onChange={(event) => updateField("zip", event.target.value)}
                placeholder="ZIP code"
              />
            </fieldset>
          )}

          {step === 3 && (
            <fieldset className="form-step">
              <label>What is your timeline?</label>
              <div className="choice-grid timeline-grid">
                {timelineOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    className={form.timeline === option ? "selected" : ""}
                    onClick={() => updateField("timeline", option)}
                  >
                    {option}
                  </button>
                ))}
              </div>
            </fieldset>
          )}

          {step === 4 && (
            <fieldset className="form-step">
              <label htmlFor="fullName">Your contact info</label>
              <input
                id="fullName"
                value={form.fullName}
                onChange={(event) => updateField("fullName", event.target.value)}
                placeholder="Full name"
              />
              <div className="form-row stacked-mobile">
                <input
                  value={form.phone}
                  onChange={(event) => updateField("phone", event.target.value)}
                  placeholder="Phone number"
                />
                <input
                  value={form.email}
                  onChange={(event) => updateField("email", event.target.value)}
                  placeholder="Email address"
                />
              </div>
              <textarea
                rows="5"
                value={form.notes}
                onChange={(event) => updateField("notes", event.target.value)}
                placeholder="Add any final notes for Marino before you send this."
              />
            </fieldset>
          )}

          {step === 5 && (
            <fieldset className="form-step review-list">
              <div>
                <span>Situation</span>
                <strong>{form.situation}</strong>
              </div>
              <div>
                <span>Location</span>
                <strong>{form.location}</strong>
              </div>
              <div>
                <span>Property</span>
                <strong>
                  {form.propertyType}
                  <br />
                  {[form.street, form.city, form.state, form.zip].filter(Boolean).join(", ") ||
                    "No address added yet"}
                </strong>
              </div>
              <div>
                <span>Details</span>
                <strong>{form.propertyDetails || "No details added yet"}</strong>
              </div>
              <div>
                <span>Timeline</span>
                <strong>{form.timeline}</strong>
              </div>
              <div>
                <span>Contact</span>
                <strong>
                  {form.fullName || "No name yet"}
                  <br />
                  {form.phone || "No phone yet"}
                </strong>
              </div>
            </fieldset>
          )}

          <div className="form-actions">
            <button
              type="button"
              className="button button-ghost"
              disabled={step === 0}
              onClick={prevStep}
            >
              Back
            </button>
            {step < 5 ? (
              <button type="button" className="button button-solid" onClick={nextStep}>
                Continue
              </button>
            ) : (
              <button type="submit" className="button button-solid">
                Email Marino
              </button>
            )}
          </div>
        </>
      )}
    </form>
  );
}
