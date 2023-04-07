import {Col, Row, Container} from 'react-bootstrap';

const MasVendidos = () => {
  return (    
    <div class="masvendidos">
    <Container>
            <Row>
                  <h3 className="titulo-categorias">
                    MAS VENDIDOS
                  </h3>
                  <a href="#">Ver Productos &gt; </a>
                
            </Row>
            <Row>
                <Col class="product-item">
                    <div class="pi-pic">
                      <img src="assets/img/pro-1.jpg" alt="" />
                      <ul>
                        <li class="quick-view">
                          <a href="#"> Ver Detalles</a>
                        </li>
                      </ul>
                    </div>
                    <div class="pi-text">
                      <div class="catagory-name">MODELO B250-R 2014</div>
                      <a href="#">
                        <h5>Vacuolavadora y Fregadora</h5>
                      </a>
                      <div class="product-price">KARCHER</div>
                    </div>
                    </Col>
                  <Col class="product-item">
                    <div class="pi-pic">
                      <img src="assets/img/pro-2.jpg" alt="" />
                      <ul>
                        <li class="quick-view">
                          <a href="#">Ver Detalles</a>
                        </li>
                      </ul>
                    </div>
                    <div class="pi-text">
                      <div class="catagory-name">Modelo MJ346EA</div>
                      <a href="#">
                        <h5>Sierra Huincha Vertcal para Madera</h5>
                      </a>
                      <div class="product-price">TOS-TIMEMASTER</div>
                    </div>
                  </Col>
                  <Col class="product-item">
                    <div class="pi-pic">
                      <img src="assets/img/pro-3.jpg" alt="" />
                      <ul>
                        <li class="quick-view">
                          <a href="#">Ver Detalles</a>
                        </li>
                      </ul>
                    </div>
                    <div class="pi-text">
                      <div class="catagory-name">Modelo MW5-100L/1</div>
                      <a href="#">
                        <h5>Electro Iman Suspendido</h5>
                      </a>
                      <div class="product-price">TOS-TIMEMASTER</div>
                    </div>
                </Col>
         </Row>
</Container>
</div> 
  )
}

export default MasVendidos
