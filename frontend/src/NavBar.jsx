import React from "react";
import { Link } from "react-router-dom";
import { FiChevronDown } from "react-icons/fi";

export default function NavBar(){
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Link to="/" className="brand">
          <div className="brand-mark">CareerLio</div>
          <div className="brand-sub">Talent • Business • Intelligence</div>
        </Link>

        <nav className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <a href="#features" className="nav-link">Features</a>
          <a href="#pricing" className="nav-link">Pricing</a>
          <a href="#customers" className="nav-link">Customers</a>
          <a href="#get-started" className="btn btn-cta">Get Started</a>
          <button className="menu-btn" title="More">
            <FiChevronDown />
          </button>
        </nav>
      </div>
    </header>
  )
}
