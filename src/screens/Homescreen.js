import { Col, Row } from 'react-bootstrap'
import products from '../products.js';
import CardComponent from '../components/CardComponent.js';
import ProductCarousel from '../components/ProductCarousel.js';
const Homescreen = () => {

    return (

        <>
            <h1 style={{ marginBottom: '30px' }}>Latest Product</h1>
            <ProductCarousel />
            <Row>
                {products.map((product) => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <CardComponent product={product} />
                    </Col>
                ))}
            </Row>
        </>

    )
}

export default Homescreen;