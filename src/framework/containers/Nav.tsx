import { useState } from "react";
import { ReactSVG } from "react-svg";
import HamburgerMenu from "@assets/hamburger.svg";
import Cross from "@assets/cross.svg";
import NavBar from "@f-components/NavBar";
import DesktopNavBar from "@f-components/DesktopNavBar";
import "@styles/containers/nav.scss";

export default function Nav () {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickHamburger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className={isOpen ? "nav-container nav-color" : "nav-container"}>
      <label htmlFor="hamburger_check">
        {isOpen && <ReactSVG src={Cross} />}
        {!isOpen && <ReactSVG src={HamburgerMenu} />}
      </label>
      <input
        type="checkbox"
        id="hamburger_check"
        checked={isOpen}
        onChange={handleClickHamburger}
        aria-label="hamburger menu"
      />
      <NavBar handleClickHamburger={handleClickHamburger} />
      <DesktopNavBar />
    </section>
  );
};

