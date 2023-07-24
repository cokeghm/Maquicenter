import React, { useState } from 'react';
import '../styles/registrationForm.css'; // Archivo de estilos CSS local

const comuna = ['Aisén','Algarrobo'
,'Alhué','AltoBiobío','AltodelCarmen','AltoHospicio','Ancud','Andacollo'
,'Angol','Antártica','Antofagasta','Antuco','Arauco','Arica','Buin',
'Bulnes','Cabildo','CabodeHornos(ExNavarino)','Cabrero','Calama','Calbuco','Caldera','Calera','CaleradeTango'
,'CalleLarga','Camarones','Camiña','Canela','Cañete','Carahue','Cartagena','Casablanca','Castro','Catemu'
,'Cauquenes','Cerrillos','CerroNavia','Chaitén','Chanco','Chañaral','Chépica','Chiguayante','ChileChico','Chillán','ChillánViejo','Chimbarongo','Cholchol'
,'Chonchi','Cisnes','Cobquecura','Cochamó','Cochrane','Codegua','Coelemu','Coihaique','Coihueco','Coinco','Colbún','Colchane','Colina','Collipulli','Coltauco'
,'Combarbalá','Concepción','Conchalí','Concón','Constitución','Contulmo','Copiapó','Coquimbo','Coronel','Corral','Cunco','Curacautín','Curacaví','CuracodeVélez','Curanilahue'
,'Curarrehue','Curepto','Curicó','Dalcahue','DiegodeAlmagro','Doñihue','ElBosque','ElCarmen','ElMonte','ElQuisco','ElTabo','Empedrado','Ercilla','EstaciónCentral','Florida'
,'Freire','Freirina','Fresia','Frutillar','Futaleufú','Futrono','Galvarino','GeneralLagos','Gorbea','Graneros','Guaitecas','Hijuelas','Hualaihué','Hualañé','Hualpén','Hualqui',
'Huara','Huasco','Huechuraba','Illapel','Independencia','Iquique','IsladeMaipo','IsladePascua','JuanFernández','LaCisterna','LaCruz','LaEstrella','LaFlorida','LagoRanco','LagoVerde',
'LaGranja','LagunaBlanca','LaHiguera','Laja','LaLigua','Lampa','Lanco','LaPintana','LaReina','LasCabras','LasCondes','LaSerena','LaUnión','Lautaro','Lebu','Licantén','Limache',
'Linares','Litueche','Llaillay','Llanquihue','LoBarnechea','LoEspejo','Lolol','Loncoche','Longaví','Lonquimay','LoPrado','LosÁlamos','LosAndes','LosÁngeles','LosLagos','LosMuermos','LosSauces','LosVilos','Lota','Lumaco','Machalí','Macul','Máfil','Maipú','Malloa','Marchihue','MaríaElena','MaríaPinto','Mariquina','Maule','Maullín','Mejillones','Melipeuco','Melipilla','Molina','MontePatria','Mostazal','Mulchén','Nacimiento','Nancagua','Natales','Navidad','Negrete','Ninhue','Nogales','NuevaImperial','Ñiquén','Ñuñoa','OHiggins','Olivar','Ollagüe','Olmué','Osorno','Ovalle','PadreHurtado','PadrelasCasas','Paiguano','Paillaco','Paine','Palena','Palmilla','Panguipulli','Panquehue','Papudo','Paredones','Parral','PedroAguirreCerda','Pelarco','Pelluhue','Pemuco','Pencahue','Penco','Peñaflor','Peñalolén','Peralillo','Perquenco','Petorca','Peumo','Pica','Pichidegua','Pichilemu','Pinto','Pirque','Pitrufquén','Placilla','Portezuelo','Porvenir','PozoAlmonte','Primavera','Providencia','Puchuncaví','Pucón','Pudahuel','PuenteAlto','PuertoMontt','PuertoOctay','PuertoVaras','Pumanque','Punitaqui','PuntaArenas','Puqueldón','Purén','Purranque','Putaendo','Putre','Puyehue','Queilén','Quellón','Quemchi','Quilaco','Quilicura','Quilleco','Quillón','Quillota','Quilpué','Quinchao','QuintadeTilcoco','QuintaNormal','Quintero','Quirihue','Rancagua','Ránquil','Rauco','Recoleta','Renaico','Renca','Rengo','Requínoa','Retiro','Rinconada','RíoBueno','RíoClaro','RíoHurtado','RíoIbáñez','RíoNegro','RíoVerde','Romeral','Saavedra','SagradaFamilia','Salamanca','SanAntonio','SanBernardo','SanCarlos','SanClemente','SanEsteban','SanFabián','SanFelipe','SanFernando','SanGregorio','SanIgnacio','SanJavier','SanJoaquín','SanJosédeMaipo','SanJuandelaCosta','SanMiguel','SanNicolás','SanPablo','SanPedro','SanPedrodeAtacama','SanPedrodelaPaz','SanRafael','SanRamón','SanRosendo','SantaBárbara','SantaCruz','SantaJuana','SantaMaría','Santiago','SantoDomingo','SanVicente','SierraGorda','Talagante','Talca','Talcahuano','Taltal','Temuco','Teno','TeodoroSchmidt','TierraAmarilla','Tiltil','Timaukel','Tirúa','Tocopilla','Toltén','Tomé','TorresdelPaine','Tortel','Traiguén','Treguaco','Tucapel','Valdivia','Vallenar','Valparaíso','Vichuquén','Victoria','Vicuña','Vilcún','VillaAlegre','VillaAlemana','Villarrica','ViñadelMar','Vitacura','YerbasBuenas','Yumbel','Yungay','Zapallar']; // Opciones para el menú desplegable Comuna
const region = ['Región de Arica y Parinacota',
  'Región de Tarapacá',
  'Región de Antofagasta',
  'Región de Atacama',
  'Región de Coquimbo',
  'Región de Valparaíso',
  'Región Metropolitana de Santiago',
  'Región del Libertador General Bernardo OHiggins',
  'Región del Maule',
  'Región del Ñuble',
  'Región del Biobío',
  'Región de La Araucanía',
  'Región de Los Ríos',
  'Región de Los Lagos',
  'Región de Aysén del General Carlos Ibáñez del Campo',
  'Región de Magallanes y la Antártica Chilena']; // Opciones para el menú desplegable Región

