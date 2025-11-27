import React, { useState, useEffect, useRef } from "react";
import Navbar from "react-bootstrap/Navbar";
import HaitianLogo from "./Images/HaitianTurkeylogo.png";
import EventLogo from "./Images/EventLogo.png";
import Product2 from "./Images/Product2.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faGlobe, faPhone } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import { useNavigate } from "react-router-dom";

function useRevealOnScroll() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target); // run once
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

export default function Page1() {
  const navigate = useNavigate();

  const [bannerRef, bannerVisible] = useRevealOnScroll();
  const [cardsRef, cardsVisible] = useRevealOnScroll();
  const [footerRef, footerVisible] = useRevealOnScroll();

  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);

  const isMobile = window.matchMedia("(max-width: 768px)").matches;

  // ✅ Reusable logic creator (same logic as your working card)
  const createHandlers = (setState) => ({
    onMouseEnter: () => {
      if (!isMobile) setState(true);
    },
    onMouseLeave: () => {
      if (!isMobile) setState(false);
    },
    onClick: () => {
      if (isMobile) setState((prev) => !prev);
    },
  });

  return (
    <div className="container-fluid  d-flex flex-column min-vh-100">
      <Navbar bg="white" fixed="top" className="shadow-sm">
        <div
          className="d-flex align-items-center justify-content-between"
          style={{ width: "100%" }}
        >
          <img
            src={HaitianLogo}
            alt="Haitian Logo"
            className="navbar-logo p-2"
            onClick={() => window.open("https://www.haitian.com.tr/", "_blank")}
          />

          <img src={EventLogo} alt="Plast Logo" className="navbar-logo " />
        </div>
      </Navbar>

      <div
        ref={bannerRef}
        className={`container  reveal-section page1-content mb-xxl-4 ${
          bannerVisible ? "show" : ""
        }`}
      >
        <div className="row mt-5">
          <div className="col-xl-6 border border-2 border-light rounded-3 d-flex justify-content-center">
            <img
              src={Product2}
              className="img-fluid haitianSubPageImage"
              alt="MA3800H/PRO product image"
            />
          </div>
          <div className="col-xl-5 border border-2 border-light rounded-4 mt-3 mt-xl-0 p-4 ms-xl-5 haitianSpecBox">
            <h2 className="spec-title text-center">Application</h2>

            <div className="spec-row">
              <span>Machine Type</span>
              <span>MA3800H/PRO</span>
            </div>

            <div className="spec-row">
              <span>Application</span>
              <span>Cap</span>
            </div>

            <div className="spec-row">
              <span>Shot weight</span>
              <span>50gr</span>
            </div>

            <div className="spec-row">
              <span>Product size</span>
              <span>141*115*11mm</span>
            </div>

            <div className="spec-row">
              <span>Wall thickness</span>
              <span>0.55mm</span>
            </div>

            <div className="spec-row">
              <span>Cavities</span>
              <span>4</span>
            </div>

            <div className="spec-row">
              <span>Material</span>
              <span>MFI60 PP</span>
            </div>

            <div className="spec-row">
              <span>Cycle Time</span>
              <span>5.5s</span>
            </div>

            <div className="spec-row">
              <span>Industry</span>
              <span>Packing Products</span>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-4 d-flex justify-content-start mb-3">
        <button className="haitianBackBtn" onClick={() => navigate("/")}>
          ← Back to Home
        </button>
      </div>
      <div
        ref={footerRef}
        className={`footer-container mt-3 mt-xxl-auto bg-light reveal-section ${
          footerVisible ? "show" : ""
        }`}
      >
        <div className="container py-4">
          <div className="row align-items-center footer-row">
            {/* Logo */}
            <div className="col-12 col-lg-3 mb-3 mb-lg-0 d-flex justify-content-center justify-content-lg-start">
              <img
                src={HaitianLogo}
                alt="Haitian Logo"
                className="footer-logo"
                onClick={() =>
                  window.open("https://www.haitian.com.tr/", "_blank")
                }
              />
            </div>

            {/* Phone */}
            <div className="col-12 col-lg-3 footer-item">
              <FontAwesomeIcon icon={faPhone} />
              <a
                className="ms-2 haitianColor text-decoration-none"
                href="tel:+905368823975"
              >
                +90 536 882 3975
              </a>
            </div>

            {/* Website */}
            <div className="col-12 col-lg-3 footer-item">
              <FontAwesomeIcon icon={faGlobe} />
              <a
                href="https://www.haitian.com.tr/"
                target="_blank"
                rel="noreferrer"
                className="ms-2 haitianColor text-decoration-none"
              >
                www.haitian.com.tr
              </a>
            </div>

            {/* Email */}
            <div className="col-12 col-lg-3 footer-item ">
              <FontAwesomeIcon icon={faAt} />
              <a
                href="mailto:wmj13575@mail.haitian.com"
                className="ms-2 haitianColor text-decoration-none"
              >
                wmj13575@mail.haitian.com
              </a>
            </div>
          </div>

          <hr className="footer-divider" />

          <div className="text-center small haitianColor">
            © 2025 Haitian Turkey. All rights reserved.
          </div>
        </div>
      </div>
    </div>
  );
}
