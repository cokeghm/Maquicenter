import { Carousel } from "react-bootstrap";
import Imagen1 from "../assets/img/carousel1.jpg"
import Imagen2 from "../assets/img/carousel2.jpg"


function Banner() {
    return ( 
        <Carousel className="banner">
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Imagen1}
            alt="First slide"
          />
          <Carousel.Caption>
            {/* <h3></h3>
            <p></p> */}
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={Imagen2}
            alt="Second slide"
          />
  
          <Carousel.Caption>
            {/* <h3></h3>
            <p></p> */}
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }



export default Banner ;