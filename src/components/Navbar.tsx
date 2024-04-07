import "../styles/Navbar.css"
function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
        <li className="menu-item selected">Inicio</li>
        <li className="menu-item">Proyectos</li>
        <li className="menu-item">Sobre mi</li>
        <li className="menu-item">Contacto</li>
      </ul>
    </nav>
  );
}

export default Navbar;
