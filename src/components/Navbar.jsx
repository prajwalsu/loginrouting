import React from 'react'
import { Nav } from 'react-bootstrap'
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <div>
            <Nav defaultActiveKey="/home" as="ul">
      <Nav.Item as="li">
        <Nav.Link href="/home"><Link to="/">Home</Link></Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-1"><Link to="/login">Login</Link></Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link eventKey="link-2"><Link to="/signup">signup</Link></Nav.Link>
      </Nav.Item>
    </Nav>
        </div>
    )
}

export default Navbar
