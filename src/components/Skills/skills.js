import React from "react";
import "./skills.css";
import ht from "../../assets/icons8-html-5-240.png";
import js from "../../assets/icons8-javascript-240.png";
import cs from "../../assets/css.png";
import rct from "../../assets/react.png";
import msq from "../../assets/icons8-mysql-logo-240.png";
import btp from "../../assets/bootstrap.png";
import dj from "../../assets/django.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">My Skills</span>
      <span className="skillDesc">I am skilled in</span>
      <div className="skillBars">
        <div className="skillBar">
          <div className="skillWrap">
            <a href="https://html.com/" target="_blank">
              <img src={ht} className="skillBarImg" />
            </a>
            <span>HTML</span>
          </div>
          <div className="skillWrap">
            <a href="https://www.css3.com/" target="_blank">
              <img src={cs} className="skillBarImg" />
            </a>
            <span>CSS</span>
          </div>
          <div className="skillWrap">
            {" "}
            <a href="https://www.javascript.com/" target="_blank">
              <img src={js} className="skillBarImg" />
              
            </a>
            <span>Javascript</span>
          </div>
          <div className="skillWrap">
            <a href="https://react.dev/" target="_blank">
              <img src={rct} className="skillBarImg" />
              
            </a>
            <span>React</span>
          </div>
          <div className="skillWrap">
            <a href="https://www.mysql.com/" target="_blank">
              {" "}
              <img src={msq} className="skillBarImg" />
              
            </a>
            <span>MySql</span>
          </div>
          <div className="skillWrap">
            <a href="https://getbootstrap.com/" target="_blank">
              <img src={btp} className="skillBarImg" />
              
            </a>
            <span>Bootstrap</span>
          </div>
          <div className="skillWrap">
            <a href="https://www.djangoproject.com/" target="_blank">
              <img src={dj} className="skillBarImg" />
              
            </a>
            <span>Django</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
