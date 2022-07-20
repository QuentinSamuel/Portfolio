import Project from "./Project";

const projects = [
  {
    id: 1,
    name: "Project 1",
    github: "https://github.com/QuentinSamuel/Portfolio",
    demo: "https://quentinsamuel.github.io/Portfolio/",
    description: "Project 1",
    date_start: "2020-01-01",
    date_end: "2020-03-01",
  },
  {
    id: 2,
    name: "Project 2",
    github: "https://github.com/QuentinSamuel/Wild-Post",
    demo: "https://quentinsamuel.github.io/Wild-Post/",
    description: "Project 2",
    date_start: "2020-01-01",
    date_end: "2020-03-01",
  },
];

export default function ProjectList() {
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
