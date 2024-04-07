import "../styles/Header.css";
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
          <div className="header-information">
            <h1>Desarrollador Full-Stack</h1>
            <p>
              Hola, soy Fernando Gómez. Un desarrollador apasionado en constante
              crecimiento!
            </p>
            <div className="header-technologies">
                <p>Tecnologias: </p>
              <picture className="technologies-container">
                <img src="../public/images/header/figma.png" alt="figma" />
                <img src="../public/images/header/react.png" alt="react" />
                <img src="../public/images/header/sql.png" alt="sql" />
                <img src="../public/images/header/tailwind.png" alt="tailwind" />
                <img src="../public/images/header/git.png" alt="git" />
                <img src="../public/images/header/vue.png" alt="git" />
              </picture>
            </div>
          </div>
        </div>
        <div className="header-right">
          <picture>
            <img
              src="../public/images/header/profile-image.png"
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
