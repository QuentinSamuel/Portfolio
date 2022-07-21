import { useState, useEffect } from "react";
import propTypes from "prop-types";
import axios from "axios";
import Modal from "@components/Modal/Modal";
import ProjectMobile from "./ProjectMobile";
import ProjectDesktop from "./ProjectDesktop";
import ProjectModal from "./ProjectModal";

export default function ProjectList({ admin }) {
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

  useEffect(() => {
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

    return () => {
      window.removeEventListener("resize", resize, false);
    };
  }, []);
  const ProjectComponent = allData ? ProjectDesktop : ProjectMobile;

  const deleteProject = (id) => {
    fetch(
      `${
        import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
      }/projects/${id}`,
      {
        method: "DELETE",
      }
    )
      .then((response) => {
        if (response.status === 204) {
          console.warn("Project deleted successfully");
        } else {
          console.warn("Error deleting project");
        }
      })
      .then(() => {
        setProjects(projects.filter((project) => project.id !== id));
      });
  };
  return (
    <div>
      {admin ? (
        <>
          <Modal>
            <Modal.Trigger>
              <p> Ajouter un projet </p>
            </Modal.Trigger>
            <Modal.Window>
              <ProjectModal />
            </Modal.Window>
          </Modal>
          <ul className="flex flex-col items-center">
            {projects.map((project) => (
              <li className="m-2" key={project.id}>
                <ProjectComponent project={project} admin />
                <button type="button" onClick={() => deleteProject(project.id)}>
                  Supprimer
                </button>
              </li>
            ))}
          </ul>
        </>
      ) : (
        <ul className="flex flex-col items-center">
          {projects.map((project) => (
            <li className="m-2" key={project.id}>
              <ProjectComponent project={project} />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

ProjectList.propTypes = {
  admin: propTypes.bool,
};

ProjectList.defaultProps = {
  admin: false,
};
