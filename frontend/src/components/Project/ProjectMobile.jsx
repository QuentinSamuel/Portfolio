import { ProjectType, defaultProjectType } from "@prop-types/ProjectType";
import Modal from "@components/Modal/Modal";
import UpdateModal from "./UpdateModal";

export default function ProjectMobile({ project, admin }) {
  return (
    <div>
      {admin ? (
        <Modal>
          <Modal.Trigger>
            <figure className="border">
              <img src="https://picsum.photos/250/250" alt="project" />
              <figcaption className="text-center">{project.name}</figcaption>
            </figure>
          </Modal.Trigger>
          <Modal.Window>
            <UpdateModal project={project} />
          </Modal.Window>
        </Modal>
      ) : (
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
      )}
    </div>
  );
}

ProjectMobile.propTypes = ProjectType;

ProjectMobile.defaultProps = defaultProjectType;
