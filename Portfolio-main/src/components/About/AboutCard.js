// src/components/About/AboutCard.js (Corrected)
import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im"; // Make sure this is imported

function AboutCard() {
  return (
    <Card className="about-text-card"> {/* CHANGED CLASS NAME HERE */}
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="blue">Gabriel Velasquez </span>
            from <span className="blue"> Amadeo, Cavite.</span>
            <br />
            I am currently a BSIT student at Olivarez College Tagaytay.
            <br />
            I want to be an full-stack developer
          </p>
          <p style={{ marginTop: "20px", textAlign: "justify" }}>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight style={{ marginRight: "8px" }} /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight style={{ marginRight: "8px" }} /> Watching Anime
            </li>
            <li className="about-activity">
              <ImPointRight style={{ marginRight: "8px" }} /> Travelling
            </li>
          </ul>

          <p className="about-quote">
            "The world isn't kind. It's a harsh place filled with suffering. But that doesn't
            mean you can't find happiness."{" "}
          </p>
          <footer className="blockquote-footer about-quote-footer">Gabriel</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;