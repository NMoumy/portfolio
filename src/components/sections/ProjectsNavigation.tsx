import React from "react";

type ProjectsNavigationProps = {
  onPrev: () => void;
  onNext: () => void;
};

const ProjectsNavigation = ({ onPrev, onNext }: ProjectsNavigationProps) => {
  return (
    <div className="flex justify-center gap-4">
      <button
        onClick={onPrev}
        className="bg-primary text-white px-4 py-2 rounded hover:bg-accent"
      >
        Précédent
      </button>
      <button
        onClick={onNext}
        className="bg-primary text-white px-4 py-2 rounded hover:bg-accent"
      >
        Suivant
      </button>
    </div>
  );
};

export default ProjectsNavigation;