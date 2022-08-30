import { useNavigate } from "react-router-dom";
import { ReactComponent as NotFoundError } from "@assets/404.svg";
import { ReactComponent as Meteor } from "@assets/meteor.svg";
import { ReactComponent as Astronaut } from "@assets/astronaut.svg";
import { ReactComponent as Spaceship } from "@assets/spaceship.svg";
import "@styles/not_found.scss";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="mars"></div>
      <NotFoundError
        className="logo-404"
      />
      <Meteor
        className="meteor"
      />
      <p className="title">Oh no!!</p>
      <p className="subtitle">
        You’re either misspelling the URL <br /> or requesting a page that's no
        longer here.
      </p>
      <div className="align">
        <a className="btn-back" onClick={() => navigate(-1)}>
          Back to previous page
        </a>
      </div>
      <Astronaut
        className="astronaut"
      />
      <Spaceship
        className="spaceship"
      />
    </>
  );
};

export default NotFound;
