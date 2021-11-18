import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Carousel, Image } from 'react-bootstrap'

import ProductCarousels from '../productCarousels.js'


const ProductCarousel = () => {
    return (
        <Carousel pause='hover' className='bg-dark'>
            {ProductCarousels.map((product) => (
                <Carousel.Item key={product._id}>
                    <Link to={`/product/${product._id}`}>
                        <Image src={product.image} alt={product.name} fluid />
                        <Carousel.Caption className='carousel-caption'>
                            <h2 style={{ color: 'white' }}>
                                {product.name} (Rs-{product.price})
                            </h2>
                        </Carousel.Caption>
                    </Link>
                </Carousel.Item>
            ))}
        </Carousel>
    )
}

export default ProductCarousel;