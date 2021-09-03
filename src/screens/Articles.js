import React, { useState, useEffect} from 'react'
import { Row, Col } from 'react-bootstrap'
import Article from '../components/Article'
import axios from 'axios'


function Articles() {
    const [articles, setArticles] = useState([])
        
    useEffect(() => {

        async function fetchArticles(){
            const { data} = await axios.get('/api/articles/')
            setArticles (data)

        }

        fetchArticles()
        
    }, [])
    return (
        <div>
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

export default Articles
