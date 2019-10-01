import React from "react";
import { Jumbotron, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComments,
  faBullhorn,
  faTree
} from "@fortawesome/free-solid-svg-icons";

const comments = (
  <FontAwesomeIcon className="p-4" icon={faComments} size="9x" />
);
const bullhorn = (
  <FontAwesomeIcon className="p-4" icon={faBullhorn} size="9x" />
);
const tree = <FontAwesomeIcon className="p-4" icon={faTree} size="9x" />;

const Landing = () => {
  return (
    <div>
      <Jumbotron style={{ backgroundColor: "yellow" }} className="center">
        <h1 className="font-weight-bold pb-5">
          Remove the pain out of campaigning!
        </h1>
        <h3 className="pb-5">
          Get started with the future of campaigning with a smarter all-in-one
          marketing platform.
        </h3>
        <p>
          <Button
            href="/auth/google"
            size="lg"
            style={{
              backgroundColor: "#343a40",
              fontSize: "25px",
              paddingBottom: "40px"
            }}
          >
            Sign up
          </Button>
        </p>
      </Jumbotron>
      <div className="container">
        <h2 className="center">
          What you can do with <br />
          Emaily Solutions
        </h2>
        <div className="row center">
          <div className="col-md-4">
            {comments}
            <h3>Create unique campaigns</h3>
            <p>Spread the word however you like and with whomever you like.</p>
          </div>
          <div className="col-md-4">
            {bullhorn}
            <h3>Reach your audience</h3>
            <p>Know who you're talking so you can say the right things.</p>
          </div>
          <div className="col-md-4">
            {tree}
            <h3>Turn data into insights</h3>
            <p>
              Identify actionable next steps from your data and optimise your
              efforts.
            </p>
          </div>
        </div>
        <p
          style={{
            width: "200px",
            fontSize: "30px",
            margin: "auto",
            textAlign: "center",
            backgroundColor: "#343a40",
            padding: "5px 10px"
          }}
        >
          <a
            style={{ textDecoration: "none", color: "white" }}
            href="/auth/google"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Landing;
