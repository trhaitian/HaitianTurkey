//import React, { useState } from "react";
// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import HaitianLogo from "./Images/HaitianTurkeylogo.png";
// import EventLogo from "./Images/EventLogo.png";
// import Event1 from "./Images/EventImage1.png";
// import Event2 from "./Images/EventImage2.png";
// import Banner from "./Images/Banner.jpg";
// import Mars from "./Images/MarsMachine.png";
// import Product1 from "./Images/Product1.png";
// import Carousel from "react-bootstrap/Carousel";
// import "./App.css";
// import Card from "react-bootstrap/Card";

// export default function LandingPage() {
//   const [isHovered, setIsHovered] = useState(false);
//   const [active, setActive] = useState(false);

//   const isMobile = window.matchMedia("(max-width: 768px)").matches;

//   const toggleCard = () => {
//     if (isMobile) setActive((prev) => !prev);
//   };

//   const handleHover = (state) => {
//     if (!isMobile) setActive(state);
//   };

//   return (
//     <div className="container-fluid">
//       <Navbar className="border border-2 border-danger bg-light">
//         <div
//           className="d-flex align-items-center justify-content-between"
//           style={{ width: "100%" }}
//         >
//           <img
//             src={HaitianLogo}
//             alt="Haitian Logo"
//             className="navbar-logo"
//             onClick={() => window.open("https://www.haitian.com.tr/", "_blank")}
//           />

//           <img src={EventLogo} alt="Plast Logo" className="navbar-logo " />
//         </div>
//       </Navbar>
//       <div className="contianer mt-0 border border-2 border-danger">
//         <div className="row">
//           <div className="col-12">
//             <Carousel data-bs-theme="dark">
//               <Carousel.Item interval={3000}>
//                 <img
//                   className="d-block w-100 carousel-img"
//                   src={Event1}
//                   alt="Event Slide 1"
//                 />
//               </Carousel.Item>

//               <Carousel.Item interval={3000}>
//                 <img
//                   className="d-block w-100 carousel-img"
//                   src={Event2}
//                   alt="Event Slide 2"
//                 />
//               </Carousel.Item>
//             </Carousel>
//           </div>
//         </div>
//       </div>

//       <div className="container mt-5 border border-2 border-danger">
//         <div className="row">
//           <div className="col-lg-3">
//             <Card
//               className={`product-card ${active ? "active" : ""}`}
//               onMouseEnter={() => handleHover(true)}
//               onMouseLeave={() => handleHover(false)}
//               onClick={toggleCard}
//             >
//               <div className="image-wrapper">
//                 <img src={Mars} className="main-image" />
//                 <img src={Product1} className="hover-image" />
//               </div>

//               <Card.Body>
//                 <div className="content-default">
//                   <Card.Title className="haitianColor">MA2100V/h</Card.Title>
//                   <Card.Text>
//                     <p className="m-0 p-0 haitianColor">HAITIAN MA2100V/h</p>
//                     <p className="m-0 p-0 haitianColor">4 cavity</p>
//                     <p className="m-0 p-0 haitianColor">
//                       robotis V1100-GD high speed series
//                     </p>
//                     <p className="m-0 p-0 haitianColor">cycle is 11s</p>
//                   </Card.Text>
//                 </div>

