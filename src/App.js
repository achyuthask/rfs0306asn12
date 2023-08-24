import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const fetchPhotos = async () => {
      try {
        let apiUrl = 'https://api.unsplash.com/photos/?client_id=IdWIxoIkmBv7yVTLK-CrDauCL95mCLwoq7sT6HMBu_c';

        if (searchQuery) {
          apiUrl = `https://api.unsplash.com/search/photos/?client_id=IdWIxoIkmBv7yVTLK-CrDauCL95mCLwoq7sT6HMBu_c&query=${searchQuery}`;
        } 

        const response = await axios.get(apiUrl);
        if (searchQuery) {
          setPhotos(response.data.results);
        } else {
          setPhotos(response.data);
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchPhotos();
  }, [searchQuery]);

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    // // <Container style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between" }}>
    // //   <h1>Gallery App</h1>
    // //   <input
    // //     type="text"
    // //     placeholder="Search..."
    // //     value={searchQuery}
    // //     onChange={handleSearchInputChange}
    // //   />

    
    // </Container>
<div >



    <Navbar expand="lg" className="bg-body-tertiary" bg="dark" data-bs-theme="dark">
    <Container fluid>
      <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
     
          
         
        
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            value={searchQuery}
        onChange={handleSearchInputChange}
          />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  <div style={{display:"flex",flexWrap:"wrap",justifyContent:"space-between"}}> 



   
    {photos.map((photo) => (
  <img src={photo.urls.small} alt={photo.alt_description} /> 
))}
 
  

  
  </div>

 

  </div>
  );
};

export default App;




