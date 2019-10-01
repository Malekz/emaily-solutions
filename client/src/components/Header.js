import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";
import { Navbar, Nav } from "react-bootstrap";

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <Nav.Link as="li">
            {" "}
            <a href="/auth/google"> Login </a>
          </Nav.Link>
        );

      default:
        return (
          <Fragment>
            <Nav.Link as="li">
              <Payments />
            </Nav.Link>
            <Nav.Link as="li" style={{ color: "white" }}>
              Credits: {this.props.auth.credits}
            </Nav.Link>
            <Nav.Link as="li">
              <a className="my-hover" href="/api/logout">
                Log Out
              </a>
            </Nav.Link>
          </Fragment>
        );
    }
  }
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>
          <Link to={this.props.auth ? "/surveys" : "/"}>Emaily Solutions</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse
          className="justify-content-end"
          id="responsive-navbar-nav"
        >
          <Nav>
            <Nav.Item as="ul">{this.renderContent()}</Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