const RegistroClientes = () => {
  const [formData, setFormData] = useState({
    nombres: '',
    apellidos: '',
    rut:'',
    email: '',
    telefono: '',
    rutempresa: '',
    direccion: '',
    razonSocial: '',
    comuna: '',
    region: '',
    giroComercial: '',
    password: '',
  });
  const [fechaRegistro, setFechaRegistro] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = () => {
    // Realizar la solicitud POST con los datos del formulario

    const fechaActual = new Date();
    setFechaRegistro(fechaActual.toLocaleString());
    const datos=[formData.rut, formData.nombres, formData.apellidos,,, formData.email, formData.razonSocial, formData.giroComercial, formData.direccion, formData.comuna,, formData.region, formData.telefono, ,, formData.password, formData.fechaRegistro,,];
    console.log(datos);
    
    fetch('http://127.0.0.1:5001/admin-ae7ca/us-central1/postCliente', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(datos),
    })
      .then((response) => response.json())
      .then((data) => {
        // Aquí puedes manejar la respuesta de la API si es necesario
        console.log('Respuesta de la API:', data);
      })
      .catch((error) => {
        // Manejar errores de la solicitud
        console.error('Error al enviar la solicitud:', error);
      });
  };
  return (
    <div>
    <h1 className='titulo'>FORMULARIO DE REGISTRO</h1>
    <br></br><br></br>
    <div className="registro-form">
  
      <div className="datos-personales">
        <h2>Datos Personales</h2>
        <div className="form-group">
          <label>Nombres *</label>
          <input type="text" name="nombres" value={formData.nombres} onChange={handleChange} autoComplete="off" required />
        </div>
        <div className="form-group">
          <label>Apellidos *</label>
          <input type="text" name="apellidos" value={formData.apellidos} onChange={handleChange} autoComplete="off"  required />
        </div>
        <div className="form-group">
          <label>RUT *</label>
          <input type="text" name="rut" value={formData.rut} onChange={handleChange} autoComplete="off" required />
        </div>
        <div className="form-group">
          <label>E-mail *</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} autoComplete="off" required />
        </div>
        <div className="form-group">
          <label>Telefono *</label>
          <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} autoComplete="off" required />
        </div>
      </div>

      <div className="datos-empresa">
        <h2>Datos Empresa</h2>
        <div className="form-group">
          <label>RUT Empresa</label>
          <input type="text" name="rutempresa" value={formData.rutempresa} onChange={handleChange} autoComplete="off" />
        </div>
        <div className="form-group">
          <label>Direccion</label>
          <input type="text" name="direccion" value={formData.direccion} onChange={handleChange} autoComplete="off" />
        </div>
        <div className="form-group">
          <label>Razon Social</label>
          <input type="text" name="razonSocial" value={formData.razonSocial} onChange={handleChange} autoComplete="off" />
        </div>
        <div className="form-group">
          <label>Comuna</label>
          <select name="comuna" value={formData.comuna} onChange={handleChange}>
            <option value="">Seleccione una comuna</option>
            {comuna.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Region</label>
          <select name="region" value={formData.region} onChange={handleChange} >
            <option value="">Seleccione una región</option>
            {region.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Giro Comercial</label>
          <input type="text" name="giroComercial" value={formData.giroComercial} onChange={handleChange} autoComplete="off"  />
        </div>
      </div>

      <div className="password-section">
        <h2>Crear Contraseña</h2>
        <div className="form-group">
          <label>Contraseña *</label>
          <input type="password" name="password" value={formData.password} onChange={handleChange} autoComplete="off" required />
        </div>
      </div>

      <button className="registrarme-btn" onClick={handleSubmit}>Registrarme</button>
    </div>
    </div>
  );
};

export default RegistroClientes;
