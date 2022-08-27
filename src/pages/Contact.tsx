import { Helmet } from "react-helmet";
import PortfolioContainer from "../containers/PortfolioContainer";
import Presentation from "@containers/Presentation";
import ContactForm from "@components/ContactForm";
import writter from "@assets/writter.svg";

const Contact = () => (
  <>
    <Helmet>
      <title>ASC | Contacto</title>
      <meta name="title" content="ASC | Contacto" />
      <meta
        name="description"
        content="Página de contacto para solicitar información."
      />
    </Helmet>
    <PortfolioContainer classContainer="contact_container" animationKey="contact" animationTime={2000}>
      <Presentation classContainer="contact_header">
        {[<p className="contact__line" key="contact_1">Contacto</p>]}
      </Presentation>

      <article className="contact_form_container">
        <div>
          <p>
            Estoy interesado en introducirme de nuevo en el mundo laboral, o
            proyectos freelance. Sin embargo, si tiene otra solicitud o
            pregunta, no dude en contactar conmigo.
          </p>
          <img src={writter} alt="writter" />
        </div>
        <ContactForm />
      </article>
    </PortfolioContainer>
  </>
);

export default Contact;
