import imgNosotros from "../assets/img/maquimachine.png";

function Nosotros() {
  return (
    <div className="nosotros-container" id="Us">
       <div className="l-container-nosotros">
          <div className="title-container">
            <h2 className="title-nosotros" id="Nosotros">SOBRE NOSOTROS</h2>
          </div>
          <img className="nosotros-img" alt="" src={imgNosotros}></img>
          <hr className="hr-nosotros"></hr>
       </div>
       <div className="r-container-nosotros">
          <div className="content-nosotros">
            <p className="text-nosotros">Con una experiencia de 36 años, buscamos soluciones en todo el mundo para satisfacer las necesidades de nuestros clientes.<br></br><br></br>Nuestros continuos viajes alrededor del mundo, nos ha llevado a conocer y contar con importantes proveedores de maquinaria en Europa, USA y Asia.<br></br><br></br>Por eso, si no tenemos una máquina que usted necesita, la buscamos e importamos para usted. Lo importante para nosotros es siempre cumplir con la necesidad de nuestro cliente. Por lo mismo es que nosotros garantizamos nuestras máquinas, tanto usadas como nuevas. En el caso de las máquinas usadas, las garantizamos por 60 días o 300 horas de uso, respaldo y confianza que no cualquier empresa puede ofrecer. Pónganos a prueba, se sorprenderá. Por algo hemos vendido mas de 12000 maquinas en el mercado nacional, Peru, Bolivia, Ecuador, Colombia y Argentina.</p>
          </div>
          <div className="v-line"></div>
       </div>
    </div>
  )
}

export default Nosotros;
