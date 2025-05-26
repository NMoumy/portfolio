import Image from "next/image";
import React from "react";
import BackButton from "../BackButton";

type Project = {
  name: string;
  description: string;
  technologies: string[];
  content: string;
  imageUrl: string;
  date: string;
  author: string;
  // Ajoute d'autres propriétés si besoin
};

const ProjectPage = ({ project }: { project: Project }) => (
  <section className="min-h-screen no-max-h p-4 lg:p-8 flex-center w-full">
    <div className="glassmorphic w-full lg:w-3/4 max-w-[1200px] h-10/12 lg:h-11/12 py-10 px-5 sm:px-10 lg:px-30 rounded-lg flex flex-col items-center gap-4">
      <h2 className="font-bold text-center">{project.name}</h2>
      <div className="flex flex-row justify-between items-center gap-1 w-full">
        <BackButton />
        <p className="text-white ">
           {project.date}
        </p>
      </div>
      <div className="relative w-full aspect-video rounded-lg overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw"
        />
      </div>
      <div className="w-full">
        <div className="flex flex-col lg:flex-row-reverse justify-between gap-1">
          <p className="mb-2 text-white">
            <strong>Auteur :</strong> {project.author}
          </p>
          <p className="mb-2 text-white">
            <strong>Technologies :</strong> {project.technologies.join(", ")}
          </p>
        </div>
        <p className="mb-2">{project.content}</p>
      </div>
    </div>
  </section>
);
export default ProjectPage;
