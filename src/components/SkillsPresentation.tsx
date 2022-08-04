import "@styles/components/skills_presentation.scss";

const SkillsPresentation = () => (
    <div className="skills_presentation">
      <div className="skills_header">
        <p className="skills_line__1">{"Habilidades &"}</p>
        <p className="skills_line__2">Experiencia</p>
      </div>
      <p id="first_skill_p">
        Desde que comencé mi viaje como desarrollador hace casi 4 años, he
        trabajado como free-lance en proyectos independientes, participado en
        hackathons, trabajado en remoto para una start-up y he colaborado con
        personas talentosas para crear aplicaciones web.
      </p>
      <p>
        Desarrollo aplicaciones responsive rápidas y fáciles de usar, siguiendo
        las mejores prácticas. Mi área principal es el Front-End con React,
        TypeScript, Redux, Material UI, creando aplicaciones web.
      </p>
      <p>
        Además conozco algunas tecnologías usadas en el Back-End como Express,
        Flask, MongoDB, SQLite, MariaDB, con las que he desarrolado APIs
        Rest-Full o aplicaciones FullStack.
      </p>
      <p>
        <span>Puedes visitar mi perfil de </span>
        <a href="https://www.linkedin.com/in/aitorscinfo/">Linkedln</a>
        <span>
          {" "}
          para conocer más detalles sobre mi Experiencia o contactarme.{" "}
        </span>
      </p>
    </div>
);

export default SkillsPresentation;
