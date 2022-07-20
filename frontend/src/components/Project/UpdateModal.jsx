import { useRef } from "react";
import { ProjectType, defaultProjectType } from "@prop-types/ProjectType";

export default function UpdateModal({ project }) {
  const nameRef = useRef();
  const descriptionRef = useRef();
  const githubRef = useRef();
  const demoRef = useRef();
  const startDateRef = useRef();
  const endDateRef = useRef();
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        const updatedProject = {
          name: nameRef.current.value,
          description: descriptionRef.current.value,
          github: githubRef.current.value,
          demo: demoRef.current.value,
          date_start: startDateRef.current.value,
          date_end: endDateRef.current.value,
        };

        fetch(
          `${
            import.meta.env.VITE_BACKEND_URL ?? "http://localhost:5000"
          }/projects/${project.id}`,
          {
            method: "PUT",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(updatedProject),
          }
        ).then((response) => {
          if (response.status === 204) {
            console.warn("Project updated successfully");
          } else {
            console.warn("Error updating project");
          }
        });
      }}
    >
      <label htmlFor="name">
        Nom du projet :
        <input
          ref={nameRef}
          type="text"
          id="name"
          placeholder={project.name}
          name="name"
          defaultValue={project.name}
        />
      </label>
      <label htmlFor="description">
        Description :
        <input
          type="text"
          name="description"
          id="description"
          ref={descriptionRef}
          placeholder={project.description}
          defaultValue={project.description}
        />
      </label>
      <label htmlFor="github">
        Github :
        <input
          type="text"
          name="github"
          id="github"
          ref={githubRef}
          placeholder={project.github}
          defaultValue={project.github}
        />
      </label>
      <label htmlFor="demo">
        Demo :
        <input
          type="text"
          name="demo"
          id="demo"
          ref={demoRef}
          placeholder={project.demo}
          defaultValue={project.demo}
        />
      </label>
      <label htmlFor="startDate">
        Début du projet :
        <input
          type="date"
          name="startDate"
          id="startDate"
          ref={startDateRef}
          value={project.date_start.slice(0, 10)}
        />
      </label>
      <label htmlFor="endDate">
        Fin du projet :
        <input
          type="date"
          name="endDate"
          id="endDate"
          ref={endDateRef}
          value={project.date_end.slice(0, 10)}
        />
      </label>
      <button type="submit">Enregistrer</button>
    </form>
  );
}

UpdateModal.propTypes = ProjectType;

UpdateModal.defaultProps = defaultProjectType;
