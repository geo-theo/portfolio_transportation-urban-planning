import React, {useContext} from "react";
import {Fade} from "react-reveal";
import {customSections} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import "../StartupProjects/StartupProjects.scss";

export default function CustomSections() {
  const {isDark} = useContext(StyleContext);
  return customSections.filter(section => section.display !== false).map(section => (
    <Fade bottom duration={1000} distance="20px" key={section.id}>
      <section className="main" id={section.id}>
        <h1 className="skills-heading">{section.title}</h1>
        {section.subtitle && <p className={isDark ? "dark-mode project-subtitle" : "subTitle project-subtitle"}>{section.subtitle}</p>}
        <div className="projects-container">
          {(section.items || []).map((item, index) => (
            <article className={`project-card ${isDark ? "project-card-dark" : "project-card-light"}`} key={index}>
              {item.image && <div className="project-image"><img className="card-image" src={item.image} alt={item.imageAlt || item.title} /></div>}
              <div className="project-detail">
                <h2 className={`card-title ${isDark ? "dark-mode" : ""}`}>{item.title}</h2>
                <p className={`card-subtitle ${isDark ? "dark-mode" : ""}`}>{item.description}</p>
                <div className="project-card-footer">{(item.links || []).filter(link => link.url).map((link,index) => (
                  <a className="project-tag" href={link.url} target="_blank" rel="noopener noreferrer" key={index}>{link.name}</a>
                ))}</div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </Fade>
  ));
}
