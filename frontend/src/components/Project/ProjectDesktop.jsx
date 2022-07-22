import { ProjectType, defaultProjectType } from "@prop-types/ProjectType";
import UpdateModal from "./UpdateModal";

export default function ProjectDesktop({ project, admin }) {
  const { technos } = project;
  return (
    <div>
      {admin ? (
        <>
          <img src="https://picsum.photos/250/250" alt="project" />
          <UpdateModal project={project} />
        </>
      ) : (
        <div className="flex flex-col justify-center items-center border border-gray-900 shadow-md p-4 min-w-full">
          <p className="text-center text-3xl">{project.name}</p>
          <p className="m-2 text-center ">{project.description}</p>
          <div>
            <p className="text-center font-bold">
              {project.date_start.slice(0, 10)}
            </p>
            <p className="text-center ">-</p>
            <p className="text-center font-bold">
              {project.date_end.slice(0, 10)}
            </p>
          </div>
          <ul className="flex justify-center">
            {technos.map((techno) => (
              <li
                className="m-2 flex flex-col items-center justify-center flex-wrap"
                key={techno.id}
              >
                <img
                  src="https://picsum.photos/50/50?random=1"
                  alt="techno"
                  className="w-10"
                />
                {techno.name}
              </li>
            ))}
          </ul>
          <div className="flex space-x-10 m-2">
            <a
              className="border border-gray-900 bg-black text-white p-2 rounded-xl"
              href={project.github}
            >
              Github
            </a>
            <a
              className="border border-gray-900 bg-black text-white p-2 rounded-xl"
              href={project.demo}
            >
              Demo
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

ProjectDesktop.propTypes = ProjectType;

ProjectDesktop.defaultProps = defaultProjectType;
