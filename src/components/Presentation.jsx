import "./Presentation.css";
import video from "../../material/fondo2.mp4";
import logoLinkedIn from "../assets/linkedin.svg";
import logoGitGub from "../assets/GitHub3.png";
import logoWhatsapp from "../assets/Whatsaap.png";
import logoGmail from "../assets/Gmail.png";
import logoHotmail from "../assets/hotmail.png";
import foto from "../assets/Foto.png";

const Presentation = () => {
  return (
    <div className="contenedor">
      <div className="contTextos">
        <div className="contLinks">
          <a href="https://www.linkedin.com/in/jose-abel-aguilar-cepeda-8a3924284" target="_blank">
            <img src={logoLinkedIn} alt="logo linkedin" className="logoLinke" />
          </a>
          <a href="https://github.com/JAAC2023" target="_blank">
            <img src={logoGitGub} alt="logo GitGub" className="logoGit" />
          </a>
          <a href="https://w.app/U0w8Ze" target="_blank">
            <img src={logoWhatsapp} alt="logo Whatsapp" className="logoWhat" />
          </a>
          <a href="mailto:joseaguilarc0498@gmail.com?Subject=Interesado%20en%20tu%20perfil" target="_blank">
            <img src={logoGmail} alt="logo Gmail" className="logoGmail" />
          </a>
          <a href="mailto:jaac16@live.com?Subject=Interesado%20en%20tu%20perfil" target="_blank">
            <img src={logoHotmail} alt="logo hotmail" className="logoGmail" />
          </a>
        </div>
        <h1 className="texto1">BIENVENIDO!</h1>
        <div className="contFoto">
          <img src={foto} alt="" className="foto" />
        </div>

        <div className="parrafo">
          <div className="contLinParr">
            <div className="lineaParrafo"></div>
            <p className="texto2">
              Mi nombre es <strong>Jose Abel,</strong> soy un{" "}
              <strong>desarrollador Full Stack</strong> apasionado por crear
              aplicaciones web innovadoras. Con experiencia en tecnologías como
              JavaScript, Node.js y React.js, me especializo en transformar
              ideas en soluciones digitales funcionales y atractivas.
              <br />
              <br />
              <br />
              ¡Estoy listo para llevar tu proyecto al siguiente nivel!
            </p>
          </div>
          <div className="lineaInter"></div>
          <div className="proyectos">
            <h2 className="tituloProyectos">Proyectos</h2>
            <div className="linProy1"></div>
            <div className="contLinText">
              <div className="linProy2" />
              <div className="lista">
                <a href="https://github.com/JAAC2023/Poyecto_Integrador.git" target="_blank">
                  <p className="textoProyectos">Rick and Morty</p>
                </a>
                <a href="https://github.com/JAAC2023/Proyecto_Countries.git" target="_blank">
                  <p className="textoProyectos">Countries</p>
                </a>
                <a href="https://healthbooking-front.vercel.app/" target="_blank">
                  <p className="textoProyectos">HealthBooking</p>
                </a>
              </div>
            </div>
          </div>
        </div>
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
