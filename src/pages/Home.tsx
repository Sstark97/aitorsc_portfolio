import { Helmet } from "react-helmet";
import HomeContainer from "@containers/HomeContainer";

const Home = () => (
  <>
    <Helmet>
      <title>ASC | Full Stack Developer</title>
      <meta name="title" content="ASC | Full Stack Developer" />
      <meta
        name="description"
        content="Soy Desarrollador Web Full-Stack, con el stack MERN aunque también tengo conocimientos de Angular, al que le gusta actualizarse constantemente y desarrollar mi mayor pasión, programar webapps o cualquier tipo de software."
      />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta
        name="msapplication-TileImage"
        content="../assets/favicon/ms-icon-144x144.png"
      />
      <meta name="theme-color" content="#ffffff" />
    </Helmet>
    <HomeContainer />
  </>
);

export default Home;
