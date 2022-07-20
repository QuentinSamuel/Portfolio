import { ProjectType, defaultProjectType } from "@prop-types/ProjectType";

export default function ProjectDesktop({ project }) {
  return (
    <>
      <figure className="border">
        <img src="https://picsum.photos/250/250" alt="project" />
        <figcaption className="text-center">{project.name}</figcaption>
      </figure>
      <p>{project.description}</p>
      <div>
        {project.date_start} - {project.date_end}
      </div>
      <a href={project.github}>Github</a>
      <a href={project.demo}>Demo</a>
    </>
  );
}

ProjectDesktop.propTypes = ProjectType;

ProjectDesktop.defaultProps = defaultProjectType;
