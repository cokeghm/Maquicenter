import { Button, Card, Container } from 'react-bootstrap';
import ImgDefault from '../assets/img/KARCHERB250R.png';
import { useContext } from 'react';
import { AppContext } from '../context/globalContext';
import { Link } from 'react-router-dom';
import { Col, Empty, Row, Table } from 'antd';
import { DeleteFilled } from '@ant-design/icons';

function Carro() {
  const { cart, removeItemFromCart, clearCart } = useContext(AppContext);

  const formatter = new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0,
  });

  const cartItems = cart.reduce((acc, product) => {
    const found = acc.find((item) => item.id_modelo === product.id_modelo);
    if (found) {
      found.quantity += 1;
    } else {
      acc.push({
        id: product.id_modelo,
        nombre_modelo: product.nombre_modelo,
        precio_modelo: product.precio_modelo,
        cover_image: product.cover_image ?? ImgDefault,
        quantity: 1,
      });
    }
    return acc;
  }, []);

  const columns = [
    {
      title: 'Producto',
      dataIndex: 'nombre_modelo',
      key: 'nombre_modelo',
      align: 'center',
      render: (text, record) => (
        <Row align='middle' justify='center'>
          <img
            className='img-fluid img-thumbnail mb-1'
            src={record.cover_image ?? ImgDefault}
            alt={record.nombre_modelo}
            width='150px'
          />
          <p>{record.nombre_modelo}</p>
        </Row>
      ),
    },
    {
      title: 'Precio',
      dataIndex: 'precio_modelo',
      key: 'precio_modelo',
      align: 'center',
      render: (text, record) => (
        <Row justify='center'>{formatter.format(record.precio_modelo)}</Row>
      ),
    },
    {
      title: 'Cantidad',
      dataIndex: 'quantity',
      key: 'quantity',
      align: 'center',
      render: (text, record) => <Row justify='center'>{record.quantity}</Row>,
    },
    {
      title: 'Total',
      dataIndex: 'total',
      key: 'total',
      align: 'center',
      render: (text, record) => (
        <Row justify='center'>
          {formatter.format(record.precio_modelo * record.quantity)}
        </Row>
      ),
    },
    {
      title: 'Quitar',
      dataIndex: 'quitar',
      key: 'quitar',
      align: 'center',
      render: (text, record) => (
        <Row justify='center'>
          <DeleteFilled
            style={{ color: '#d11a2a' }}
            onClick={() => removeItemFromCart(record)}
          />
        </Row>
      ),
    },
  ];

  return (
    <Container>
      <Card className='mt-5 mb-5'>
        <Card.Body className='p-5'>
          <Card.Title>Cotizaciones</Card.Title>
          <Card.Text>
            {cart.length === 0 ? (
              <Col span={24}>
                <Row className='mt-5 mb-5' justify='center'>
                  <Empty description='No hay productos seleccionados' />
                </Row>
                <Row justify='center'>
                <Link to='/'>
                  <Button variant='warning'>Volver al Inicio</Button>
                </Link>
                </Row>
              </Col>
            ) : (
              <Col span={24}>
                <Table columns={columns} dataSource={cartItems} />
                <Row justify='space-between'>
                  <Link to='/'>
                    <Button variant='warning'>Volver al Inicio</Button>
                  </Link>
                  <Button variant='warning' onClick={clearCart}>
                    Vaciar Carro
                  </Button>
                  <Link to='/checkout'>
                    <Button variant='primary'>Cotizar productos</Button>
                  </Link>
                </Row>
              </Col>
            )}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default Carro;
