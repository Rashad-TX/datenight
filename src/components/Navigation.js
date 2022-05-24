import React from 'react';
import { Navbar} from 'react-bootstrap';



 const Navigation = () => {
  return (
    <Navbar sticky="top" expand="md" className="myNavbar">
      <Navbar.Brand className="myNav">
        <img src="assets/logo2.png" className="myLogo" width="250px" height="200px" />
      </Navbar.Brand>
        </Navbar>
  );
}

export default Navigation;