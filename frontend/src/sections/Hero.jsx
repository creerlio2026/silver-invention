import React from "react";

export default function Hero(){
  return (
    <section className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <h1>Take control of your career. Connect on your terms.</h1>
          <p className="lead">
            CareerLio unifies talent discovery, portfolio building and hiring intelligence into one privacy-first AI platform. Build professional portfolios, verify credentials and get AI career guidance — all in one place.
          </p>
          <div className="hero-actions">
            <a href="#get-started" className="btn btn-primary">Create free profile</a>
            <a href="#demo" className="btn btn-ghost">Request demo</a>
          </div>

          <ul className="hero-features">
            <li><strong>AI Resume Parsing</strong> — Auto-fill profiles in minutes</li>
            <li><strong>Canva-style Portfolios</strong> — 20+ professional templates</li>
            <li><strong>Business Intelligence</strong> — Daily market & competitor insights</li>
          </ul>
        </div>

        <div className="hero-media" aria-hidden>
          <div className="device-mock">
            <div className="browser-top" />
            <div className="browser-main">
              <div className="card-preview">
                <h3>Professional Portfolio</h3>
                <p className="muted">Beautiful templates, drag-and-drop, secure sharing.</p>
                <div className="profile-preview">
                  <div className="avatar" />
                  <div>
                    <div className="name">Alex Johnson</div>
                    <div className="role">Product Designer</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
