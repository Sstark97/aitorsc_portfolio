import Presentation from "./Presentation";
import ContactForm from "@components/ContactForm";
import writter from "@assets/writter.svg";
import "@styles/containers/contact.scss";

const ContactContainer = () => {
  return (
    <section className="contact_container">
      <Presentation classContainer="contact_header">
        {[<p className="contact__line">Contacto</p>]}
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
    </section>
  );
};

export default ContactContainer;
