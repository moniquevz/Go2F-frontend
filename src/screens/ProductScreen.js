import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, InputGroup } from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'   


function ProductScreen({ match }) {

    const [product, setProduct] = useState([])
        
    useEffect(() => {

        async function fetchProduct(){
            const { data} = await axios.get(`/api/products/${match.params.id}`)
            setProduct (data)

        }

        fetchProduct()
        
    })
    
    
    return (
        
        <div>
        <Link to='/dashboard' className='btn' my-3>Go back</Link>
        <Row>
            <Col md={6}>
                <Image src={product.image} alt={product.name} fluid rounded  />
            </Col>
            <Col md={3}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h3>{product.name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Rating value={product.rating} color={'#FFCA28'} />
                    </ListGroup.Item>
                    <ListGroup.Item>
                        
                        <p style={{fontFamily: 'DM Sans, sans-serif'}}>{product.tagline}</p>
                    </ListGroup.Item>

                </ListGroup>
            </Col>
            <Col md={3}>
            <ListGroup.Item style={{border:'none'}}>
                       <Button>Visit Website</Button>
                    </ListGroup.Item>
            </Col>
            <h6 style={{fontFamily: 'DM Sans, sans-serif'}}>Product Description</h6>
            <p style={{fontFamily: 'DM Sans, sans-serif'}}>{product.description}</p>
           
            
        </Row>
        <Row>
                <Col md={9}>
                <h6 style={{fontFamily: 'DM Sans, sans-serif'}}>Have you used {product.name} before?</h6>
                <InputGroup className='input-group'>
                <InputGroup.Radio aria-label="Yes"/>
                <InputGroup.Radio aria-label="No" />
                </InputGroup>
                </Col>
                <Col md={9}>
                <h6 style={{fontFamily: 'DM Sans, sans-serif'}}>How would you rate {product.name}?</h6>
                <Rating />
                </Col>
            </Row>
        </div>
    )
}

export default ProductScreen
