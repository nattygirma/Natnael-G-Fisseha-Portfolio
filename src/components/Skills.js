import React from "react";
// import { Heading } from "@chakra-ui/react";
import { skills, Skill } from "./skills/config";
import { v4 as uuidv4 } from 'uuid';
import "../components/skills/Skills.css";

class Skills extends React.Component {
  render() {
  return(
    <div className="skills">
      <div class="section-container">
  <div class="container margintopneeded">
    <div class="row">
      
      <div class="col-sm-8a col-sm-offset-2 section-container-spacer">
        <div class="text-center">
          <h1 class="h2">03 : Skills</h1>
          <p>Technologies I use in my development: </p>
        </div>
      </div>
    <div className="bg-skills">
      <div className="skill-icons-gird">
        {skills.map((skill: Skill) => {
          return(
            <a key={uuidv4()} href={skill.url} target="_blank">
              <div className="skill">
                <img src={skill.img} alt="Skill logo" />
              </div>
              <p className="skilltext">{skill.name}</p>
            </a>
          )
        })}
      </div>
    </div>
    </div>
    </div>
    </div>
    </div>
  );
}
}

export default Skills;