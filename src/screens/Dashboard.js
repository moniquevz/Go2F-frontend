import React, { useState, useEffect} from 'react'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product'
import Template from '../components/Template'
import Article from '../components/Article'
import axios from 'axios'



function Dashboard() {

    const [products, setProducts] = useState([])
        
    useEffect(() => {

        async function fetchProducts(){
            const { data} = await axios.get('/api/products/')
            setProducts (data)

        }

        fetchProducts()
        
    }, [])

    const [articles, setArticles] = useState([])
        
    useEffect(() => {

        async function fetchArticles(){
            const { data} = await axios.get('/api/articles/')
            setArticles (data)

        }

        fetchArticles()
        
    }, [])

    const [templates, setTemplates] = useState([])
        
    useEffect(() => {

        async function fetchTemplates(){
            const { data} = await axios.get('/api/templates/')
            setTemplates (data)

        }

        fetchTemplates()
        
    }, [])
    return (
        <div>
            <h1 className="heading">My Tools and Services</h1>
            <Row>
                            {products.map(product => (
                                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                    <Product product={product} />
                                </Col>
                            ))}
                        </Row>
                        <h1 className="heading">Saved Resources</h1>
            <Row>
                            {products.map(product => (
                                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                    <Product product={product} />
                                </Col>
                            ))}
                        </Row>
                        <h1 className="heading">Recommended Tools and Services</h1>
            <Row>
                            {products.map(product => (
                                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                    <Product product={product} />
                                </Col>
                            ))}
                        </Row>
                        <h1 className="heading">Recommended Templates</h1>
            <Row>
                            {templates.map(template => (
                                <Col key={template._id} sm={12} md={6} lg={4} xl={3}>
                                    <Template template={template} />
                                </Col>
                            ))}
                        </Row>
                        <h1 className="heading">Recommended Articles</h1>
            <Row>
                            {articles.map(article => (
                                <Col key={article._id} sm={12} md={6} lg={4} xl={3}>
                                    <Article article={article} />
                                </Col>
                            ))}
                            </Row>
        </div>
    )
}

export default Dashboard