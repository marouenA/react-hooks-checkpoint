// import React,{useState} from 'react';
// import {Button,Modal,Form} from 'react-bootstrap';
// const AddMovie = () => {
//   const [smShow, setSmShow] = useState(false);
//   return ( 
//     <>
//       <Button variant="outline-primary" onClick={() => setSmShow(true)}>Add Movie</Button>{' '}
//       <Modal
//         size="sm"
//         show={smShow}
//         onHide={() => setSmShow(false)}
//         aria-labelledby="example-modal-sizes-title-sm"
//       >
//         <Modal.Header closeButton>
//           <Modal.Title id="example-modal-sizes-title-sm">
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//         <Form>
//             <Form.Group controlId="formGroupEmail">
//               <Form.Label>Title</Form.Label>
//               <Form.Control type="Title" placeholder="Title" />
//             </Form.Group>
//             <Form.Group controlId="formGroupPassword">
//               <Form.Label>Description</Form.Label>
//               <Form.Control type="text" placeholder="Description" />
//             </Form.Group>
//             <Form.Group controlId="formGroupPassword">
//               <Form.Label>Poster_Url</Form.Label>
//               <Form.Control type="link" placeholder="Poster_Url" />
//             </Form.Group>
//       </Form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="primary" >
//             Reset
//           </Button>
//           <Button variant="primary" >
//             Add
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     </>
//    );
// }
 
// export default AddMovie;