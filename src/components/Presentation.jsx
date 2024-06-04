import "./Presentation.css";
import video from "../../material/fondo2.mp4";
import videoR from "../../material/Responsive.mp4";
import logoLinkedIn from "../assets/linkedin.svg";
import logoGitGub from "../assets/GitHub3.png";
import logoWhatsapp from "../assets/Whatsaap.png";
import logoGmail from "../assets/Gmail.png";
import logoHotmail from "../assets/hotmail.png";
import foto from "../assets/Foto4.png";
import RickAndMorty from "../../material/RickAndMorty.mp4";
import HealthBooking from "../../material/HealthBooking.mp4";
import imagenPI_1 from "../../material/P.I_1.png";
import imagenPI_2 from "../../material/P.I_2.png";
import CV from "../../material/CV_Jose_Aguilar.pdf";

const Presentation = () => {
  return (
    <div className="contenedor">
      <div className="contTextos">
        <div className="contLinks">
          <a
            href="https://www.linkedin.com/in/jose-abel-aguilar-cepeda-8a3924284"
            target="_blank"
          >
            <img src={logoLinkedIn} alt="logo linkedin" className="logoLinke" />
          </a>
          <a href="https://github.com/JAAC2023" target="_blank">
            <img src={logoGitGub} alt="logo GitGub" className="logoGit" />
          </a>
          <a href="https://wa.link/c3axaq" target="_blank">
            <img src={logoWhatsapp} alt="logo Whatsapp" className="logoWhat" />
          </a>
          <a
            href="mailto:joseaguilarc0498@gmail.com?Subject=Interesado%20en%20tu%20perfil"
            target="_blank"
          >
            <img src={logoGmail} alt="logo Gmail" className="logoGmail" />
          </a>
          <a
            href="mailto:jaac16@live.com?Subject=Interesado%20en%20tu%20perfil"
            target="_blank"
          >
            <img src={logoHotmail} alt="logo hotmail" className="logoGmail" />
          </a>
          <a href={CV} class="boton-descarga" target="_blank">
            <button className="botonDescarga">HOJA DE VIDA</button>
          </a>
        </div>
        <h1 className="texto1">¡HOLA!</h1>
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
                <a
                  //href="https://github.com/JAAC2023/Poyecto_Integrador.git"
                  href={RickAndMorty}
                  target="_blank"
                >
                  <p className="textoProyectos">Rick and Morty</p>
                </a>
                <a
                  //</div>href="https://github.com/JAAC2023/Proyecto_Countries.git"
                  href={imagenPI_2}
                  target="_blank"
                >
                  <p className="textoProyectos">Countries</p>
                </a>
                <a
                  //href="https://healthbooking-front.vercel.app/"
                  href={HealthBooking}
                  target="_blank"
                >
                  <p className="textoProyectos">HealthBooking</p>
                </a>
              </div>

              <div className="lista360">
                <a
                  //href="https://github.com/JAAC2023/Poyecto_Integrador.git"
                  href={RickAndMorty}
                  target="_blank"
                >
                  <p className="textoProyectos360">Rick and Morty 🟢</p>
                </a>
                <a
                  //href="https://github.com/JAAC2023/Proyecto_Countries.git"
                  href={imagenPI_2}
                  target="_blank"
                >
                  <p className="textoProyectos360">Countries 🟡</p>
                </a>
                <a
                  //href="https://healthbooking-front.vercel.app/"
                  href={HealthBooking}
                  target="_blank"
                >
                  <p className="textoProyectos360">HealthBooking 🔵</p>
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
      <video autoPlay loop muted preload="auto" className="video-fondoR">
        <source src={videoR} type="video/mp4" />
      </video>
    </div>
  );
};

export default Presentation;
