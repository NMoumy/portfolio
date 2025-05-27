import Image from "next/image";
import Link from "next/link";
import React from "react";

type Project = {
  name: string;
  description: string;
  technologies: string[];
  projectId: string;
  imageUrl: string | null;
};

type ContainerProjectProps = {
  project: Project;
};

const ContainerProject = ({ project }: ContainerProjectProps) => {
  return (
    <div className="glassmorphic rounded-lg shadow-lg h-[400px] sm:h-[450px] w-full max-w-[400px] mx-auto overflow-hidden flex items-center flex-col p-2 sm:p-4">
      <div className="relative h-[45%] w-full rounded-lg overflow-hidden">
        <Image
          src={project.imageUrl || "/projects/defaultImage.png"}
          alt={project.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
      <div className="py-4 w-11/12 flex flex-col items-start justify-between h-[55%]">
        <h3 className="text-xl font-bold mb-2 self-center pb-2">{project.name}</h3>
        <p className="text-sm mb-4">{project.description}</p>
        <p className="text-xs mb-4">
          <strong>Technologies :</strong> {project.technologies.slice(0, 3).join(", ")}
        </p>
        <div className="hover-underline-animation bg-primary rounded-lg align-end overflow-hidden">
          <Link href={`/projects/${project.projectId}`} className="flex items-center gap-2 w-fit text-tertiary p-3">
            En savoir plus
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContainerProject;
