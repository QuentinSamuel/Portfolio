import { ProjetType, defaultProjetType } from "@prop-types/ProjetType";
import Modal from "@components/Modal/Modal";

export default function Projet({ projet }) {
  return (
    <Modal>
      <Modal.Trigger>
        <figure className="border">
          <img src="https://picsum.photos/250/250" alt="projet" />
          <figcaption className="text-center">{projet.name}</figcaption>
        </figure>
      </Modal.Trigger>
      <Modal.Window>
        <p>{projet.description}</p>
        <div>
          {projet.date_start} - {projet.date_end}
        </div>
        <a href={projet.github}>Github</a>
        <a href={projet.demo}>Demo</a>
      </Modal.Window>
    </Modal>
  );
}

Projet.propTypes = ProjetType;

Projet.defaultProps = defaultProjetType;
