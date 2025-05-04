import React from "react";
import aboutData from "../../lib/data/aboutData.json";
import { TabKey } from "../../lib/types";

type AboutContentProps = {
  activeTab: TabKey;
};

const AboutContent = ({ activeTab }: AboutContentProps) => {
  const content = aboutData[activeTab];

  return (
    <div>
      <h3 className="">{content.title}</h3>
      <p>{content.description}</p>
      {/* Render content based on tab */}
      {activeTab === "about" && (
        <ul className="space-y-2">
          {content.items.map((item, index) => (
            <li key={index}>
              {"name" in item && "value" in item && (
                <>
                  <strong>{item.name} :</strong> {item.value}
                </>
              )}
            </li>
          ))}
        </ul>
      )}

      {activeTab === "skills" && (
        <ul className="flex flex-wrap gap-2">
          {content.items.map((skill, index) => (
            "name" in skill && (
              <li key={index} className="bg-gray-200 text-sm px-3 py-1 rounded">
                {skill.name}
              </li>
            )
          ))}
        </ul>
      )}

      {activeTab === "education" && (
        <ul className="space-y-4">
          {content.items.map((edu, index) => (
            "degree" in edu && "institution" in edu && "duration" in edu && (
              <li key={index}>
                <p className="font-semibold">{edu.degree}</p>
                <p>{edu.institution} — {edu.duration}</p>
              </li>
            )
          ))}
        </ul>
      )}

      {activeTab === "experience" && (
        <ul className="space-y-6">
          {content.items.map((exp, index) => (
            <li key={index}>
              {"jobTitle" in exp && (
                <>
                  <p className="font-semibold">{exp.jobTitle}</p>
                  {"company" in exp && "duration" in exp && (
                    <p>{exp.company} — {exp.duration}</p>
                  )}
                  <ul className="list-disc list-inside text-sm mt-1">
                    {"responsibilities" in exp && exp.responsibilities.map((task, i) => (
                      <li key={i}>{task}</li>
                    ))}
                  </ul>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AboutContent;
