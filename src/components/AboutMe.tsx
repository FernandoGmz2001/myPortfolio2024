import "../styles/AboutMe.css"
function AboutMe() {
  return (
    <main className="main-aboutMe">
      <div className="aboutMe-information">
        <h4>Sobre mi</h4>
        <h4>Hola, soy Fernando Gómez. Un desarrollador FullStack en constante crecimiento!</h4>
        <p>
          Como desarrollador Junior poseo habilidades de FrontEnd y Backend,
          además de manejar herramientas como React, Tailwind, Sql Server, Git, Github, Vue, Javascript . Mi propósito es crear interfaces programadas con un código
          limpio y con buenas prácticas, además de hacerlo en un tiempo
          efectivo. Tengo habilidades de comunicación y trabajo en equipo,
          siempre dispuesto a mejorar!
        </p>
      </div>
      <picture className="aboutMe-image">
        <img src="/images/about-me/coding.png" alt="coding" />
      </picture>
    </main>
  );
}

export default AboutMe;
