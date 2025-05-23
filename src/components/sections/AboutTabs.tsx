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
    <div className="w-7xl flex flex-col lg:flex-row">
      <div className="flex flex-row lg:pb-0 pb-10 w-full lg:flex-col lg:w-1/4 gap-2 lg:gap-7 flex-wrap md:flex-nowrap lg:h-2/3">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            className={`flex-1/3 lg:flex-1 btn-tab ${activeTab === tab.key ? "btn-tab-non-active" : "btn-tab-active"}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="h-full pl-0 lg:pl-15 flex-1">
        <AboutContent activeTab={activeTab as TabKey} />
      </div>
    </div>
  );
};

export default AboutTabs;
