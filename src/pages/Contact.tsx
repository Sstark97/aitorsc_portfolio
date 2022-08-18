import { Helmet } from "react-helmet";
import ContactContainer from "@containers/ContactContainer";

const Contact = () => <>
<Helmet>
    <title>ASC | Contacto</title>
    <meta name="title" content="ASC | Contacto" />
    <meta
        name="description"
        content="Página de contacto para solicitar información."
    />
</Helmet>
<ContactContainer />
</>;

export default Contact;
