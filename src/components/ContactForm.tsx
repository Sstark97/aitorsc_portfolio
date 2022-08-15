import "@styles/components/contact_form.scss";

const ContactForm = () => {
  return (
    <form className="form_container">
      <fieldset>
        <div className="edit_input">
          <input type="text" id="name" />
          <label htmlFor="name">Nombre</label>
        </div>

        <div className="edit_input">
        <input type="text" id="email" />
          <label htmlFor="email">Email</label>
        </div>

        <div className="edit_input">
        <input type="text" id="subject" />
          <label htmlFor="subject">Asunto</label>
        </div>

        <div className="textarea_input">
        <textarea id="message" />
          <label htmlFor="message">Mensaje</label>
        </div>

        <div className="button">
            <button type="submit">Enviar</button>
        </div>
        
      </fieldset>
    </form>
  );
};

export default ContactForm;
