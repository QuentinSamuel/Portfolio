import { useState, useEffect } from "react";
import axios from "axios";
import ProjectMobile from "./ProjectMobile";
import ProjectDesktop from "./ProjectDesktop";

export default function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [allData, setAllData] = useState(false);

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

  function resize() {
    if ("matchMedia" in window) {
      if (window.matchMedia("(min-width: 768px)").matches) {
        setAllData(true);
      } else {
        setAllData(false);
      }
    }
  }
  window.addEventListener("resize", resize, false);

  return (
    <ul className="flex flex-col items-center">
      {projects.map((project) => (
        <li className="m-2">
          {allData ? (
            <ProjectDesktop key={project.id} project={project} />
          ) : (
            <ProjectMobile key={project.id} project={project} />
          )}
        </li>
      ))}
    </ul>
  );
}
