import { Link } from 'react-router-dom';
import products from '../products.js';
import { Row, Col, Form, Button, ListGroupItem, Image, FormControl, FormGroup, ListGroup, Card, FormLabel } from 'react-bootstrap';
const PlaceOrderScreen = () => {

    return (
        <>
            <Row>
                <Col md={8}>
                    <ListGroup variant="flush">
                        <ListGroupItem>
                            <h2>Shipping</h2>
                            <p>
                                <strong>Address :</strong>
                                Nigadi ,pune,Maharashtra,413527
                            </p>
                        </ListGroupItem>
                        <ListGroupItem>
                            <h2>Payment Method</h2>
                            <strong>Method:</strong>
                            Paypal
                        </ListGroupItem>
                        <ListGroupItem>
                            <h2>Order Items</h2>

                            <ListGroup variant="flush">

                                <ListGroupItem >
                                    <Row>
                                        <Col md={1}>
                                            <Image src={products[0].image} alt="loading" fluid rounded />
                                        </Col>
                                        <Col>
                                            <Link style={{ textDecoration: 'none' }} >{products[0].name}</Link>
                                        </Col>
                                        <Col md={4}>
                                            4 x Rs-300=Rs-{4 * 300}
                                        </Col>
                                    </Row>
                                </ListGroupItem>

                            </ListGroup>

                        </ListGroupItem>
                    </ListGroup>
                </Col>
                <Col md={4}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroupItem>
                                <h2>Order Summary</h2>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Row>
                                    <Col>Items</Col>
                                    <Col>Rs-1200</Col>
                                </Row>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Row>
                                    <Col>Shipping</Col>
                                    <Col>Rs-100</Col>
                                </Row>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Row>
                                    <Col>Tax</Col>
                                    <Col>Rs-50</Col>
                                </Row>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Row>
                                    <Col>Total</Col>
                                    <Col>Rs-1350</Col>
                                </Row>
                            </ListGroupItem>

                            <ListGroupItem>
                                <Button
                                    type="button"
                                    className="btn-block"

                                >Place Order</Button>
                            </ListGroupItem>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        </>
    );
}

export default PlaceOrderScreen;