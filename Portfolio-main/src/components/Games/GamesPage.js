// src/components/Games/GamesPage.js
import React from "react";
import { Container, Row } /* Removed Col, as it's handled by AnimatedItem */ from "react-bootstrap";
import Particle from "../Particle"; // Assuming you want particles here too
import GameCard from "./GameCard";
// Use the generic AnimatedItem component
import AnimatedItem from "../AnimatedItem"; // Adjust path if your file structure is different

// Import your game images
import game1Img from "../../Assets/Games/Place Holder2.jpg";
import game2Img from "../../Assets/Games/Place Holder1.png";

// Removed AnimatedCol component, using AnimatedItem directly

function GamesPage() {
  // Define your game data here
  const games = [
    {
      id: 1,
      title: "Retro Space Shooter",
      description: "A classic arcade-style space shooter game built with Phaser.js. Dodge asteroids and blast alien ships to achieve the high score!",
      imgPath: game1Img, // Use imported image
      ghLink: "https://github.com/yourusername/space-shooter", // Replace
      playLink: "https://yourusername.github.io/space-shooter/", // Replace
    },
    {
      id: 2,
      title: "Puzzle Platformer Quest",
      description: "Navigate a tricky world, solve puzzles, and overcome obstacles in this charming 2D platformer made with Unity.",
      imgPath: game2Img, // Use imported image
      ghLink: "https://github.com/yourusername/puzzle-platformer", // Replace
      playLink: "", // No play link yet
    },
    // Add more game objects here
  ];

  return (
    <Container fluid className="project-section"> {/* Reuse project-section for similar styling */}
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="imp-text-color">Games</strong>
        </h1>
        <p className="section-subheading"> {/* Use section-subheading for consistent styling */}
          Here are a few games I've worked on or am currently developing.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {games.map((game, index) => (
            // Use AnimatedItem with Tag="Col"
            <AnimatedItem
              Tag="Col"
              key={game.id}
              md={6} // Display 2 cards per row on medium screens and up
              lg={6} // Display 2 cards per row on large screens and up (change to lg={4} for 3 cards on large screens)
              className="project-card" // Reuse project-card for layout, AnimatedItem adds "animated-item" and "is-visible"
              animationDelay={`${index * 0.15}s`} // Staggered animation
            >
              <GameCard
                imgPath={game.imgPath}
                title={game.title}
                description={game.description}
                ghLink={game.ghLink}
                playLink={game.playLink}
              />
            </AnimatedItem>
          ))}
        </Row>
      </Container>
    </Container>
  );
}

export default GamesPage;