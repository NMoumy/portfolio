import projectData from "../../../lib/data/projectData.json";
import ProjectDetails from "@/components/sections/ProjectPage";

export default async function Page({ params }: { params: Promise<{ projectId: string }> }) {
  const { projectId } = await params;
  const project = projectData.find((p) => p.projectId === projectId);

  if (!project) {
    return <h1>Projet introuvable</h1>;
  }

  return <ProjectDetails project={project} />;
}