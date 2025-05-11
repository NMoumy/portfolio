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
    <div className="services-div glassmorphic">
      <h3>{content.title}</h3>
    </div>
  );

  // Cette fonction rend la section "Process" de la page.
  const renderProcessSection = () => (
    <div className="services-div glassmorphic">
      <h3>{content.title}</h3>
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
