import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

import "bootstrap/dist/css/bootstrap.min.css";
const MovieCard = (props) => {
    return ( <div className="movieCont">{props.movies.map((el,id) => <div key={id}  className="container">


    
      <h1>{el.title}</h1>
<p>{el.description}</p>
<img src={el.posterurl} alt="fff"/><br/>
<span id="rate">{el.rate}</span>
<span> <div className="rating">
<span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
</div></span> 





         </div> 
    
    
    
    )}

    </div> );
}
 
export default MovieCard;




{/* <CardDeck className="container" >
  <Card className="movieCard">
    <Card.Img variant="top"  src={el.posterurl} style ={{ width:'100px'}}data-src="holder.js/100px160"  />
    <Card.Body>
      <Card.Title>{el.title}</Card.Title>
      <Card.Text>
      {el.description}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small className="text-muted">
      <div className="rating">
<span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
</div>
      </small>
    </Card.Footer>
  </Card>
</CardDeck> */}