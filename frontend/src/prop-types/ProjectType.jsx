import propTypes from "prop-types";

export const ProjectType = propTypes.shape({
  project: propTypes.shape({
    id: propTypes.number.isRequired,
    name: propTypes.string.isRequired,
    github: propTypes.string.isRequired,
    demo: propTypes.string,
    description: propTypes.string,
    date_start: propTypes.string,
    date_end: propTypes.string,
  }).isRequired,
}).isRequired;

export const defaultProjectType = {
  project: {
    id: 0,
    name: "",
    github: "",
    demo: "",
    description: "",
    date_start: "",
    date_end: "",
  },
};
