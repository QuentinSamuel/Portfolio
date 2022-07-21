import { useRef } from "react";

export default function ProjectModal() {
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
        const project = {
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
          }/projects`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(project),
          }
        ).then((response) => {
          if (response.status === 201) {
            console.warn("Project created successfully");
          } else {
            console.warn("Error creating project");
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
          name="name"
          placeholder="Potential Octo Umbrella"
        />
      </label>
      <label htmlFor="description">
        Description :
        <input
          type="text"
          name="description"
          id="description"
          ref={descriptionRef}
          placeholder="A cool project"
        />
      </label>
      <label htmlFor="github">
        URL Github :
        <input
          type="text"
          name="github"
          id="github"
          ref={githubRef}
          placeholder="www.github.com"
        />
      </label>
      <label htmlFor="demo">
        URL Démo :
        <input
          type="text"
          name="demo"
          id="demo"
          ref={demoRef}
          placeholder="www.démo.com"
        />
      </label>
      <label htmlFor="startDate">
        Début du projet :
        <input type="date" name="starDate" id="startDate" ref={startDateRef} />
      </label>
      <label htmlFor="endDate">
        Fin du projet :
        <input type="date" name="endDate" id="endDate" ref={endDateRef} />
      </label>
      <button type="submit">Ajouter</button>
    </form>
  );
}
