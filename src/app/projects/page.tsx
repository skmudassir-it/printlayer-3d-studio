import type { Metadata } from "next";
import ProjectsClient from "./ProjectsClient";

export const metadata: Metadata = {
  title: "Projects — PrintLayer 3D Studio",
  description: "Explore our portfolio of 3D printing projects — prototypes, figurines, architectural models, cosplay props, and industrial parts.",
};

export default function ProjectsPage() {
  return <ProjectsClient />;
}
