import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import "@styles/nav.scss";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  console.log(isOpen);

  const handleClickHamburger = () => {
    console.log(isOpen);
    setIsOpen(!isOpen);
  }

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
      <nav>
        <div>Nav</div>
      </nav>
    </div>
  );
};

export default Nav;
