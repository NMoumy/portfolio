import React from "react";
import aboutData from "../../lib/data/aboutData.json";
import { TabKey } from "../../lib/types";
import { iconMap } from "../../lib/utils/iconMap";

type AboutContentProps = {
  activeTab: TabKey;
};

const AboutContent = ({ activeTab }: AboutContentProps) => {
  const content = aboutData[activeTab];

  // This function renders the about section.
  const renderAboutSection = () => (
    <div className="grid grid-cols-2">
      {content.items.map((item, index) => {
        if (!("name" in item && "value" in item)) return null;

        const row = Math.floor(index / 2);
        const isFirstInRow = index % 2 === 0;
        const bgColor =
          row % 2 === 0 ? (isFirstInRow ? "bg-primary" : "bg-[#0C1012]") : isFirstInRow ? "bg-[#0C1012]" : "bg-primary";

        return (
          <div key={index} className={`p-4 ${bgColor}`}>
            <p className="text-white">
              <strong className="text-tc">{item.name} :</strong> {item.value}
            </p>
          </div>
        );
      })}
    </div>
  );

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
                className={`flex flex-col flex-1 items-center justify-center p-2 md:p-6 border-1 border-[#0C1012]
                ${index % 2 === 0 ? "bg-secondary" : "bg-primary"}`}
              >
                {Icon && <Icon className="w-15 h-15 text-accent mb-4" />}
                <span className="text-white text-xs font-medium tracking-wider uppercase">{skill.name}</span>
              </div>
            );
          })()
      )}
    </div>
  );

  // This function renders the education section.
  const renderEducationSection = () => (
    <div className="flex flex-col md:flex-row">
      {content.items.map(
        (edu, index) =>
          "degree" in edu &&
          "diploma" in edu &&
          "institution" in edu &&
          "duration" in edu && (
            <div
              key={index}
              className={`flex flex-col w-full md:w-1/2 p-2 md:p-6 border-1 border-[#0C1012]
              ${index % 2 === 0 ? "bg-secondary" : "bg-primary"}`}
            >
              <p className="text-white text-sm pb-2">{edu.institution}</p>
              <p className="text-sm font-semibold pb-1">{edu.diploma}</p>
              <p className="text-white text-lg font-bold pb-2">{edu.degree}</p>
              <p className="text-white text-sm">{edu.duration}</p>
            </div>
          )
      )}
    </div>
  );

  // This function renders the experience section.
  const renderExperienceSection = () => (
    <div className="flex flex-col md:flex-row">
      {content.items.map(
        (exp, index) =>
          "jobTitle" in exp &&
          "company" in exp &&
          "duration" in exp && (
            <div
              key={index}
              className={`p-4 w-full md:w-1/2
              ${index % 2 === 0 ? "bg-secondary" : "bg-primary"}`}
            >
              <p className="text-sm">
                {exp.company} — {exp.duration}
              </p>
              <p className="font-semibold">{exp.jobTitle}</p>

              {"responsibilities" in exp && Array.isArray(exp.responsibilities) && (
                <div className="mt-2 space-y-1 pl-4 border-l-2 border-gray-300">
                  {exp.responsibilities.map((task, i) => (
                    <div key={i} className="text-sm">
                      • {task}
                    </div>
                  ))}
                </div>
              )}
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
