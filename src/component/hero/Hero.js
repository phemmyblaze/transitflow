import React from "react";
import style from "./Hero.css";
import facebook from "../../image/Facebook.png";
import insta from "../../image/Instagram.png";
import twitter from "../../image/Twitter.png";
import linkedin from "../../image/Linkdin.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-details">
            <div className="contain">
            <nav>
                <ul className="nav-link">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Pages</a>
                </li>
                <li>
                    <a href="#">Project</a>
                </li>
                <li>
                    <a href="#">contact</a>
                </li>
                </ul>
            </nav>

            <div className="social-link">
                <ul className="social-links">
                <li>
                    <img src={facebook} alt="Logo" />{" "}
                </li>
                <li>
                    <img src={insta} alt="Logo" />{" "}
                </li>
                <li>
                    <img src={twitter} alt="Logo" />{" "}
                </li>
                <li>
                    <img src={linkedin} alt="Logo" />{" "}
                </li>
                </ul>

                <div className="hero-btn">
                <a href="#">Request Quote</a>
                </div>
            </div>
            </div>
      </div>

      <div className="hero-section">
        <div className="hero-details">
            <div className="small-heading">
            <h6>Logistics & Supply Chain Solutions</h6>
            </div>
            
            <div className="large-heading">
                <h1>Your Gateway 
                to any Destination in the World</h1>
            </div>
            
            <div className="med-heading">
                <p>In augue ligula, feugiat ut nulla consequat. Ut est lacus, molestie in arcu no, iaculis vehicula ipsum. Nunc faucibus, nisl id dapibus finibus, enim diam interdum nulla, sed laoreet risus lectus. </p>
            </div>

            <div className="hero-sec-btn">
                <a href="#">Explore More</a>
            </div>
            
        </div>
      </div>
    </div>
  );
};

export default Hero;
