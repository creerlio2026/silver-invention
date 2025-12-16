import React from "react";

const items = [
  {title:"Fast Onboarding", desc:"Upload resume or import LinkedIn — AI fills 60-70% of your profile."},
  {title:"Canva-style Portfolios", desc:"Customizable templates, drag & drop, and AI-optimized content."},
  {title:"AI Career Pathways", desc:"Personalized roadmaps with skill-gap analysis and training suggestions."},
  {title:"Credential Verification", desc:"Automated checks and confidence scoring for trusted profiles."},
  {title:"Business Dashboard", desc:"Unified hiring dashboard, ATS, and multi-location support."},
  {title:"Privacy Controls", desc:"Granular sharing, instant revocation and audit logs."}
];

export default function Features(){
  return (
    <section id="features" className="features-section">
      <div className="section-header">
        <h2>Built for talent. Built for business.</h2>
        <p className="muted">Everything you need to discover, verify and hire — powered by AI and privacy-first design.</p>
      </div>

      <div className="features-grid">
        {items.map((it, idx) => (
          <div className="feature-card" key={idx}>
            <h4>{it.title}</h4>
            <p className="muted">{it.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
