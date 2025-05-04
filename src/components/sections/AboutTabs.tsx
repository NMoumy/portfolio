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
    <div className="w-7xl flex flex-col lg:flex-row px-5">
      <div className="flex flex-row py-1 lg:pb-0 pb-10 w-full lg:flex-col lg:w-1/4 gap-2 lg:gap-7 h-full px-2">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`btn-tab ${activeTab === tab.key ? "btn-tab-non-active" : "btn-tab-active"}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="h-full pl-5 lg:pl-15 flex-1">
        <AboutContent activeTab={activeTab as TabKey} />
      </div>
    </div>
  );
};

export default AboutTabs;
