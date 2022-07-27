import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import "@styles/nav.scss";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const handleClickHamburger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="nav-container">
      <input
        type="checkbox"
        name="hamburger_check"
        id="hamburger_check"
        checked={isOpen}
        onChange={handleClickHamburger}
      />
      <label htmlFor="hamburger_check">
        {isOpen && <ImCross />}
        {!isOpen && <GiHamburgerMenu />}
      </label>
      <nav className="hamburger_nav">
        <div id="first_element">
          <Link
            to="/"
            className={pathname === "/" ? "link_focus" : ""}
            onClick={handleClickHamburger}
          >
            Home
          </Link>
        </div>
        <div>
          <Link
            to="/skills"
            className={pathname === "/skills" ? "link_focus" : ""}
            onClick={handleClickHamburger}
          >
            My Skills
          </Link>
        </div>
        <div>
          <Link
            to="/skills"
            className={pathname === "/skills" ? "link_focus" : ""}
            onClick={handleClickHamburger}
          >
            Experiencia Laboral
          </Link>
        </div>
        <div>
          <Link
            to="/skills"
            className={pathname === "/skills" ? "link_focus" : ""}
            onClick={handleClickHamburger}
          >
            Proyectos
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
