import { useState, useEffect } from "react";
import axios from "axios";
import Project from "./Project";

export default function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    axios
      .get(
        `${
          import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
        }/projects`
      )
      .then((res) => res.data)
      .then((data) => setProjects(data));
  }, []);

  return (
    <ul className="flex flex-col items-center">
      {projects.map((project) => (
        <li>
          <Project key={project.id} project={project} />
        </li>
      ))}
    </ul>
  );
}
