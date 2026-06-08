import { useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import NavDropdown from 'react-bootstrap/NavDropdown';

import './App.css'

function App() {
  const [data, setData] = useState([])


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments").then((response) => {
      response.json().then((comment) => {
        setData(comment)



      })
    })
  }, [])

  console.log(data)


  return (
    <>
      <Navbar expand="md" className="bg-success">
        <Container>
          <Navbar.Brand href="#home">Facebook</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Comments</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="container-fluid bg-dark">
        <h1 className=' text-center text-light'>Comments</h1>
        <div className="row g-5 p-5">
          {data.map((item, index) => (
            <div key={index} className="col-md-3">
              <Card className='shadow-lg' style={{ width: '100%', height: "350px" }}>
                <Card.Body>
                  <Card.Text> <strong>Post ID:</strong>  {item.postId}</Card.Text>
                  <Card.Text> <strong>ID:</strong> {item.id}</Card.Text>
                  <Card.Text> <strong>Name:</strong>  {item.name}</Card.Text>
                  <Card.Text> <strong>Email:</strong> {item.email}</Card.Text>
                  <Card.Text> <strong>Body:</strong> {item.body}</Card.Text>
                </Card.Body>
              </Card>
            </div>

          ))}


        </div>
      </div>


    </>
  )
}

export default App
