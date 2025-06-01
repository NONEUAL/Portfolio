import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BsGithub } from "react-icons/bs";
import { CgPlayButtonO } from "react-icons/cg"; // Or FaGamepad, etc.

function GameCard(props) {
  return (
    <Card className="project-card-view"> {/* Reuse project-card-view for similar styling */}
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {/* CRUCIAL: Wrap buttons in a div with className="btn-group" */}
        <div className="btn-group">
          {props.ghLink && ( // Only show GitHub button if ghLink exists
            <Button
              variant="primary"
              href={props.ghLink}
              target="_blank"
              // REMOVED: style={{ marginBottom: "10px" }}
            >
              <BsGithub />  
              GitHub
            </Button>
          )}
          {props.playLink && ( // Only show Play button if playLink exists
            <Button
              variant="primary"
              href={props.playLink}
              target="_blank"
              // REMOVED: style={{ marginLeft: props.ghLink ? "10px" : "0", marginBottom: "10px" }}
            >
              <CgPlayButtonO />  
              Play / Demo
            </Button>
          )}
        </div>
      </Card.Body>
    </Card>
  );
}
export default GameCard;