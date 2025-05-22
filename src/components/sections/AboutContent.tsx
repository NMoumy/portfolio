import React from "react";
import aboutData from "../../lib/data/aboutData.json";
import { TabKey } from "../../lib/types";
import { iconMap } from "../../lib/utils/iconMap";

type AboutContentProps = {
  activeTab: TabKey;
};

const AboutContent = ({ activeTab }: AboutContentProps) => {
  const content = aboutData[activeTab];

  //! creer un fonction pour alterner la couleur des blocs.

  // Cette fonction rend la section "About" de la page.
  const renderAboutSection = () => (
    <div className="flex flex-col w-full flex-1">
      {content.items.map((item, index) => {
        if (!("name" in item && "value" in item)) return null;
        return (
          <div key={index} className={`flex flex-col w-full p-2 md:p-6
              ${index % 2 === 0 ? "bg-[#233354]" : "bg-primary"}`}>
            <p className="text-white">
              <strong className="text-tc">{item.name} :</strong> {item.value}
            </p>
          </div>
        );
      })}
    </div>
  );
  // Cette fonction rend la section "Skills" de la page.
  const renderSkillsSection = () => (
    <div className="grid grid-cols-3 md:grid-cols-5">
      {content.items.map(
        (skill, index) =>
          "name" in skill &&
          (() => {
            const Icon = iconMap[skill.name];
            return (
              <div
                key={index}
                className={`flex flex-col flex-1 items-center justify-center p-2 md:p-6
                ${index % 2 === 0 ? "bg-[#233354]" : "bg-primary"}`}
              >
                {Icon && (
                  <Icon
                    className="text-tc mb-4"
                    style={{
                      width: "clamp(2rem, 5vw, 4rem)", // Taille adaptative
                      height: "clamp(2rem, 5vw, 4rem)", // Taille adaptative
                    }}
                  />
                )}
                <span className="text-white text-xs font-medium tracking-wider uppercase">{skill.name}</span>
              </div>
            );
          })()
      )}
    </div>
  );

  // Cette fonction rend la section "Education" de la page.
  const renderEducationSection = () => (
    <div className="flex flex-col ">
      {content.items.map(
        (edu, index) =>
          "degree" in edu &&
          "diploma" in edu &&
          "institution" in edu &&
          "duration" in edu && (
            <div
              key={index}
              className={`flex flex-col w-full p-4
              ${index % 2 === 0 ? "bg-[#233354]" : "bg-primary"}`}
            >
              <p className="text-white text-sm pb-2">{edu.institution}</p>
              <p className="text-sm font-semibold pb-1">{edu.diploma}</p>
              <p className="text-white md:text-lg font-bold pb-2">{edu.degree}</p>
              <p className="text-white text-sm">{edu.duration}</p>
            </div>
          )
      )}
    </div>
  );

  // Cette fonction rend la section "Experience" de la page.
  const renderExperienceSection = () => (
    <div className="flex flex-col">
      {content.items.map(
        (exp, index) =>
          "jobTitle" in exp &&
          "company" in exp &&
          "duration" in exp && (
            <div
              key={index}
              className={`p-4 w-full
              ${index % 2 === 0 ? "bg-[#233354]" : "bg-primary"}`}
            >
              <p className=" text-sm font-semibol pb-2">{exp.company}</p>
              <p className="text-white md:text-lg font-bold pb-2">{exp.jobTitle}</p>
              <p className="text-white text-sm">{exp.duration}</p>
            </div>
          )
      )}
    </div>
  );

  return (
    <div className="space-y-4">
      <h3>{content.title}</h3>
      <p>{content.description}</p>

      {activeTab === "about" && renderAboutSection()}
      {activeTab === "skills" && renderSkillsSection()}
      {activeTab === "education" && renderEducationSection()}
      {activeTab === "experience" && renderExperienceSection()}
    </div>
  );
};

export default AboutContent;
