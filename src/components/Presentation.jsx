import "./Presentation.css";
import video from "../../../material/fondo2.mp4";
import logoLinkedIn from "../assets/linkedin.svg";
import logoGitGub from "../assets/Github3.png";

const Presentation = () => {
  return (
    <div className="contenedor">
      <div className="contTextos">
        <div className="contLinks">
          <a href="https://www.linkedin.com/in/jose-abel-aguilar-cepeda-8a3924284">
            <img src={logoLinkedIn} alt="logo linkedin" className="logoLinke" />
          </a>
          <a href="https://github.com/JAAC2023">
            <img src={logoGitGub} alt="logo GitGub" className="logoGit" />
          </a>
        </div>
        <h1 className="texto1">BIENVENIDO</h1>
        <div className="parrafo">
          <h2 className="texto2">
            Mi nombre es Jose Abel, soy un desarrollador Full Stack apasionado
            por crear aplicaciones web innovadoras. Con experiencia en
            tecnologías como JavaScript, Node.js y React.js, me especializo en
            transformar ideas en soluciones digitales funcionales y atractivas.
          </h2>
        <div className="proyectos">
          <h2 className="textoProyectos">PROYECTOS</h2>
        </div>
        </div>

        <h2 className="texto2">
          ¡Estoy listo para llevar tu proyecto al siguiente nivel!
        </h2>
      </div>
      <div className="contLineas">
        <div className="linea1"></div>
        <div className="linea2"></div>
        <div className="contLinea3-4">
          <div className="linea3"></div>
          <div className="linea4"></div>
        </div>
      </div>
      <video autoPlay loop muted preload="auto" className="video-fondo">
        <source src={video} type="video/mp4" />
      </video>
    </div>
  );
};

export default Presentation;
