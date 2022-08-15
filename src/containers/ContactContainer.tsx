import ContactPresentation from "@components/ContactPresentation";
import ContactForm from "@components/ContactForm";
import writter from "@assets/writter.svg";
import "@styles/containers/contact.scss";

const ContactContainer = () => {
  return (
    <div className="contact_container">
      <ContactPresentation />

      <div className="contact_form_container">
        <div>
          <p>
            Estoy interesado en introducirme de nuevo en el mundo laboral, o
            proyectos freelance. Sin embargo, si tiene otra solicitud o
            pregunta, no dude en contactar conmigo.
          </p>
          <img src={writter} alt="writter" />
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default ContactContainer;
