import "../styles/Footer.css";
function Footer() {
  return (
    <footer className="main-footer">
      <div className="footer-content">
        <div className="footer-left">
          <h1>Contáctame</h1>
        </div>
        <div className="footer-right">
          <div className="contact">
            <div>
              <picture className="footer-image">
                <img src="/images/header/github.png" alt="github" />
              </picture>
            </div>
            <div>
              <h4>Github</h4>
              <p>https://github.com/FernandoGmz2001</p>
            </div>
          </div>
          <div className="contact">
            <div>
              <picture className="footer-image">
                <img src="/images/header/linkedin.png" alt="linkedin" />
              </picture>
            </div>
            <div>
              <h4>Linkedin</h4>
              <p>https://www.linkedin.com/in/fernando-gomez-387998204/</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
