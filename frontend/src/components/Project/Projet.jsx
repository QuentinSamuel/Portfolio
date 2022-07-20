import { ProjetType, defaultProjetType } from "@prop-types/ProjetType";

export default function Projet({ projet }) {
  return (
    <div className="projet">
      <div className="projet-name">{projet.name}</div>
      <div className="projet-description">{projet.description}</div>
      <div className="projet-date">
        {projet.date_start} - {projet.date_end}
      </div>
      <div className="projet-links">
        <a href={projet.github}>Github</a>
        <a href={projet.demo}>Demo</a>
      </div>
    </div>
  );
}

Projet.propTypes = ProjetType;

Projet.defaultProps = defaultProjetType;
