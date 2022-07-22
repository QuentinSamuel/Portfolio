import { useRef } from "react";
import { ProjectType, defaultProjectType } from "@prop-types/ProjectType";

export default function UpdateModal({ project, allTechnos, toggleTechno }) {
  const { technos } = project;
  const nameRef = useRef();
  const descriptionRef = useRef();
  const githubRef = useRef();
  const demoRef = useRef();
  const startDateRef = useRef();
  const endDateRef = useRef();

  const handleChange = (e) => {
    const input = e.target;
    toggleTechno(input.name);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedProject = {
      name: nameRef.current.value,
      description: descriptionRef.current.value,
      github: githubRef.current.value,
      demo: demoRef.current.value,
      date_start: startDateRef.current.value,
      date_end: endDateRef.current.value,
      technos,
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
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name" className="flex flex-col items-center">
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
      <label htmlFor="description" className="flex flex-col items-center">
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
      <label htmlFor="github" className="flex flex-col items-center">
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
      <label htmlFor="demo" className="flex flex-col items-center">
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
      <label htmlFor="startDate" className="flex flex-col items-center">
        Début du projet :
        <input
          type="date"
          name="startDate"
          id="startDate"
          ref={startDateRef}
          value={project.date_start.slice(0, 10)}
        />
      </label>
      <label htmlFor="endDate" className="flex flex-col items-center">
        Fin du projet :
        <input
          type="date"
          name="endDate"
          id="endDate"
          ref={endDateRef}
          value={project.date_end.slice(0, 10)}
        />
      </label>
      {allTechnos.map((techno) => (
        <label key={techno.id} htmlFor={techno.name} className="m-2">
          {techno.name}
          <input
            type="checkbox"
            name={techno.name}
            id={techno.name}
            onChange={handleChange}
            checked={technos.some((t) => t.id === techno.id)}
          />
        </label>
      ))}
      <button
        type="submit"
        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
      >
        Enregistrer
      </button>
    </form>
  );
}

UpdateModal.propTypes = ProjectType;

UpdateModal.defaultProps = defaultProjectType;
