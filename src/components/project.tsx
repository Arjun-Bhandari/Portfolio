import { Container } from "./container";
import React from "react";

export const Projects = () => {
  const PROJECTS = [
    {
      title: "Shopit",
      description: "",
      link: "",
      image: "",
      githubRepo: "",
    },
    {
      title: "Code Reviewer",
      description: "",
      link: "",
      image: "",
      githubRepo: "",
    },
    {
      title: "Receip Tracking",
      description: "",
      link: "",
      image: "",
      githubRepo: "",
    },
    {
      title: "Judge 0 Editor",
      description: "",
      link: "",
      image: "",
      githubRepo: "",
    },
  ];

  return (
    <Container>
      <h1 className="text-2xl font-bold">Project</h1>
      <div className="grid grid-cols-2 gap-4 space-y-2">
        {PROJECTS.map((project) => {
          return <div>{project.title}</div>;
        })}
      </div>
    </Container>
  );
};
