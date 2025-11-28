import React, { useState, useEffect, useRef } from "react";
import Navbar from "react-bootstrap/Navbar";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import { Button } from "antd";
import HaitianLogo from "./Images/HaitianTurkeylogo.png";
import EventLogo from "./Images/EventLogo.png";
import Event1 from "./Images/EventImage1.png";
import Event2 from "./Images/EventImage2.png";
import ZEMachine from "./Images/ZEMachine.png";
import Ma3800 from "./Images/Ma3800.png";
import Mars from "./Images/MarsMachine.png";
import Haitian from "./Images/Haitian.png";
import Robot from "./Images/Robot.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faGlobe, faPhone } from "@fortawesome/free-solid-svg-icons";
import "./App.css";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";

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
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return [ref, visible];
}

export default function LandingPage() {
  const [bannerRef, bannerVisible] = useRevealOnScroll();
  // const [cardsRef, cardsVisible] = useRevealOnScroll();
  const [footerRef, footerVisible] = useRevealOnScroll();
  const [card1Ref, card1Visible] = useRevealOnScroll();
  const [card2Ref, card2Visible] = useRevealOnScroll();
  const [card3Ref, card3Visible] = useRevealOnScroll();
  const [card4Ref, card4Visible] = useRevealOnScroll();

  const [active1, setActive1] = useState(false);
  const [active2, setActive2] = useState(false);
  const [active3, setActive3] = useState(false);
  const [active4, setActive4] = useState(false);

  const isMobile = window.matchMedia("(max-width: 768px)").matches;
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);
  useEffect(() => {
    if (bannerVisible) {
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.4 },
        colors: ["#133271", "#D10A12", "#6B9620"],
      });
    }
  }, [bannerVisible]);

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

  const styl = `
  .card-body {
    flex: 1 1 auto;
    padding: 10px !important;
    color: var(--bs-card-color);
}
  `;

  return (
    <>
      <style>{styl}</style>
      <div className="container-fluid  d-flex flex-column min-vh-100">
        <Navbar bg="white" fixed="top" className="shadow-sm">
          <div
            className="d-flex align-items-center justify-content-between"
            style={{ width: "100%" }}
          >
            <img
              src={HaitianLogo}
              alt="Haitian Logo"
              className="navbar-logo"
              onClick={() =>
                window.open("https://www.haitian.com.tr/", "_blank")
              }
            />

            <img
              src={EventLogo}
              alt="Plast Event Logo"
              className="navbar-logo "
            />
          </div>
        </Navbar>
        <div
          ref={bannerRef}
          className={`container event-animate reveal-section page-content ${
            bannerVisible ? "show" : ""
          }`}
        >
          <div
            className="row  border border-2 border-light rounded-5 p-3 p-lg-5"
            style={{ backgroundColor: "#E8EEF6" }}
          >
            <div className="col-12 ">
              <p className="haitianColor event-text-anim delay1 text-center bannerSectionText1 m-0 p-0">
                Tüyap Fuar ve Kongre Merkezi
              </p>
              <p className="EventTextColor1 event-text-anim delay2 text-center bannerSectionText2 m-0 p-0 ">
                {" "}
                December 3 - 6, 2025
              </p>
              <p className="EventTextColor2 event-text-anim delay3 text-center bannerSectionText3 m-0 p-0">
                {" "}
                HALL 8 NO 807
              </p>
            </div>
          </div>
        </div>
        <div className="contianer m-auto mt-3 mt-lg-5" style={{ width: "80%" }}>
          <div className="row">
            <div className="col-12">
              {/* <Carousel data-bs-theme="dark">
                <Carousel.Item interval={3000}>
                  <img
                    className="d-block w-100 carousel-img"
                    src={Event1}
                    alt="Event Slide 1"
                  />
                </Carousel.Item>

                <Carousel.Item interval={3000}>
                  <img
                    className="d-block w-100 carousel-img"
                    src={Event2}
                    alt="Event Slide 2"
                  />
                </Carousel.Item>
              </Carousel> */}

              <Carousel
                className="flip-carousel"
                interval={3000}
                data-bs-theme="dark"
              >
                <Carousel.Item>
                  <img
                    className="d-block w-100 carousel-img"
                    src={Event1}
                    alt="Event Slide 1"
                  />
                </Carousel.Item>

                <Carousel.Item>
                  <img
                    className="d-block w-100 carousel-img"
                    src={Event2}
                    alt="Event Slide 2"
                  />
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>

        {/* <div
        ref={cardsRef}
        className={`container mt-4 mt-lg-5 pt-3  ${
          cardsVisible ? "show" : ""
        }`}
      > */}
        <div ref={card1Ref} className="container mt-4 mt-lg-5 pt-3">
          <div className="row">
            {/* CARD 1 */}
            {/* <div className="col-lg-3"> */}
            <div
              className={`col-lg-3 reveal-section delay1 ${
                card1Visible ? "show" : ""
              }`}
            >
              <Card
                className={`product-card p-1 border border-1 border-muted ${
                  active1 ? "active" : ""
                }`}
                {...createHandlers(setActive1)}
              >
                <div className="image-wrapper bg-light">
                  <img
                    src={Mars}
                    className="main-image"
                    alt="MA-2100-V/H machine image"
                  />
                  <img src={Robot} className="hover-image" alt="Robot image" />
                </div>
                <Card.Body>
                  <div className="content-default">
                    <Card.Title className="haitianColor cardTittleFont">
                      MA2100V/h
                    </Card.Title>
                    <Card.Text>
                      <p className="m-0 p-0 haitianColor">Product: 0.5L Bowl</p>
                      <p className="m-0 p-0 haitianColor">
                        Robot: V1100 GD High Speed
                      </p>
                    </Card.Text>
                    <div className="btn-wrapper">
                      <Button
                        className="haitianColorButton"
                        size="large"
                        onClick={() => navigate("/MA-2100-VH-product")}
                      >
                        <span className="learnMoreFont">Learn More</span>
                      </Button>
                    </div>
                  </div>
                  <div className="content-hover">
                    <Card.Title className="haitianColor cardTittleFont">
                      MA2100V/h
                    </Card.Title>
                    <Card.Text>
                      <p className="m-0 p-0 haitianColor">Product: 0.5L Bowl</p>
                      <p className="m-0 p-0 haitianColor">
                        Robot: V1100 GD High Speed
                      </p>
                    </Card.Text>
                    <div className="btn-wrapper">
                      <Button
                        className="haitianColorButton "
                        size="large"
                        onClick={() => navigate("/MA-2100-VH-product")}
                      >
                        <span className="learnMoreFont">Learn More</span>
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>

            {/* CARD 2 */}
            {/* <div className="col-lg-3 mt-3 mt-lg-0"> */}
            <div
              ref={card2Ref}
              className={`col-lg-3 mt-3 mt-lg-0 reveal-section delay2 ${
                card2Visible ? "show" : ""
              }`}
            >
              <Card
                className={`product-card p-1  border border-1 border-muted ${
                  active2 ? "active" : ""
                }`}
                {...createHandlers(setActive2)}
              >
                <div className="image-wrapper bg-light">
                  <img
                    src={ZEMachine}
                    className="main-image"
                    alt="ZE-3000-F machine image"
                  />
                  <img src={Robot} className="hover-image" alt="Robot image" />
                </div>
                <Card.Body>
                  <div className="content-default">
                    <Card.Title className="haitianColor cardTittleFont">
                      ZE3000F/1100h
                    </Card.Title>
                    <Card.Text>
                      <p className="m-0 p-0 haitianColor">Product: 2L Bucket</p>

                      <p className="m-0 p-0 haitianColor">
                        Robot: V1300 GD High Speed
                      </p>
                    </Card.Text>
                    <div className="btn-wrapper">
                      <Button
                        className="haitianColorButton"
                        size="large"
                        onClick={() => navigate("/ZEF3000-1100h-product")}
                      >
                        <span className="learnMoreFont">Learn More</span>
                      </Button>
                    </div>
                  </div>
                  <div className="content-hover">
                    <Card.Title className="haitianColor cardTittleFont">
                      ZE3000F/1100h
                    </Card.Title>
                    <Card.Text>
                      <p className="m-0 p-0 haitianColor">Product: 2L Bucket</p>

                      <p className="m-0 p-0 haitianColor">
                        Robot: V1300 GD High Speed
                      </p>
                    </Card.Text>
                    <div className="btn-wrapper">
                      <Button
                        className="haitianColorButton"
                        size="large"
                        onClick={() => navigate("/ZEF3000-1100h-product")}
                      >
                        <span className="learnMoreFont">Learn More</span>
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>

            {/* CARD 3 */}
            {/* <div className="col-lg-3 mt-3 mt-lg-0"> */}
            <div
              ref={card3Ref}
              className={`col-lg-3 mt-3 mt-lg-0 reveal-section delay3 ${
                card3Visible ? "show" : ""
              }`}
            >
              <Card
                className={`product-card p-1 border border-1 border-muted ${
                  active3 ? "active" : ""
                }`}
                {...createHandlers(setActive3)}
              >
                <div className="image-wrapper bg-light">
                  <img
                    src={Ma3800}
                    className="main-image"
                    alt="Ma-3800H/PRO machine image"
                  />
                  <img src={Robot} className="hover-image" alt="Robot image" />
                </div>
                <Card.Body>
                  <div className="content-default">
                    <Card.Title className="haitianColor cardTittleFont">
                      MA 3800 H/PRO{" "}
                    </Card.Title>
                    <Card.Text>
                      <p className="m-0 p-0 haitianColor">
                        Product: 1L Bucket Cap
                      </p>
                      <p className="m-0 p-0 haitianColor">
                        Robot: V 1300GD High Speed
                      </p>
                    </Card.Text>
                    <div className="btn-wrapper">
                      <Button
                        className="haitianColorButton"
                        size="large"
                        onClick={() => navigate("/MA3800H-PRO-product")}
                      >
                        <span className="learnMoreFont">Learn More</span>
                      </Button>
                    </div>
                  </div>
                  <div className="content-hover">
                    <Card.Title className="haitianColor cardTittleFont">
                      MA 3800 H/PRO{" "}
                    </Card.Title>
                    <Card.Text>
                      <p className="m-0 p-0 haitianColor">
                        Product: 1L Bucket Cap
                      </p>
                      <p className="m-0 p-0 haitianColor">
                        Robot: V 1300GD High Speed
                      </p>
                    </Card.Text>
                    <div className="btn-wrapper">
                      <Button
                        className="haitianColorButton"
                        size="large"
                        onClick={() => navigate("/MA3800H-PRO-product")}
                      >
                        <span className="learnMoreFont">Learn More</span>
                      </Button>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>

            {/* CARD 4 */}
            {/* <div className="col-lg-3 mt-3 mt-lg-0 p5">
            <Card
              className={`product-card p-1 border border-2 border-muted ${
                active4 ? "active" : ""
              }`}
              {...createHandlers(setActive4)}
            >
              <div className="image-wrapper bg-light">
                <img src={Haitian} className="main-image" alt="Crusher" />
                 <img src={Haitian} className="hover-image" alt="Crusher" />
              </div>
              <Card.Body>
                <div className="content-default">
                  <Card.Title className="haitianColor">Crusher</Card.Title>
                  <Card.Text>
                    <p className="m-0 p-0 haitianColor">Model: HTSS300/W</p>
                   
                  </Card.Text>
                </div>
                <div className="content-hover">
                  <Card.Title className="haitianColor">Robot</Card.Title>
                  <Card.Text>
                    <p className="m-0 p-0 haitianColor">V1100-GD</p>
                    <p className="m-0 p-0 haitianColor">4cavity</p>
                    <p className="m-0 p-0 haitianColor">
                      robot is V1100-GD high speed series
                    </p>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </div> */}

            {/* <div className="col-lg-3 mt-3 mt-lg-0 p5"> */}
            <div
              ref={card4Ref}
              className={`col-lg-3 mt-3 mt-lg-0 p5 reveal-section delay4 ${
                card4Visible ? "show" : ""
              }`}
            >
              <Card
                className={`product-card p-1 border border-1 border-muted `}
              >
                <div className="image-wrapper bg-light">
                  <img
                    src={Haitian}
                    className="main-image"
                    alt="Crusher image"
                  />
                </div>
                <Card.Body>
                  <div className="content-default">
                    <Card.Title className="haitianColor cardTittleFont">
                      Crusher
                    </Card.Title>
                    <Card.Text>
                      <p className="m-0 p-0 haitianColor">Model: HTSS300/W</p>
                    </Card.Text>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>

        <div
          ref={footerRef}
          className={`footer-container mt-3 bg-light reveal-section ${
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
    </>
  );
}
