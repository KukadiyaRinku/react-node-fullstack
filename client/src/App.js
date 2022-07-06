import './css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { Col, Container, Row, ListGroup } from "reactstrap";
import Home from './pages/Home';
import ViewUser from './pages/ViewUser';
import AddUser from './pages/AddUser';
import AboutUs from './pages/AboutUs';
import NotFound from './pages/NotFound';
import Header from "./componant/Header.js"

function App() {
  return (
    <>
      <Router>
        <Container>
          <Header></Header>
          <Row>
            <Col md={2}>
              <ListGroup>
                <Link className="list-group-item list-group-item-action" tag="a" to="/" >Home</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="/view-user" >View User</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="/add-user" >Add User</Link>
                <Link className="list-group-item list-group-item-action" tag="a" to="/about-us" >About</Link>
              </ListGroup>
            </Col>
            <Col md={8}>
              <Routes>
                <Route path="/" element={<Home />} ></Route>
                <Route path="/view-user" element={<ViewUser />} ></Route>
                <Route path="/add-user" element={<AddUser />} ></Route>
                <Route path="/about-us" element={<AboutUs />}></Route>
                <Route path="/*" element={<NotFound />}></Route>
              </Routes>
            </Col>
          </Row>
        </Container>
      </Router>

    </>
  );
}

export default App;