//                 <div className="content-hover">
//                   <Card.Title className="haitianColor">PRODUCT 1</Card.Title>
//                   <Card.Text>
//                     <p className="m-0 p-0 haitianColor">
//                       Product Name: Product 1
//                     </p>
//                     <p className="m-0 p-0 haitianColor">
//                       Type: High Precision Part
//                     </p>
//                     <p className="m-0 p-0 haitianColor">
//                       Material: ABS Polymer
//                     </p>
//                     <p className="m-0 p-0 haitianColor">Usage: Industrial</p>
//                   </Card.Text>
//                 </div>
//               </Card.Body>
//             </Card>
//           </div>
//           <div className="col-lg-3 mt-3 mt-lg-0">
//             <Card>
//               <Card.Img
//                 variant="top"
//                 src={Mars}
//                 className="img-fluid bg-light"
//               />
//               <Card.Body>
//                 <Card.Title className="haitianColor">MA2100V/h</Card.Title>
//                 <Card.Text>
//                   <p className="m-0 p-0 haitianColor">HAITIANMA2100V/h</p>
//                   <p className="m-0 p-0 haitianColor">4cavity</p>
//                   <p className="m-0 p-0 haitianColor">
//                     robotisV1100-GD highspeedseris
//                   </p>
//                   <p className="m-0 p-0 haitianColor">cycleis11s</p>
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </div>
//           <div className="col-lg-3 mt-3 mt-lg-0">
//             <Card>
//               <Card.Img
//                 variant="top"
//                 src={Mars}
//                 className="img-fluid bg-light"
//               />
//               <Card.Body>
//                 <Card.Title className="haitianColor">MA2100V/h</Card.Title>
//                 <Card.Text>
//                   <p className="m-0 p-0 haitianColor">HAITIANMA2100V/h</p>
//                   <p className="m-0 p-0 haitianColor">4cavity</p>
//                   <p className="m-0 p-0 haitianColor">
//                     robotisV1100-GD highspeedseris
//                   </p>
//                   <p className="m-0 p-0 haitianColor">cycleis11s</p>
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </div>
//           <div className="col-lg-3 mt-3 mt-lg-0">
//             <Card>
//               <Card.Img
//                 variant="top"
//                 src={Mars}
//                 className="img-fluid bg-light"
//               />
//               <Card.Body>
//                 <Card.Title className="haitianColor">MA2100V/h</Card.Title>
//                 <Card.Text>
//                   <p className="m-0 p-0 haitianColor">HAITIANMA2100V/h</p>
//                   <p className="m-0 p-0 haitianColor">4cavity</p>
//                   <p className="m-0 p-0 haitianColor">
//                     robotisV1100-GD highspeedseris
//                   </p>
//                   <p className="m-0 p-0 haitianColor">cycleis11s</p>
//                 </Card.Text>
//               </Card.Body>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect, useRef } from "react";
import Navbar from "react-bootstrap/Navbar";
import Carousel from "react-bootstrap/Carousel";
import Card from "react-bootstrap/Card";
import HaitianLogo from "./Images/HaitianTurkeylogo.png";
import EventLogo from "./Images/EventLogo.png";
import Event1 from "./Images/EventImage1.png";
import Event2 from "./Images/EventImage2.png";
import ZEMachine from "./Images/ZEMachine.png";
import Product3 from "./Images/Product3.png";
import Ma3800 from "./Images/Ma3800.png";
import Product2 from "./Images/Product2.png";
import Mars from "./Images/MarsMachine.png";
import Product1 from "./Images/Product1.png";
import Haitian from "./Images/Haitian.png";
import Robot from "./Images/Robot.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAt, faGlobe, faPhone } from "@fortawesome/free-solid-svg-icons";
import "./App.css";

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


