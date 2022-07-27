import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import NavBar from "@components/NavBar";
import DesktopNavBar from "@components/DesktopNavBar";
import "@styles/nav.scss";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

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
      <NavBar handleClickHamburger={handleClickHamburger}/>
      <DesktopNavBar />
    </div>
  );
};

export default Nav;
