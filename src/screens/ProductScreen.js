import { useParams } from "react-router-dom";
import products from "../products";
import { Button, Col, Row, Image, ListGroup, ListGroupItem } from 'react-bootstrap';

const ProductScreen = ({ history }) => {
    const { id } = useParams();

    const onClickhandler = () => {
        history.push('/cart')
    }
    return (
        <Row>
            <Col md={3}>
                <Image src={products[id].image} fluid rounded />

            </Col>
            <Col >
                <p><strong className="bold">Name :</strong>{products[id].name}</p>
                <p><strong className="bold">Price:</strong>Rs-{products[id].price}</p>
                <p><strong className="bold">Description :</strong>Ganesha, also spelled Ganesh, also called Ganapati, elephant-headed Hindu god of beginnings, who is traditionally worshipped before any major enterprise and is the patron of intellectuals, bankers, scribes, and authors. ... Like a rat and like an elephant, Ganesha is a remover of obstacles.</p>

            </Col>
            <Col md={4}>
                <ListGroup>
                    <ListGroupItem>
                        <Button onClick={onClickhandler}>
                            Add To Cart
                        </Button>

                    </ListGroupItem>

                </ListGroup>
            </Col>

        </Row>
    );
}
export default ProductScreen;