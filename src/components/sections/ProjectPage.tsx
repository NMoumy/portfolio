import React from "react";

type Project = {
  name: string;
  description: string;
  technologies: string[];
  // Ajoute d'autres propriétés si besoin
};

const ProjectPage = ({ project }: { project: Project }) => (
  <section className="min-h-screen p-8">
    <h1 className="text-3xl font-bold mb-4">{project.name}</h1>
    <p className="mb-2">{project.description}</p>
    <p className="mb-2">
      <strong>Technologies :</strong> {project.technologies.join(", ")}
    </p>
  </section>
);

export default ProjectPage;