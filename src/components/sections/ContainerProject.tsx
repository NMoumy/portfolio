import React from "react";

type Project = {
  name: string;
  description: string;
  technologies: string[];
  repository: string;
  liveDemo?: string;
};

type ContainerProjectProps = {
  project: Project;
};

const ContainerProject = ({ project }: ContainerProjectProps) => {
  return (
    <div className="glassmorphic rounded-lg shadow-lg h-[450px] w-full overflow-hidden">
      <div className="h-1/2 w-full bg-gray-200"></div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2">{project.name}</h3>
        <p className="text-sm mb-4">{project.description}</p>
        <p className="text-xs mb-4">
          <strong>Technologies :</strong> {project.technologies.join(", ")}
        </p>
        <a href={project.repository} className="text-accent underline" target="_blank" rel="noopener noreferrer">
          Voir le code
        </a>
        {project.liveDemo && (
          <a href={project.liveDemo} className="text-accent underline ml-4" target="_blank">
            Voir la démo
          </a>
        )}
      </div>
    </div>
  );
};

export default ContainerProject;
