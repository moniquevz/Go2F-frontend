import React, { useState, useEffect} from 'react'
import { Row, Col } from 'react-bootstrap'
import Template from '../components/Template'

import axios from 'axios'



function Templates() {

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
            <h1 className="heading">Recommended Templatess</h1>
            <Row>
                            {templates.map(template => (
                                <Col key={template._id} sm={12} md={6} lg={4} xl={3}>
                                    <Template template={template} />
                                </Col>
                            ))}
                        </Row>
           
        </div>
    )
}

export default Templates
