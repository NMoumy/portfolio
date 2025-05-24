import Link from "next/link";
import React from "react";

type Project = {
  name: string;
  description: string;
  technologies: string[];
  projectId: string;
};

type ContainerProjectProps = {
  project: Project;
};

const ContainerProject = ({ project }: ContainerProjectProps) => {
  return (
    <div className="glassmorphic rounded-lg shadow-lg h-[450px] w-full overflow-hidden">
      <div className="h-1/2 w-full bg-gray-200"></div>
      <div className="p-4">
        <h3 className="text-xl font-bold mb-2 text-center pb-2">{project.name}</h3>
        <p className="text-sm mb-4">{project.description}</p>
        <p className="text-xs mb-4">
          <strong>Technologies :</strong> {project.technologies.join(", ")}
        </p>
        <div className="hover-underline-animation bg-primary rounded-lg">
          <Link href={`/projects/${project.projectId}`} className="flex items-center gap-2 w-fit text-tertiary p-3">
            En savoir plus
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContainerProject;
