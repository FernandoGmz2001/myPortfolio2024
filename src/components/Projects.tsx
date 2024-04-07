import "../styles/Projects.css";
import Card from "./Card";

function Projects() {
  return (
    <main className="main-projects">
      <div className="projects-information">
        <h4>Proyectos</h4>
        <h3>Estos son algunos proyectos de mi github</h3>
      </div>
      <div className="projects-showcase">
        <Card
          name="Nike Store"
          type="Proyecto"
          description="Este es un proyecto donde hice mi propia pagina de nike utilizando python como backend"
          image="nike-store"
          color="linear-gradient(167deg, rgba(79,176,231,0.8911939775910365) 0%, rgba(79,93,231,1) 46%, rgba(44,52,129,1) 100%)"
        />
        <Card
          name="Web scrapping"
          type="Mini proyecto"
          description="Este es un pequeño proyecto que tuve para poder rellenar el e-commerce de nike"
          image="web-scraping"
          color="linear-gradient(167deg, rgba(57,241,131,1) 0%, rgba(80,210,147,1) 46%, rgba(41,108,76,1) 100%)"
        />
        <Card
          name="Express Mens Shop"
          type="Proyecto"
          description="Proyecto presentado utilizando SSR Y Sql Server"
          image="express-men-shop"
          color="linear-gradient(167deg, rgba(13,95,241,1) 0%, rgba(13,95,241,1) 46%, rgba(8,55,139,1) 100%)"
        />
        <Card
          name="Clima ITNL"
          type="Proyecto"
          description="Proyecto donde colaboré con diferentes estudiantes para poder realizar la página del clima del ITNL"
          image="clima-itnl"
          color="linear-gradient(167deg, rgba(238,212,73,1) 0%, rgba(238,165,73,1) 46%, rgba(136,94,42,1) 100%)"
        />
        <Card
          name="Card Details"
          type="Ejercicio"
          description="Ejercicio de frontend mentor para capturar una tarjeta y hacer las validaciones correspondientes."
          image="card-details"
          color="linear-gradient(167deg, rgba(255,60,188,1) 0%, rgba(206,78,193,1) 46%, rgba(125,47,117,1) 100%)"
        />
      </div>
    </main>
  );
}

export default Projects;
