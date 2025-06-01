// src/components/About/About.js

import React from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";
// Import AnimatedItem for animation
import AnimatedItem from "../AnimatedItem"; // Adjust path as needed

// REMOVED GitHubCalendar import as it's no longer used
import Aboutcard from "./AboutCard";
import Techstack from "./Techstack"; // This now includes tools

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", alignItems: "center", paddingBottom: "20px" }}>
          {/* Use AnimatedItem to wrap Aboutcard */}
          <AnimatedItem
            Tag="Col" // Wrap with Col from react-bootstrap
            md={12}
            lg={8}
            animationDelay="0s" // Start immediately
            // className="about-text-card" is NOT needed here.
            // AboutCard component already has className="about-text-card" internally.
            // AnimatedItem will add 'animated-item' and 'is-visible' to the Col wrapper.
            style={{
              justifyContent: "center",
              paddingTop: "50px",
              paddingBottom: "30px",
            }}
          >
            <Aboutcard />
          </AnimatedItem>
        </Row>

        <h1 className="project-heading">
          Professional <strong className="blue">Skillset</strong>
        </h1>
        {/* Techstack will apply AnimatedItem to its internal Col components */}
        <Techstack />

        {/* --- REMOVED GITHUB CALENDAR SECTION --- */}
        {/*
        <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
          Days I <strong className="blue">Code</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <AnimatedItem Tag="div" className="react-github-calendar" animationDelay="0.2s">
            <GitHubCalendar
              username="NONEUAL"
              blockSize={15}
              blockMargin={5}
              color="var(--imp-text-color)"
              fontSize={16}
            />
          </AnimatedItem>
        </Row>
        */}
      </Container>
    </Container>
  );
}

export default About;