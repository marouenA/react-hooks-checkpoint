import React, { useState } from "react";
import MovieCard from "./MovieCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {Button,Modal,Form, FormControl} from 'react-bootstrap';


const Movielist = () => {
  const [list, setList] = useState([
    {
      title: "Pulp Fiction ",
      description:
        "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      posterurl:
        "https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg",
      rate: 5,
    },
    {
      title: "Django Unchained",
      description:
        "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.",
      posterurl:
        "https://fr.web.img6.acsta.net/medias/nmedia/18/90/08/59/20366454.jpg",
      rate: 4,
    },
    {
      title: "Fight Club",
      description:
        "An insomniac office worker and a devil-may-care soapmaker form an underground fight club that evolves into something much, much more.",
      posterurl:
        "https://m.media-amazon.com/images/M/MV5BMmEzNTkxYjQtZTc0MC00YTVjLTg5ZTEtZWMwOWVlYzY0NWIwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg",
      rate: 5,
    },
    {
      title: "Inception",
      description:
        "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      posterurl:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UY209_CR0,0,140,209_AL_.jpg",
      rate: 3,
    },
    {
      title: "Inception",
      description:
        "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      posterurl:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UY209_CR0,0,140,209_AL_.jpg",
      rate:1,
    },
    {
      title: "Inception",
      description:
        "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      posterurl:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UY209_CR0,0,140,209_AL_.jpg",
      rate: 2,
    },
    {
      title: "Inception",
      description:
        "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      posterurl:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_UY209_CR0,0,140,209_AL_.jpg",
      rate: 3,
    },
    {
      title: "Django Unchained",
      description:
        "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.",
      posterurl:
        "https://fr.web.img6.acsta.net/medias/nmedia/18/90/08/59/20366454.jpg",
      rate: 4,
    },
    {
      title: "Pulp Fiction ",
      description:
        "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      posterurl:
        "https://upload.wikimedia.org/wikipedia/en/3/3b/Pulp_Fiction_%281994%29_poster.jpg",
      rate: 3,
    },
    {
      title: "Django Unchained",
      description:
        "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.",
      posterurl:
        "https://fr.web.img6.acsta.net/medias/nmedia/18/90/08/59/20366454.jpg",
      rate: 5,
    },
    
  ]);


  const [show, setShow] = useState(false);


  // filter with search bar
  const [searchlist, setSearchlist] = useState(list);
  const [empty, setEmpty] = useState(true);

// filter with rate
  const [searchRate, setSearchRate] = useState(list);
  const [starclicked, setStarclicked] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const search = (e) => {

    let tab = []
if(!starclicked)

tab = searchRate.filter(el => el.title.toLowerCase().includes(e.target.value.toLowerCase()))
else 
tab = list.filter(el => el.title.toLowerCase().includes(e.target.value.toLowerCase()))

setSearchlist(tab)
console.log(tab)
if (e.target.value.length > 0) setEmpty(false)
else setEmpty(true)

  }


const rateFn = (e) => {
let tab2=[]
let x = e.target.value
console.log(x)
if(!empty)
tab2=searchlist.filter(el => el.rate == x) 
else 
tab2=list.filter(el => el.rate == x) 

setSearchRate(tab2)
console.log(tab2)
setStarclicked(true)
}





const AddMovie = () => {
const nv = {}

  Object.assign(nv , {

title : document.getElementById("newTitle").value,
description : document.getElementById("newDescription").value,
posterurl : document.getElementById("newUrl").value,
rate : document.getElementById("newRate").value,

  })

  setList([...list, nv ])

}





  return (

    <div className="movieListCont" >
      <input placeholder="serach movie by title"onChange={search} />
<table>
<tr>
  <td><input 
  value="1"
  type="image"
  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/1200px-Five-pointed_star.svg.png"
  style={{width:"20px", height:"20px"}}
  onClick={rateFn}
  /></td>
   <td><input 
  value="2"
  type="image"
  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/1200px-Five-pointed_star.svg.png"
  style={{width:"20px", height:"20px"}}
  onClick={rateFn}
  /></td>
   <td><input 
  value="3"
  type="image"
  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/1200px-Five-pointed_star.svg.png"
  style={{width:"20px", height:"20px"}}
  onClick={rateFn}
  /></td>
   <td><input 
  value="4"
  type="image"
  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/1200px-Five-pointed_star.svg.png"
  style={{width:"20px", height:"20px"}}
  onClick={rateFn}
  /></td> <td><input 
  value="5"
  type="image"
  src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Five-pointed_star.svg/1200px-Five-pointed_star.svg.png"
  style={{width:"20px", height:"20px"}}
  onClick={rateFn}
  /></td>
</tr>


</table>


        <Button variant="primary" onClick={handleShow}>
        Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <span>Movie Title</span><br/>
<input id="newTitle"></input><br/>
<span>Movie description</span><br/>
<input id="newDescription"></input><br/>
<span>Image url</span><br/>
<input id="newUrl"></input><br/>
<span> Movie rate</span><br/>
<input id="newRate" ></input>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={AddMovie}>
           Add
          </Button>
        </Modal.Footer>
      </Modal>






        <MovieCard movies={
(empty && !starclicked) ? list : (!empty && !starclicked) ? searchlist : (empty && starclicked) ? searchRate : searchlist } />
      
    </div>
  );
};

export default Movielist;
