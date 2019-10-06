import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";
import Materialize from "materialize-css/dist/js/materialize.min.js";
class Header extends Component {
  componentDidMount() {
    Materialize.Sidenav.init(document.querySelector("#mobile-nav"), {
      edge: "left",
      inDuration: 250
    });

    Materialize.Modal.init(document.querySelectorAll(".modal"));

    Materialize.ScrollSpy.init(document.querySelectorAll(".scrollspy"), {
      scrollOffset: 0
    });
  }

  // Render Navigation Links on Main Navbar

  renderNavItems() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <Fragment>
            <li>
              <a href="#root">Home</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
            <li>
              <a
                href="#login-modal"
                className="waves-effect waves-light modal-trigger show-on-large social"
              >
                Sign In
                <i className="material-icons left">account_circle</i>
              </a>
            </li>
          </Fragment>
        );

      default:
        return (
          <Fragment>
            <li>
              <a>
                <Payments />
              </a>
            </li>
            <li>
              <a href="/Dashboard">Dashboard</a>
            </li>
            <li>
              <a href="/Surveys">Surveys</a>
            </li>
            <li>
              <a href="/Credits">Credits</a>
            </li>
            <li>
              <a href="/api/logout">Logout</a>
            </li>
          </Fragment>
        );
    }
  }

  // Render Navigation Links on Side Nav
  renderSideNavItems() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <Fragment>
            <li>
              <div className="user-view primary-overlay">
                <div className="background ">
                  <img
                    src="/images/showcase.jpg"
                    alt=""
                    className="responsive-img"
                  />
                </div>
                <a>
                  <span className="name white-text">
                    Emaily Solutions Corp © 2019
                  </span>
                </a>
                <a>
                  <span className="name white-text">
                    Provide Feedback with a click of a button
                  </span>
                </a>
                <br />
              </div>
            </li>
            <li>
              <a href="#root" className="sidenav-close">
                <i className="sidenav-margin material-icons">home</i>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="sidenav-close">
                <i className="sidenav-margin material-icons">person</i>
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="sidenav-close">
                <i className="sidenav-margin material-icons">contact_phone</i>
                Contact
              </a>
            </li>
            <li>
              <div className="divider" />
            </li>
            <li>
              <a className="subheader">Account</a>
            </li>
            <li>
              <a href="#login-modal" className="modal-trigger">
                <i className="sidenav-margin material-icons purple-text">
                  account_circle
                </i>
                Sign In
              </a>
            </li>
          </Fragment>
        );

      default:
        return (
          <Fragment>
            <li>
              <div className="user-view">
                <div className="background ">
                  <img
                    src="/images/header-loggedin.jpeg"
                    alt=""
                    className="responsive-img"
                  />
                </div>

                <a>
                  <span className="name white-text">
                    Emaily Solutions Corp © 2019
                  </span>
                </a>
                <a>
                  <span className="name white-text">
                    {this.props.auth.displayName}
                  </span>
                </a>
                <a>
                  <span className="email white-text">
                    Credits: {this.props.auth.credits}
                  </span>
                </a>
              </div>
            </li>
            <li>
              <Link to="/dashboard" className="sidenav-close">
                <i className="sidenav-margin material-icons">dashboard</i>
                Dashboard
              </Link>
            </li>
            <li>
              <a href="/credits" className="sidenav-close">
                <i className="sidenav-margin material-icons">attach_money</i>
                Credits
              </a>
            </li>
            <li>
              <Link to="/surveys" className="sidenav-close">
                <i className="sidenav-margin  material-icons">email</i>
                Surveys
              </Link>
            </li>
            <li>
              <div className="divider" />
            </li>
            <li>
              <a className="subheader">Account Controls</a>
            </li>
            <li>
              <a href="/api/logout">
                <i className="sidenav-margin material-icons purple-text">
                  account_circle
                </i>
                Logout
              </a>
            </li>
          </Fragment>
        );
    }
  }

  // Render Showcase
  renderShowcase() {
    return (
      <div className="showcase container">
        <div className="row">
          <div className="col s12 main-text show-in">
            <h5>You found the right place to...</h5>
            <h1>Rediscover and Grow</h1>
            <p className="flow-text">
              Emaily Solutions helps your customers to give reviews and provide
              valuable feedback via emails.
            </p>
            <br />
            <a
              href="#about"
              className="btn btn-large white black-text hide-on-small-and-down"
            >
              Learn More
            </a>
            <a href="#contact" className="white-text">
              <i className="material-icons medium scroll-icon">
                arrow_drop_down_circle
              </i>
            </a>
          </div>
        </div>
      </div>
    );
  }

  // Render Modal for Login
  renderModal() {
    return (
      <div id="login-modal" className="modal">
        <div className="modal-content center">
          <h4>Account Login</h4>
          <p>Login using one of the methods listed below</p>
          <div className="container">
            <div className="row">
              <a
                className="waves-effect waves-light btn social google"
                href="/auth/google"
              >
                <i className="fa fa-google left" /> Sign in with google
              </a>
            </div>
            <div className="row">
              <a
                className="waves-effect waves-light btn social facebook"
                id="facebook-link"
                onClick={() =>
                  alert(
                    "Facebook Login is under construction. Log in using Google."
                  )
                }
                href="#"
              >
                <i className="fa fa-facebook left" /> Sign in with facebook
              </a>
            </div>
            <div className="row">
              <a
                className="waves-effect waves-light btn social github"
                id="facebook-link"
                onClick={() =>
                  alert(
                    "GitHub Login is under construction. Log in using Google."
                  )
                }
                href="#"
              >
                <i className="fa fa-github left" /> Sign in with github
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }

  render() {
    //let mainHeader = document.getElementsByClassName('main-header');
    //let primaryOverlay = document.getElementsByClassName('primary-overlay');
    //let mobNavBar = document.getElementsByClassName('transparent');
    return (
      <React.Fragment>
        <header className={this.props.auth ? "" : "main-header"}>
          <div className={this.props.auth ? "" : "primary-overlay"}>
            <nav
              className={
                this.props.auth ? "navbar-fixed dark-grey" : "transparent"
              }
            >
              <div className="container">
                <div className="nav-wrapper">
                  <Link
                    to={this.props.auth ? "/Dashboard" : "/"}
                    className="brand-logo"
                  >
                    EmailySolutions
                  </Link>
                  <a
                    href="#"
                    data-target="mobile-nav"
                    className="button-collapse sidenav-trigger show-on-small-and-down"
                  >
                    <i className="material-icons">menu</i>
                  </a>

                  <ul className="right hide-on-med-and-down">
                    {this.renderNavItems()}
                  </ul>
                </div>
              </div>
            </nav>

            <ul className="sidenav" id="mobile-nav">
              {this.renderSideNavItems()}
            </ul>
            {this.props.auth ? null : this.renderShowcase()}
          </div>
        </header>
        {this.renderModal()}
      </React.Fragment>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
