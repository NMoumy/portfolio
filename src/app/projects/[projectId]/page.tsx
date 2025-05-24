import projectData from "../../../lib/data/projectData.json";

export default function Page({ params }: { params: { projectId: string } }) {
  const project = projectData.find(
    (p) => p.projectId === params.projectId
  );

  if (!project) {
    return <h1>Projet introuvable</h1>;
  }

  return (
    <section className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-4">{project.name}</h1>
      <p className="mb-2">{project.description}</p>
      <p className="mb-2">
        <strong>Technologies :</strong> {project.technologies.join(", ")}
      </p>
    </section>
  );
}