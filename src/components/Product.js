import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from './Rating'
import Save from './Save'
import { Link } from 'react-router-dom'

function Product ({ product }) {

    
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
    productName:{
        color:'black',
        textDecoration: "none"
        
        
    }, 
    productText:{
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

           <Link to={`/product/${product._id}`}>
           
           <Card.Img src={product.image} style={styles.cardImage} />
           
           </Link>
           <Card.Body>
           <Link to={`/product/${product._id}`} style={styles.productName}>
               <Card.Title as='div' >
                   <strong >{product.name}</strong>
               </Card.Title>
           </Link>
           <Card.Text as="div">
                    <div className="my-3">
                        <Rating value={product.rating} color={'#FFCA28'} />
                    </div>
                </Card.Text>
           <Card.Text as= 'div' className='my-3' style={styles.productText}>
           <div>{product.description}</div>
               
                </Card.Text> 
                
           <Card.Footer as= 'div'  style={styles.cardFooter}>   
               
                <div>
                <span>{product.price}</span> <span>{product.tag}</span><Save value={product.save} color={'#FFCA28'} />
                    </div>
             
           </Card.Footer>
          
        
           </Card.Body>
          
       </Card>
    )
}

export default Product
