import LogoImgBlanco from "../assets/img/logo-blanco.png";
import LogoWebpayBlanco from "../assets/img/logo-webpay-blanco.png";
import { MailOutlined} from "@ant-design/icons";
import { Link } from 'react-router-dom'



function Footer() {
  
  
  
  return (
    <footer>
      <div className="container-footer">
        <div className="left-container">
          <img className="img-logo img-logo-footer" alt="" src={LogoImgBlanco}></img>
          <div className='contact-container'>
            <span className='footer-spans'>CONTACTANOS POR:</span>
            <div className="icons-container">
              <i class="contact-icons fa-brands fa-whatsapp"></i>
              <i class="contact-icons fa-brands fa-facebook-f"></i>
              <MailOutlined className='contact-icons mail-icon'/>
            </div>
          </div>
          <img className="img-webpay" alt="" src={LogoWebpayBlanco}></img>
        </div>
        <div className='right-container'>
          <div className="slot1">
            <h3 className="titles-footer">MAQUICENTER</h3>
            <hr className="hr-footer"></hr>
            <ul className="ul-footer">
              <li><a href="">Inicio</a></li>
              <li><a href="/#nosotros">Nosotros</a></li>
              <li>Productos</li>
              <li>Contacto</li>
            </ul>
          </div>
          <div className="slot2">
            <h3 className="titles-footer title-productos">PRODUCTOS</h3>
            <hr className="hr-footer"></hr>
            <ul className="ul-footer">
              <li>Grúas Horquilla</li>
              <li>Máquinas para la construccion</li>
              <li>Máquinas Metalmecánicas </li>
            </ul>
          </div>
          <div className="slot3">
            <h3 className="titles-footer title-sucursal">SUCURSAL</h3>
            <hr className="hr-footer"></hr>
            <ul className="ul-footer">
              <div className="sucursal-content">
              <i class="fa-solid fa-location-dot icon-sucursal"></i>
              <li>El Roble 670, Bodega 3 Lampa, Santiago de Chile</li>
              </div>
              <div className="sucursal-content">
              <i class="fa-solid fa-phone icon-sucursal"></i>
              <li className="phone-sucursal">(+56) 2 2623 3000</li>
              </div>
             
            </ul>
          </div>
        </div>
      </div>
    </footer>
  )
}
export default Footer
