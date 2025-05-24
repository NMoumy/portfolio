import Link from "next/link";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";

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
        <div className="flex flex-row hover-underline-animation">
          <Link href={`/projects/${project.projectId}`} className="flex items-center gap-2 w-fit text-tertiary">
            <span className="">En savoir plus</span>
            <IoIosArrowRoundForward className="w-8 h-8 rotate-[-45deg]" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContainerProject;
