import { Card } from "react-bootstrap";
import { Link } from "react-router-dom"

const CardComponent = ({ product }) => {
    return (
        <Card className="my-3 p-3 rounded">
            <Link to={`/product/${product._id}`}>
                <Card.Img src={product.image} style={{ maxHeight: '10rem' }} variant="top" />
            </Link>
            <Card.Body>
                <Link style={{ textDecoration: 'none' }} to={`/product/${product._id}`}>
                    <Card.Title as="div" className="" >
                        <strong>Name:{product.name}</strong>
                    </Card.Title>
                </Link>

                <Card.Text as="h3">Rs-{product.price}</Card.Text>
                <Card.Text as="p">Description-{product.description}</Card.Text>
            </Card.Body>
        </Card>

    );
}
export default CardComponent;