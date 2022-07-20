import { ProjetType, defaultProjetType } from "@prop-types/ProjetType";

export default function Projet({ projet }) {
  return (
    <>
      <figure className="border">
        <img src="https://picsum.photos/250/250" alt="projet" />
        <figcaption className="text-center">{projet.name}</figcaption>
      </figure>
      <div className="projet-description">{projet.description}</div>
      <div className="projet-date">
        {projet.date_start} - {projet.date_end}
      </div>
      <div className="projet-links">
        <a href={projet.github}>Github</a>
        <a href={projet.demo}>Demo</a>
      </div>
    </>
  );
}

Projet.propTypes = ProjetType;

Projet.defaultProps = defaultProjetType;
