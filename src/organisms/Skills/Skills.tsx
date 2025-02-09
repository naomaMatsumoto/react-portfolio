import React from "react";
import "./Skills.scss";

const Skills: React.FC = () => {
  return (
    <div className="skill">
      <h2 className="skill__title">Skills</h2>
      <div>フレームワーク</div>
      <div>Angular</div>
      <div>Vue.js</div>
      <div>React</div>

      <div className="skill__container">
        <div className="skill__container__box">
          <span className="skill__container__box__title">Typescript</span>
          <div className="skill__container__box__bar">
            <span className="skill-per html">
              <span className="tooltip">90%</span>
            </span>
          </div>
        </div>

        <div className="skill__container__box">
          <span className="skill__container__box__title">JavaScript</span>
          <div className="skill__container__box__bar">
            <span className="skill-per eight">
              <span className="tooltip">80%</span>
            </span>
          </div>
        </div>

        <div className="skill__container__box">
          <span className="skill__container__box__title">HTML</span>
          <div className="skill__container__box__bar">
            <span className="skill-per seven">
              <span className="tooltip">70%</span>
            </span>
          </div>
        </div>

        <div className="skill__container__box">
          <span className="skill__container__box__title">SCSS</span>
          <div className="skill__container__box__bar">
            <span className="skill-per seven">
              <span className="tooltip">70%</span>
            </span>
          </div>
        </div>

        <div className="skill__container__box">
          <span className="skill__container__box__title">NodeJS</span>
          <div className="skill__container__box__bar">
            <span className="skill-per three">
              <span className="tooltip">30%</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
