import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import Save from './Save'
import { Link } from 'react-router-dom'

function Template ({ template }) {

    
    const styles = {
        card:{
            alignItems: 'center',
            justifyContent: 'centre',
            
        },
        cardImage: {
        objectFit: 'contain',
        width: '10vw',
        height: '15vh'
    },
    templateName:{
        color:'black',
        textDecoration: "none"
        
        
    }, 
    templateText:{
        fontFamily: 'DM Sans, sans-serif',
        fontSize: '0.8rem',
        justifyContent: "around"

    },
    cardFooter:{
        fontFamily: 'DM Sans, sans-serif',
        fontSize: '0.8rem',
        padding: '0',
        backgroundColor:'transparent',
        border: 'none'



    }
}
    return (
       <Card className ='my-3 p-3 rounded' style={styles.card}>

           <Link to={`/template/${template._id}`}>
           
           <Card.Img src={template.image} style={styles.cardImage} />
           
           </Link>
           <Card.Body>
           <Link to={`/template/${template._id}`} style={styles.templateName}>
               <Card.Title as='div' >
                   <strong >{template.name}</strong>
               </Card.Title>
           </Link>
           <Card.Text as="div">
                    <div className="my-3">
                        <Rating value={template.rating} color={'#FFCA28'} />
                    </div>
                </Card.Text>
           <Card.Text as= 'div' className='my-3' style={styles.templateText}>
           <div>{template.description}</div>
               
                </Card.Text> 
                
           <Card.Footer as= 'div'  style={styles.cardFooter}>   
               
                <div>
                <span>{template.price}</span> <span>{template.tag}</span><Save/>
                    </div>
             
           </Card.Footer>
          
        
           </Card.Body>
          
       </Card>
    )
}

export default Template
