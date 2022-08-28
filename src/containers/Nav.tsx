import { useState } from "react";
import { ReactComponent as HamburgerMenu } from "@assets/hamburger.svg";
import { ReactComponent as Cross } from "@assets/cross.svg";
import NavBar from "@components/NavBar";
import DesktopNavBar from "@components/DesktopNavBar";
import "@styles/containers/nav.scss";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClickHamburger = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className={isOpen ? "nav-container nav-color" : "nav-container"}>
      <label htmlFor="hamburger_check">
        {isOpen && <Cross />}
        {!isOpen && <HamburgerMenu />}
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

export default Nav;
