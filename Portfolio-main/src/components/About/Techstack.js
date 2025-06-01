import React from "react";
import { Row } from "react-bootstrap";
import AnimatedItem from "../AnimatedItem"; 
import {
  DiJavascript1,
  DiReact,
  DiDocker,
  DiCodeigniter,
  DiHtml5,
} from "react-icons/di";
import {
  SiVisualstudiocode,
  SiFigma,
  SiAdobephotoshop,
  SiCanva,
  SiMicrosoft,
  SiGithub,
  SiBlender,
  SiSupabase,
  SiNodedotjs, 
  SiFirebase,
  SiGit, 
  SiAdobeillustrator,
  SiAdobeaftereffects,
  SiUnity,
} from "react-icons/si";
import { FaPython } from "react-icons/fa"; 

function Techstack() {
  const allIcons = [
    { icon: <DiHtml5 />, name: "HTML5" },
    { icon: <DiJavascript1 />, name: "Javascript" },
    { icon: <DiCodeigniter />, name: "Codeigniter" },
    { icon: <DiReact />, name: "React" },
    { icon: <FaPython />, name: "Python" }, 
    { icon: <DiDocker />, name: "Docker" },
    { icon: <SiNodedotjs />, name: "Node.js" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <SiSupabase />, name: "Supabase" },
    { icon: <SiGit />, name: "Git" },
    { icon: <SiVisualstudiocode />, name: "VS Code" },
    { icon: <SiFigma />, name: "Figma" },
    { icon: <SiAdobephotoshop />, name: "Photoshop" },
    { icon: <SiCanva />, name: "Canva" },
    { icon: <SiMicrosoft />, name: "Microsoft Office" },
    { icon: <SiGithub />, name: "Github" },
    { icon: <SiBlender />, name: "Blender" },
    { icon: <SiAdobeillustrator />, name: "Illustrator" },
    { icon: <SiAdobeaftereffects />, name: "After Effects" },
    { icon: <SiUnity />, name: "Unity" },
  ];

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      {allIcons.map((item, index) => (
        <AnimatedItem Tag="Col" key={index} xs={4} md={2} className="tech-icons" animationDelay={`${index * 0.05}s`}>
          {item.icon}
        </AnimatedItem>
      ))}
    </Row>
  );
}

export default Techstack;