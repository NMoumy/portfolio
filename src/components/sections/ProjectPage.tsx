import React from "react";

type Project = {
  name: string;
  description: string;
  technologies: string[];
  // Ajoute d'autres propriétés si besoin
};

const ProjectPage = ({ project }: { project: Project }) => (
  <section className="h-screen p-8 flex-center w-full">
    <div className="glassmorphic w-3/4 lg:w-[900px] h-3/4 p-10 rounded-lg">
      <h2 className=" font-bold mb-4 text-center">{project.name}</h2>
      <p className="mb-2">{project.description}</p>
      <p className="mb-2">
        <strong>Technologies :</strong> {project.technologies.join(", ")}
      </p>
    </div>
  </section>
);
export default ProjectPage;
