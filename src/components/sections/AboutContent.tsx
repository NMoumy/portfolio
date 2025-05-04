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
      <h3 className="text-xl font-bold mb-2">{content.title}</h3>
      <p>{content.description}</p>
    </div>
  );
};

export default AboutContent;
