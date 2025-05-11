"use client";

import { TabKeyService } from "@/lib/types";
import React, { useState } from "react";
import ServicesContent from "./ServicesContent";

const tabs: { key: TabKeyService; label: string }[] = [
  { key: "services", label: "Services proposés" },
  { key: "process", label: "Processus de travail" },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState<TabKeyService>("services");

  return (
    <section id="services" className="h-screen">
      <h2 className="section-title">
        Mes <span className="text-accent">services</span>
      </h2>
      <div className="flex flex-col flex-1 items-center w-full mt-10 gap-10">
        <div className="flex w-5/6 sm:w-3/4 lg:w-1/2 flex-row justify-center gap-5 items-center">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              className={`btn-tab w-2/3 max-w-[330px] h-[60px] lg:h-[75px] ${activeTab === tab.key ? "btn-tab-non-active" : "btn-tab-active"}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        <div className="h-full w-full">
          <ServicesContent activeTab={activeTab as TabKeyService} />
        </div>
      </div>
    </section>
  );
};

export default Services;
