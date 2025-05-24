import { TabKeyService } from "@/lib/types";
import React from "react";
import servicesData from "../../lib/data/servicesData.json";

type ServicesContentProps = {
  activeTab: TabKeyService;
};

const ServicesContent = ({ activeTab }: ServicesContentProps) => {
  const content = servicesData[activeTab];

  // Cette fonction rend la section "Services" de la page.
  const renderServicesSection = () => (
  <div className="services-div glassmorphic p-6 rounded-lg">
    <h3 className="text-2xl font-bold mb-4">{content.title}</h3>
    {"items" in content && Array.isArray(content.items) && (
      <div className="grid md:grid-cols-2 gap-6">
        {content.items.map((step, index) => (
          <div key={index}>
            <h4 className="font-semibold text-white">{step.title}</h4>
            <p className="text-sm text-gray-400">{step.content}</p>
          </div>
        ))}
      </div>
    )}
  </div>
  );

  // Cette fonction rend la section "Process" de la page.
const renderProcessSection = () => (
  <div className="services-div glassmorphic p-6 rounded-lg">
    <h3 className="text-2xl font-bold mb-4">{content.title}</h3>
    {"steps" in content && Array.isArray(content.steps) && (
      <div className="grid md:grid-cols-2 gap-6">
        {content.steps.map((step, index) => (
          <div key={index}>
            <h4 className="font-semibold text-white">{step.title}</h4>
            <p className="text-sm text-gray-400">{step.content}</p>
          </div>
        ))}
      </div>
    )}
  </div>
);



  return (
    <div className="w-full h-full flex justify-center items-center">
      {activeTab === "services" && renderServicesSection()}
      {activeTab === "process" && renderProcessSection()}
    </div>
  );
};

export default ServicesContent;
