import React, { useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Image, ListGroup, Button, InputGroup } from 'react-bootstrap'
import Rating from '../components/Rating'
import axios from 'axios'   


function ArticleScreen({ match }) {

    const [article, setArticle] = useState([])
        
    useEffect(() => {

        async function fetchArticle(){
            const { data} = await axios.get(`/api/articles/${match.params.id}`)
            setArticle (data)

        }

        fetchArticle()
        
    })
    
    
    return (
        
        <div>
        <Link to='/articles' className='btn' my-3>Go back</Link>
        <Row>
            <Col md={6}>
                <Image src={article.image} alt={article.name} fluid rounded  />
            </Col>
            <Col md={3}>
                <ListGroup variant='flush'>
                    <ListGroup.Item>
                        <h3>{article.name}</h3>
                    </ListGroup.Item>
                    <ListGroup.Item>
                        <Rating value={article.rating} color={'#FFCA28'} />
                    </ListGroup.Item>
                    <ListGroup.Item>
                        
                        <p style={{fontFamily: 'DM Sans, sans-serif'}}>{article.tagline}</p>
                    </ListGroup.Item>

                </ListGroup>
            </Col>
            <Col md={3}>
            <ListGroup.Item style={{border:'none'}}>
                       <Button>Visit Website</Button>
                    </ListGroup.Item>
            </Col>
            <h6 style={{fontFamily: 'DM Sans, sans-serif'}}>Article Description</h6>
            <p style={{fontFamily: 'DM Sans, sans-serif'}}>{article.description}</p>
           
            
        </Row>
        <Row>
                <Col md={9}>
                <h6 style={{fontFamily: 'DM Sans, sans-serif'}}>Have you used {article.name} before?</h6>
                <InputGroup className='input-group'>
                <InputGroup.Radio aria-label="Yes"/>
                <InputGroup.Radio aria-label="No" />
                </InputGroup>
                </Col>
                <Col md={9}>
                <h6 style={{fontFamily: 'DM Sans, sans-serif'}}>How would you rate {article.name}?</h6>
                <Rating />
                </Col>
            </Row>
        </div>
    )
}

export default ArticleScreen