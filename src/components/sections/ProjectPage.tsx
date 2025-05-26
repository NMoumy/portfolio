import Image from "next/image";
import React from "react";
import BackButton from "../BackButton";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

type Project = {
  name: string;
  description: string;
  technologies: string[];
  content: string;
  imageUrl: string;
  date: string;
  author: string;
  githubUrl?: string;
  projectUrl?: string;
  // Ajoute d'autres propriétés si besoin
};

const ProjectPage = ({ project }: { project: Project }) => (
  <section className="min-h-screen no-max-h p-4 lg:p-8 flex-center w-full">
    <div className="my-14 glassmorphic w-full lg:w-3/4 max-w-[1200px] h-10/12 lg:h-11/12 py-10 px-5 sm:px-10 lg:px-30 rounded-lg flex flex-col items-center gap-4">
      <h2 className="font-bold text-center">{project.name}</h2>
      <div className="flex flex-row justify-between items-center gap-1 w-full">
        <BackButton />
        <div className="flex items-center gap-4">
          <p className="text-white ml-2">{project.date}</p>
        </div>
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
        <p className="my-2">{project.content}</p>
      </div>
      <div className="flex flex-row gap-4">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-accent transition-colors"
            title="Voir sur GitHub"
          >
            <FaGithub size={24} />
          </a>
        )}
        {project.projectUrl && (
          <a
            href={project.projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-tertiary transition-colors"
            title="Voir le projet en ligne"
          >
            <FiExternalLink size={24} />
          </a>
        )}
      </div>
    </div>
  </section>
);
export default ProjectPage;
