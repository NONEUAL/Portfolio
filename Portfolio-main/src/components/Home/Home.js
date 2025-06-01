// src/components/Home/Home.js

import { useInView } from "react-intersection-observer";
import avatarImg from "../../Assets/avatar.svg";
import Particle from "../Particle";
import Type from "./Type";
import { Link } from "react-router-dom"; // IMPORT Link

import {
  FaLightbulb, FaChevronRight,
  FaGraduationCap, FaCode, FaDownload,
  FaGithub,
} from "react-icons/fa";
import * as FaIcons from "react-icons/fa";
import * as SiIcons from "react-icons/si";

const BentoCard = ({ children, className = "", animationDelay = "0s", onClick }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div
      ref={ref}
      className={`bento-card ${className} ${inView ? "is-visible" : ""}`}
      style={{ transitionDelay: animationDelay }}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

function HomePage() {

  const projects = [
    { name: "Place Holder", icon: <FaIcons.FaShieldAlt />, link: "" },
    { name: "Place Holder", icon: <FaIcons.FaSearch />, link: "" },
    { name: "Place Holder", icon: <FaIcons.FaMusic />, link: "" },
    { name: "Alitaptap Website", icon: <FaIcons.FaUserTie />, link: "" },
  ];

  const games = [
    { name: "Place Holder", icon: <FaIcons.FaGamepad />, link: "YOUR_TICTACTOE_LINK" }, // These links are external for now
    { name: "Place Holder", icon: <FaIcons.FaDiceD6 />, link: "YOUR_OTHERGAME_LINK" },  // We'll change this for internal navigation later
  ];

  const education = [
    { institution: "Olivarez College Tagaytay", degree: "Bachelor of Science in Information Technology", duration: "Aug 2024 -", score: "" },
    { institution: "Halang Banaybanay Integrated School", degree: "Acountancy, Business and Management", duration: "Mar 2021 - May 2024", score: "" },
    { institution: "E.B Magalona National High School", degree: "", duration: "2016-2021", score: "" },
    { institution: "Alicante Elementary School", degree: "", duration: "2012-2016", score: "" },
  ];

  const techStack = [
    { name: "HTML5", icon: <FaIcons.FaHtml5 />, color: "#E34F26" }, { name: "CSS3", icon: <FaIcons.FaCss3Alt />, color: "#1572B6" }, 
    { name: "JavaScript", icon: <FaIcons.FaJsSquare />, color: "#F7DF1E" }, { name: "React", icon: <FaIcons.FaReact />, color: "#61DAFB" }, 
    { name: "Python", icon: <FaIcons.FaPython />, color: "#3776AB" }, { name: "Firebase", icon: <SiIcons.SiFirebase />, color: "#FFCA28" },
    { name: "Supabase", icon: <SiIcons.SiSupabase />, color: "#3ECF8E" }, { name: "Node.js", icon: <FaIcons.FaNodeJs />, color: "#339933" },
    { name: "Blender", icon: <SiIcons.SiBlender />, color: "#F5792A" }, { name: "Figma", icon: <SiIcons.SiFigma />, color: "#F24E1E" },
    { name: "Git", icon: <FaIcons.FaGitAlt />, color: "#F05032" }, { name: "Docker", icon: <SiIcons.SiDocker />, color: "#2496ED" },
    { name: "Vscode", icon: <SiIcons.SiVisualstudiocode />, color: "#007ACC" }, { name: "Photoshop", icon: <SiIcons.SiAdobephotoshop />, color: "#31A8FF" },
    { name: "Illustrator", icon: <SiIcons.SiAdobeillustrator />, color: "#FF9A00" }, { name: "After Effects", icon: <SiIcons.SiAdobeaftereffects />, color: "#9999FF" },
    { name: "Canva", icon: <SiIcons.SiCanva />, color: "#00C4CC" }, { name: "Microsoft Office", icon: <SiIcons.SiMicrosoftoffice />, color: "#F25022" },
    { name: "Github", icon: <FaIcons.FaGithub />, color: "#181717" }, { name: "Unity", icon: <SiIcons.SiUnity />, color: "#100000" },
  ];

  const yourName = "Gabriel Velasquez";
  return (
    <div>
      <Particle />

      <section className="home-bento-section" style={{ paddingTop: "120px", minHeight: "100vh" }}>
        <div className="bento-grid">
          {/* Column 1 */}
          <BentoCard className="bento-tagline" animationDelay="0s">
            <FaLightbulb className="card-icon-header accent-secondary" />
            <h2>Personal site not a portfolio.</h2>
          </BentoCard>

          <BentoCard className="bento-about" animationDelay="0.15s">
             <div className="card-header">
              <h4>About Me</h4>
              <Link to="/about" className="bento-header-link">
                <FaChevronRight />
              </Link>
            </div>
            <p>
                I am Gabriel Velasquez from Amadeo, Cavite.
                I am currently a BSIT student at Olivarez College Tagaytay. <br /> <br />
              Interests: Volleyball, Basketball, Online Games, Anime, Programming.
            </p>
          </BentoCard>

          <BentoCard className="bento-resume" animationDelay="0.3s" onClick={() => window.open('/resume.pdf', '_blank')}>
            <h4>My Resume</h4>
            <FaDownload className="resume-download-btn" />
          </BentoCard>

          {/* Column 2 */}
          <BentoCard className="bento-avatar-name" animationDelay="0.05s">
            <h3>
              {yourName.split(' ')[0]}
              <span className="accennt-black">{' '}</span> 
              Velasquez
              <span className="accennt-black">{' '}</span>
            </h3>
            <img src={avatarImg} alt={`${yourName} Avatar`} className="avatar-image" />
            <div className="typewriter-container" style={{ marginTop: '15px', textAlign: 'center' }}>
              <Type />
            </div>
          </BentoCard>

          <BentoCard className="bento-games-list" animationDelay="0.2s">
             <div className="card-header">
              <h4>Hobbies I Game Played</h4>
              <Link to="/games" className="bento-header-link"> 
                <FaChevronRight />
              </Link>
            </div>
            <ul>
              {games.map((game, index) => (
                <li key={index}>
                  <a href={game.link} target="_blank" rel="noopener noreferrer">
                    {game.icon} <span>{game.name}</span> <FaChevronRight className="list-arrow"/>
                  </a>
                </li>
              ))}
              {games.length === 0 && <p>Game projects coming soon!</p>}
            </ul>
          </BentoCard>

          <BentoCard className="bento-contact" animationDelay="0.35s">
            <h4>Contact Me</h4>
            <div className="contact-icons">
              <a href="https://github.com/NONEUAL" target="_blank" rel="noopener noreferrer" aria-label="Github"><FaGithub /></a>
              <a href="https://x.com/Gab_evl" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><SiIcons.SiTwitter /></a>
              <a href="https://www.facebook.com/Gab.182.Y" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><FaIcons.FaFacebookF /></a>
              <a href="https://www.instagram.com/gab.evl" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><SiIcons.SiInstagram /></a>
            </div>
          </BentoCard>

          {/* Column 3 */}
          <BentoCard className="bento-projects" animationDelay="0.1s">
            <div className="card-header">
              <h4>My Projects</h4>
              {/* Optional: Link to your projects page */}
              <Link to="/project" className="bento-header-link"> {/* Assuming route is /project */}
                <FaChevronRight />
              </Link>
            </div>
            <ul>
              {projects.map((project, index) => (
                <li key={index}>
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    {project.icon} <span>{project.name}</span> <FaChevronRight className="list-arrow"/>
                  </a>
                </li>
              ))}
            </ul>
          </BentoCard>

          <BentoCard className="bento-tech" animationDelay="0.25s">
             <div className="card-header">
              <h4>Tech I Love</h4><FaCode /> {/* Consider making FaCode use an accent color */}
            </div>
            <div className="tech-icons-grid">
              {techStack.map((tech, index) => (
                <div key={index} className="tech-icon-item" title={tech.name} style={{color: tech.color || 'inherit'}}>
                  {tech.icon}
                </div>
              ))}
            </div>
          </BentoCard>

          {/* Column 4 */}
          <BentoCard className="bento-education" animationDelay="0.15s">
            <div className="card-header">
              <h4>My Education</h4><FaGraduationCap /> {/* Consider making FaGraduationCap use an accent color */}
            </div>
            {education.map((edu, index) => (
              <div key={index} className="education-item">
                <h5>{edu.institution}</h5>
                {edu.degree && <p>{edu.degree}</p>}
                <p className="duration">{edu.duration}</p>
                {edu.score && <p className="score">{edu.score}</p>}
              </div>
            ))}
          </BentoCard>
        </div>
      </section>
    </div>
  );
}

export default HomePage;