import projectData from "../../../lib/data/projectData.json";

type Props = {
  params: { projectId: string };
};

const Page = ({ params }: Props) => {
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
};

export default Page;