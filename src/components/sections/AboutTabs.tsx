"use client";

import { TabKey } from "@/lib/types";
import { useState } from "react";
import AboutContent from "./AboutContent";

const tabs: { key: TabKey; label: string }[] = [
  { key: "about", label: "À propos" },
  { key: "experience", label: "Expérience" },
  { key: "education", label: "Éducation" },
  { key: "skills", label: "Compétences" },
];

const AboutTabs = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("about");

  return (
    <div className="display-about w-7xl flex">
      <div className="flex flex-col gap-7 h-full w-1/4 pX-2">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`${activeTab === tab.key ? "btn-tab-active" : "btn-tab"}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="h-full pl-15 flex-1">
        <AboutContent activeTab={activeTab as TabKey} />
      </div>
    </div>
  );
};

export default AboutTabs;
