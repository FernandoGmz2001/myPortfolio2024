import "./App.css";
import AboutMe from "./components/AboutMe.tsx";
import Footer from "./components/Footer.tsx";
import Header from "./components/Header.tsx";
import Navbar from "./components/Navbar.tsx";
import Projects from "./components/Projects.tsx";

function App() {
  return (
    <main className="main-app">
      <Navbar/>
      <Header />
      <Projects/>
      <AboutMe/> 
      <Footer/>
    </main>
  );
}

export default App;
