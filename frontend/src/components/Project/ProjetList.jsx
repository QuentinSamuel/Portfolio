import Projet from "./Projet";

const projets = [
  {
    id: 1,
    name: "Projet 1",
    github: "https://github.com/QuentinSamuel/Portfolio",
    demo: "https://quentinsamuel.github.io/Portfolio/",
    description: "Projet 1",
    date_start: "2020-01-01",
    date_end: "2020-03-01",
  },
  {
    id: 2,
    name: "Projet 2",
    github: "https://github.com/QuentinSamuel/Wild-Post",
    demo: "https://quentinsamuel.github.io/Wild-Post/",
    description: "Projet 2",
    date_start: "2020-01-01",
    date_end: "2020-03-01",
  },
];

export default function ProjetList() {
  return (
    <div className="projet-list">
      {projets.map((projet) => (
        <Projet key={projet.id} projet={projet} />
      ))}
    </div>
  );
}
