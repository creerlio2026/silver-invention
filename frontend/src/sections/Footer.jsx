import React from "react";

export default function Footer(){
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <div>
          <div className="brand">CareerLio</div>
          <p className="muted">Take control of your career. Hire smarter, not harder.</p>
        </div>

        <div>
          <h5>Product</h5>
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#customers">Customers</a>
        </div>

        <div>
          <h5>Company</h5>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
      <div className="copyright">© {new Date().getFullYear()} CareerLio. All rights reserved.</div>
    </footer>
  )
}
