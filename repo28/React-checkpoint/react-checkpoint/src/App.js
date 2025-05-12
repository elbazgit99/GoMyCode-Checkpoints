import React from 'react'; // Import React
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { Navbar, Container, Row, Col, Card, Button,Heading } from 'react-bootstrap'; // Import Bootstrap components

function App() {
  return (
    <>
      {/* Fragment */}
      <div className="App">
        {/* Navbar */}
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="#home">My React App</Navbar.Brand>
        </Navbar>

        {/* Heading */}
        <h1 className="text-center my-4">Welcome to My React App!</h1>

        {/* Cards */}
        <Container>
          <Row>
            {/* Card 1 */}
            <Col sm={12} md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>Card Title 1</Card.Title>
                  <Card.Text>
                    This is a description of the first card.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 2 */}
            <Col sm={12} md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>Card Title 2</Card.Title>
                  <Card.Text>
                    This is a description of the second card.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>

            {/* Card 3 */}
            <Col sm={12} md={4} className="mb-4">
              <Card>
                <Card.Body>
                  <Card.Title>Card Title 3</Card.Title>
                  <Card.Text>
                    This is a description of the third card.
                  </Card.Text>
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default App;
