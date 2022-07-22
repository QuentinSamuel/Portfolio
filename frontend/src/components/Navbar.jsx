import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="flex justify-end  space-x-10 border-b-2 border-gray-900 p-4 pr-10  ">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/projets">Projets</NavLink>
      <NavLink to="/competence">Compétence</NavLink>
    </nav>
  );
}