export default function LandingPage() {
  // ✅ Separate state for EACH card
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
    <div className="container-fluid">
      <Navbar bg="light" fixed="top" className="shadow-sm">
        <div
          className="d-flex align-items-center justify-content-between"
          style={{ width: "100%" }}
        >
          <img
            src={HaitianLogo}
            alt="Haitian Logo"
            className="navbar-logo"
            onClick={() => window.open("https://www.haitian.com.tr/", "_blank")}
          />

          <img src={EventLogo} alt="Plast Logo" className="navbar-logo " />
        </div>
      </Navbar>
      <div className="contianer page-content">
        <div className="row">
          <div className="col-12">
            <Carousel data-bs-theme="dark">
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
            </Carousel>
          </div>
        </div>
      </div>

<div
  ref={cardsRef}
  className={`container mt-5 reveal-section ${cardsVisible ? "show" : ""}`}
>
        <div className="row">
          {/* CARD 1 */}
          <div className="col-lg-3">
            <Card
              className={`product-card p-1  ${active1 ? "active" : ""}`}
              {...createHandlers(setActive1)}
            >
              <div className="image-wrapper bg-light">
                <img src={Mars} className="main-image" alt="machine" />
                <img src={Product1} className="hover-image" alt="product" />
              </div>
              <Card.Body>
                <div className="content-default">
                  <Card.Title className="haitianColor">
                    HAITIANMA2100V/h
                  </Card.Title>
                  <Card.Text>
                    <p className="m-0 p-0 haitianColor">4cavity</p>
                    <p className="m-0 p-0 haitianColor">
                      robot is V1100-GD high speed series
                    </p>
                    <p className="m-0 p-0 haitianColor">cycle speed 11s</p>
                  </Card.Text>
                </div>
                <div className="content-hover">
                  <Card.Title className="haitianColor">
                    4 cavity Bowl
                  </Card.Title>
                  <Card.Text>
                    <p className="m-0 p-0 haitianColor">4 cavity</p>
                    <p className="m-0 p-0 haitianColor">
                      robot is V1100-GD high speed series
                    </p>
                    <p className="m-0 p-0 haitianColor">cycle speed 11s</p>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </div>

          {/* CARD 2 */}
          <div className="col-lg-3 mt-3 mt-lg-0">
            <Card
              className={`product-card p-1  ${active2 ? "active" : ""}`}
              {...createHandlers(setActive2)}
            >
              <div className="image-wrapper bg-light">
                <img src={ZEMachine} className="main-image" alt="machine" />
                <img src={Product3} className="hover-image" alt="product" />
              </div>
              <Card.Body>
                <div className="content-default">
                  <Card.Title className="haitianColor">
                    ZE3000F machine
                  </Card.Title>
                  <Card.Text>
                    <p className="m-0 p-0 haitianColor">
                      V1300GD high speed series robot
                    </p>

                    <p className="m-0 p-0 haitianColor">cycle speed 5.8s</p>
                  </Card.Text>
                </div>
                <div className="content-hover">
                  <Card.Title className="haitianColor">Container</Card.Title>
                  <Card.Text>
                    <p className="m-0 p-0 haitianColor">2 cavity</p>

                    <p className="m-0 p-0 haitianColor">
                      V1300GD high speed series robot
                    </p>

                    <p className="m-0 p-0 haitianColor">cycle speed 5.8s</p>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </div>

          {/* CARD 3 */}
          <div className="col-lg-3 mt-3 mt-lg-0">
            <Card
              className={`product-card p-1  ${active3 ? "active" : ""}`}
              {...createHandlers(setActive3)}
            >
              <div className="image-wrapper bg-light">
                <img src={Ma3800} className="main-image" alt="machine" />
                <img src={Product2} className="hover-image" alt="product" />
              </div>
              <Card.Body>
                <div className="content-default">
                  <Card.Title className="haitianColor">MA3800H/PRO</Card.Title>
                  <Card.Text>
                    <p className="m-0 p-0 haitianColor">4 cavity</p>
                    <p className="m-0 p-0 haitianColor">
                      robot is V1100-GD high speed series
                    </p>
                    <p className="m-0 p-0 haitianColor">cycle speed 11s</p>
                  </Card.Text>
                </div>
                <div className="content-hover">
                  <Card.Title className="haitianColor">
                    Container Cap
                  </Card.Title>
                  <Card.Text>
                    <p className="m-0 p-0 haitianColor">4 cavity</p>
                    <p className="m-0 p-0 haitianColor">
                      robot is V1100-GD high speed series
                    </p>
                    <p className="m-0 p-0 haitianColor">cycle speed 11s</p>
                  </Card.Text>
                </div>
              </Card.Body>
            </Card>
          </div>

          {/* CARD 4 */}
          <div className="col-lg-3 mt-3 mt-lg-0 p5">
            <Card
              className={`product-card p-1  ${active4 ? "active" : ""}`}
              {...createHandlers(setActive4)}
            >
              <div className="image-wrapper bg-light">
                <img src={Haitian} className="main-image" alt="machine" />
                <img src={Robot} className="hover-image" alt="product" />
              </div>
              <Card.Body>
                <div className="content-default">
                  <Card.Title className="haitianColor">Crusher</Card.Title>
                  <Card.Text>
                    <p className="m-0 p-0 haitianColor">HAITIAN MA2100 V/h</p>
                    <p className="m-0 p-0 haitianColor">4cavity</p>
                    <p className="m-0 p-0 haitianColor">
                      robot is V1100-GD high speed series
                    </p>
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
          </div>
        </div>
      </div>
<div
  ref={footerRef}
  className={`footer-container mt-3 bg-light reveal-section ${footerVisible ? "show" : ""}`}
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
            <div className="col-12 col-lg-3 footer-item with-pipe">
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
