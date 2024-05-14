import "../styles/Header.css";
import { motion } from "framer-motion";
function Header() {
  return (
    <div className="main-header">
      <header className="header">
        <div className="header-left">
          <div className="header-socials">
            <img src="/public/images/header/github.png" alt="github icon" />
            <img src="/public/images/header/linkedin.png" alt="linkedin icon" />
            <img src="/public/images/header/facebook.png" alt="facebook icon" />
          </div>
          <motion.div initial={{opacity: 0, y: 100}} animate={{opacity: 1, y: 0}} className="header-information">
            <h1>Desarrollador FrontEnd | Diseñador UI / UX</h1>
            <p>
              Hola, soy Fernando Gómez. Un desarrollador proactivo, apasionado y persistente, me gusta seguir buenas prácticas y mejorar cada día!
            </p>
            <div className="header-technologies">
                <p>Tecnologias: </p>
              <picture className="technologies-container">
                <img src="/images/header/figma.png" alt="figma" />
                <img src="/images/header/react.png" alt="react" />
                <img src="/images/header/sql.png" alt="sql" />
                <img src="/images/header/tailwind.png" alt="tailwind" />
                <img src="/images/header/git.png" alt="git" />
                <img src="/images/header/vue.png" alt="git" />
              </picture>
            </div>
          </motion.div>
        </div>
        <div className="header-right">
          <picture>
            <motion.img initial={{opacity: 0, x: 100}} animate={{opacity: 1, x: 0}}
              src="/images/header/profile-image.png"
              alt="profile-image"
            />
          </picture>
        </div>
      </header>
      {/* <div className="header-page-indicator">
        <div className="page-line"></div>
        <h1 className="page-number">01</h1>
      </div> */}
    </div>
  );
}

export default Header;
