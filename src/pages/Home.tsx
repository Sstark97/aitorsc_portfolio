import { Helmet } from "react-helmet";
import HomeContainer from "@containers/HomeContainer";

const Home = () => (
  <>
      {""}
    <Helmet>
      <title>ASC | Full Stack Developer</title>
      <meta name="title" content="ASC | Full Stack Developer" />
      <meta
        name="description"
        content="Soy Desarrollador Web Full-Stack, con el stack MERN aunque también tengo conocimientos de Angular, al que le gusta actualizarse constantemente y desarrollar mi mayor pasión, programar webapps o cualquier tipo de software."
      />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://ascinfo.netlify.app/" />
      <meta property="og:title" content="ASC | Full Stack Developer" />
      <meta
        property="og:description"
        content="Soy Desarrollador Web Full-Stack, con el stack MERN aunque también tengo conocimientos de Angular, al que le gusta actualizarse constantemente y desarrollar mi mayor pasión, programar webapps o cualquier tipo de software."
      />
      <meta property="og:image" content="../assets/og_img.jpeg" />

      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://ascinfo.netlify.app/" />
      <meta property="twitter:title" content="ASC | Full Stack Developer" />
      <meta
        property="twitter:description"
        content="Soy Desarrollador Web Full-Stack, con el stack MERN aunque también tengo conocimientos de Angular, al que le gusta actualizarse constantemente y desarrollar mi mayor pasión, programar webapps o cualquier tipo de software."
      />
      <meta property="twitter:image" content="../assets/og_img.jpeg" />
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
