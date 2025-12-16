import React from "react";

export default function Pricing(){
  return (
    <section id="pricing" className="pricing-section">
      <div className="section-header">
        <h2>Simple pricing for every team</h2>
        <p className="muted">From individual talent builders to multi-location businesses — predictable pricing that scales.</p>
      </div>

      <div className="pricing-grid">
        <div className="price-card">
          <div className="price-title">Talent — Free</div>
          <div className="price-amount">Free</div>
          <ul>
            <li>Basic profile & portfolio</li>
            <li>Search & job alerts</li>
            <li>Community support</li>
          </ul>
          <a className="btn btn-outline" href="#signup">Get started</a>
        </div>

        <div className="price-card featured">
          <div className="price-title">Professional</div>
          <div className="price-amount">$25 / month</div>
          <ul>
            <li>Unlimited portfolios & templates</li>
            <li>AI career pathways & resume help</li>
            <li>Featured profile placement</li>
          </ul>
          <a className="btn btn-primary" href="#signup">Start free trial</a>
        </div>

        <div className="price-card">
          <div className="price-title">Business</div>
          <div className="price-amount">$100 / year*</div>
          <ul>
            <li>5 job posts & basic ATS</li>
            <li>Business intelligence dashboard</li>
            <li>Multi-location support</li>
          </ul>
          <a className="btn btn-outline" href="#contact">Contact sales</a>
        </div>
      </div>
      <p className="muted small">*Starter plan pricing shown. Enterprise plans available.</p>
    </section>
  )
}
