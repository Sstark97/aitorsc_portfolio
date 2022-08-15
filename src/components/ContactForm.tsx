import { useRef } from "react";
import { ContactFormInterface, ContactFormElement } from "../types";
import "@styles/components/contact_form.scss";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const handleSubmit = (e: any) => {
    e.preventDefault();
    let formResponse: ContactFormInterface = {} as ContactFormInterface;

    if (formRef.current !== null && formRef.current !== undefined) {
      const formElements: HTMLFormControlsCollection = formRef.current.elements;

      [...formElements].map((element: ContactFormElement) => {
        if (element.id && element.value) {
          formResponse[element.id as keyof typeof formResponse] = element.value;
        }
      });

      console.log(formResponse);
    }
  };

  return (
    <form className="form_container" ref={formRef} onSubmit={handleSubmit}>
      <fieldset>
        <div className="edit_input">
          <input type="text" id="name" required/>
          <label htmlFor="name">Nombre</label>
        </div>

        <div className="edit_input">
          <input type="email" id="email" required/>
          <label htmlFor="email">Email</label>
        </div>

        <div className="edit_input">
          <input type="text" id="subject" required/>
          <label htmlFor="subject">Asunto</label>
        </div>

        <div className="textarea_input">
          <textarea id="message" required/>
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
