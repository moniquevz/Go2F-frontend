import React from 'react'
import { Card } from 'react-bootstrap'
import Save from './Save'
import { Link } from 'react-router-dom'

function Article ({ article }) {

    
    const styles = {
        card:{
            alignItems: 'center',
            justifyContent: 'centre',
            
        },
        cardImage: {
        objectFit: 'contain',
        width: '15vw',
        height: '20vh'
    },
    articleName:{
        color:'black',
        textDecoration: "none"
        
        
    }, 
    articleText:{
        fontFamily: 'DM Sans, sans-serif',
        fontSize: '0.8rem',
        justifyContent: "around"

    },
    
}
    return (
       <Card className ='my-3 p-3 thumbnail' style={styles.card}>

           <Link to={`/article/${article._id}`}>
           
           <Card.Img src={article.image} style={styles.cardImage} />
           
           </Link>
           <Card.Body>
           <Link to={`/product/${article._id}`} style={styles.articleName}>
               <Card.Title as='div' >
                   <strong >{article.name}</strong>
               </Card.Title>
           </Link>
           
           <Card.Text as= 'div' className='my-3' style={styles.articleText}>
           <div>{article.author} <Save value={article.save} color={'#FFCA28'} /></div>
               
                </Card.Text> 
                
                     
        
           </Card.Body>
          
       </Card>
    )
}

export default Article