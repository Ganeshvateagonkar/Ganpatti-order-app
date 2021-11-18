
import { Button, Col, Row, Card, Image, ListGroup, ListGroupItem } from 'react-bootstrap'
import products from '../products';
const CartScreen = ({ history }) => {
    const submitHandler = () => {
        history.push('/shipping');
    };


    return (
        <div>

            <Row>

                <Col md={8} className="left">


                    <ListGroup variant='flush'>

                        <ListGroupItem >

                            <Row>

                                <Col md={2}>
                                    <Image src={products[1].image} alt="loading" fluid rounded />
                                </Col>
                                <Col md={4}>
                                    <p><strong className="bold">Name:</strong>{products[1].name}</p>
                                    <p><strong className="bold">price:</strong>Rs-{products[1].price}</p>
                                </Col>

                            </Row>

                        </ListGroupItem>

                    </ListGroup>

                </Col>

                <Col md={4}>

                    <ListGroup>
                        <ListGroupItem>

                            <p><strong className="bold">Amount to be paid:</strong>Rs-{products[1].price}</p>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Button
                                type='button'
                                className='btn-block'
                                onClick={submitHandler}
                            >Proceed to checkout</Button>
                        </ListGroupItem>
                    </ListGroup>


                </Col>


            </Row>


        </div>
    )
}

export default CartScreen;