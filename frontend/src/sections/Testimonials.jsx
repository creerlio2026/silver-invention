import React from "react";

export default function Testimonials(){
  return (
    <section id="customers" className="testimonials-section">
      <div className="section-header">
        <h2>Trusted by talent and businesses</h2>
        <p className="muted">Real results from early adopters and hiring teams.</p>
      </div>

      <div className="test-grid">
        <blockquote className="testimonial">
          <p>“CareerLio helped me land three interviews in two weeks. The portfolio templates are beautiful and easy to customize.”</p>
          <cite>— Alex T., Software Engineer</cite>
        </blockquote>

        <blockquote className="testimonial">
          <p>“We reduced time-to-hire by 35% after switching to CareerLio. The AI job-description generator saves us hours.”</p>
          <cite>— Sarah M., Head of Talent</cite>
        </blockquote>
      </div>
    </section>
  )
}
