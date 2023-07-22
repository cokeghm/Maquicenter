import { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import '../styles/Equipos.css';
import { useParams, useLocation } from 'react-router-dom';
import _ from 'lodash';
import { Col, Empty, Row } from 'antd';
import ProductCard from '../components/ProductCard';

function Equipos({ categorias, api }) {
  const match = useParams();
  const location = useLocation();
  const locationState = location.state;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    if(match.id !== "custom-search") (async function getProducts() {
      const _products = await api.products.getProducts({
        details: true,
        categories: [match.id, match.subCategory, match.innerCategory],
      });
      setProducts(_products);
      setLoading(false);
    })();
    else
    setProducts(location.state.products);
    setLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [match.id, match.subCategory, match.innerCategory]);

  function productsList() {

    const productElements = products.map((p, index) => (
      <ProductCard product={p} key={index} />
    ));

    return products.length ? (
      <div className='grid grid-cols-3 gap-0'>{productElements}</div>
    ) : (
      <Col span={24} className='mt-10'>
        <Row justify='center'>
          <Empty description={
            <span className='font-light'>
              Se han agotado todos los productos de esta categoría
            </span>
          }/>
        </Row>
      </Col>
    );
  }

  const categoryDetails = _.find(categorias, { id: _.toInteger(match.id) }) || { label: locationState?.customLabel || '' };
  return (
    <div className='equipos'>
      <NavBar categorias={categorias} />
      <br></br>
      <br></br>
      <h1 className='titulo-categorias'>Equipos</h1>
      <h2 className='titulo-categorias'>{categoryDetails.label}</h2>
      <br></br>
      {loading ? <div>Loading...</div> : productsList()}
    </div>
  );
}

export default Equipos;
