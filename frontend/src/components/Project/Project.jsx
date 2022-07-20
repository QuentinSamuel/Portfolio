import { ProjectType, defaultProjectType } from "@prop-types/ProjectType";
import Modal from "@components/Modal/Modal";

export default function Project({ project }) {
  return (
    <Modal>
      <Modal.Trigger>
        <figure className="border">
          <img src="https://picsum.photos/250/250" alt="project" />
          <figcaption className="text-center">{project.name}</figcaption>
        </figure>
      </Modal.Trigger>
      <Modal.Window>
        <p>{project.description}</p>
        <div>
          {project.date_start} - {project.date_end}
        </div>
        <a href={project.github}>Github</a>
        <a href={project.demo}>Demo</a>
      </Modal.Window>
    </Modal>
  );
}

Project.propTypes = ProjectType;

Project.defaultProps = defaultProjectType;
