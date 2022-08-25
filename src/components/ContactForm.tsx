import { useRef, useState, useEffect } from "react";
import { ContactFormInterface, ContactFormElement } from "../types";
import api from "../api";
import "@styles/components/contact_form.scss";

const ContactForm = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [error, setError] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  }, [error, success]);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    let formResponse: ContactFormInterface = {} as ContactFormInterface;

    if (formRef.current !== null && formRef.current !== undefined) {
      const formElements: HTMLFormControlsCollection = formRef.current.elements;

      [...formElements].map((element: ContactFormElement) => {
        if (element.id && element.value) {
          formResponse[element.id as keyof typeof formResponse] = element.value;
          element.value = "";
        }
      });

      const response = await api.post("contact", formResponse);
      console.log(response);
      if (response.status === 400) {
        setError(true);
      } else {
        setError(false);
        setSuccess(true);
      }
    }
  };

  return (
    <form className="form_container" ref={formRef} onSubmit={handleSubmit}>
      {success && <div className="form_success">¡Gracias por contactarme!</div>}
      <fieldset>
        <section className="edit_input">
          <input type="text" id="name" required />
          <label htmlFor="name">Nombre</label>
        </section>

        <section className="edit_input">
          <input type="email" id="email" required />
          <label htmlFor="email">Email</label>
        </section>

        <section className="edit_input">
          <input type="text" id="subject" required />
          <label htmlFor="subject">Asunto</label>
        </section>

        <section className="textarea_input">
          <textarea id="message" required />
          <label htmlFor="message">Mensaje</label>
        </section>

        <section className="button">
          <button type="submit">Enviar</button>
        </section>
      </fieldset>
    </form>
  );
};

export default ContactForm;
