import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, InputGroup } from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'   


function TemplateScreen({ match }) {

    const [template, setTemplate] = useState([])
        
    useEffect(() => {

        async function fetchTemplate(){
            const { data} = await axios.get(`/api/templates/${match.params.id}`)
            setTemplate (data)

        }

        fetchTemplate()
        
    })
    
    
    return (
        
        <div>
        <Link to='/templates' className='btn' my-3>Go back</Link>
        <Row>
            <Col md={6}>
                <Image src={template.image} alt={template.name} fluid rounded  />
            </Col>
            <Col md={3}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h3>{template.name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Rating value={template.rating} color={'#FFCA28'} />
                    </ListGroup.Item>
                    <ListGroup.Item>
                        
                        <p style={{fontFamily: 'DM Sans, sans-serif'}}>{template.tagline}</p>
                    </ListGroup.Item>

                </ListGroup>
            </Col>
            <Col md={3}>
            <ListGroup.Item style={{border:'none'}}>
                       <Button>Visit Website</Button>
                    </ListGroup.Item>
            </Col>
            <h6 style={{fontFamily: 'DM Sans, sans-serif'}}>template Description</h6>
            <p style={{fontFamily: 'DM Sans, sans-serif'}}>{template.description}</p>
           
            
        </Row>
        <Row>
                <Col md={9}>
                <h6 style={{fontFamily: 'DM Sans, sans-serif'}}>Have you used {template.name} before?</h6>
                <InputGroup className='input-group'>
                <InputGroup.Radio aria-label="Yes"/>
                <InputGroup.Radio aria-label="No" />
                </InputGroup>
                </Col>
                <Col md={9}>
                <h6 style={{fontFamily: 'DM Sans, sans-serif'}}>How would you rate {template.name}?</h6>
                <Rating />
                </Col>
            </Row>
        </div>
    )
}

export default TemplateScreen
