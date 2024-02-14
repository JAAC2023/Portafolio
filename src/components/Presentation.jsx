import "./Presentation.css";
import video from "../../../material/fondo2.mp4";
import logoLinkedIn from "../assets/linkedin.svg";

const Presentation = () => {
  const info = [
    {
      linkedin: "www.linkedin.com/in/jose-abel-aguilar-cepeda-8a3924284",
      github: "https://github.com/JAAC2023",
      name: "José A.",
    },
  ];

  return (
    <div className="contenedor">
      {/* <div className="contLinks">
        <nav>LinkedIn</nav>
      </div> */}
      <div className="contTextos">
        {/* <nav>
          {info.map((el) => (
            <LinksInfo key={el.name} linkedin={el.linkedin} github={el.github}/>
          ))}
        </nav> */}
        <a href="www.linkedin.com/in/jose-abel-aguilar-cepeda-8a3924284">
          {logoLinkedIn}
        </a>
        <h1 className="texto1">BIENVENIDO</h1>
        <h2 className="texto2">
          Mi nombre es Jose Abel, soy un desarrollador Full Stack apasionado por
          crear aplicaciones web innovadoras. Con experiencia en tecnologías
          como JavaScript, Node.js y React.js, me especializo en transformar
          ideas en soluciones digitales funcionales y atractivas.
        </h2>
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

function LinksInfo(props) {
  const { linkedin, github, name } = props;
  return (
    <a className="" href={linkedin} target="_blank">
      <img className="" src={logoLinkedIn} />
      {name}
    </a>
  );
}
