import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button } from 'reactstrap';
import Logo from '../assets/images/logo.png';
import {
  Route, 
  BrowserRouter as Router,
  Switch
} from "react-router-dom";
import Home from "./Home";

class Navigasibar extends Component{
  constructor(props){
    super(props)
    this.toggle = this.toggle.bind(this)
    this.state = {
      isOpen: false
    }
  }

  toggle(){
    this.setState({
      isOpen: !this.state.isOpen
    })
  }

  render(){
    return(
      <Router>
        <div>
          <Navbar color="light" light expand="md" className="border py-2 sticky-top">
            <NavbarBrand href="/">
              <img src={Logo} height="50" class="d-inline-block align-center pr-2" alt="uinBandung Mengoding" /> uinBandung Mengoding
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />        
            <Collapse isOpen={this.state.isOpen} navbar>              
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="/">Home</NavLink>
                </NavItem>                                      
                <NavItem>
                  <NavLink href="/">Kajian Koding</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">Santren Kilat</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">Mondok</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/">Tentang Kami</NavLink>
                </NavItem>
                <NavItem>
                  <Button outline color="primary" href="/">Login/Signup</Button>
                </NavItem>                   
              </Nav>               
            </Collapse>
          </Navbar>
          <Switch>              
              <Route exact path="/" component={Home}/>               
          </Switch>
        </div>
      </Router>
    )
  }

}

export default Navigasibar;