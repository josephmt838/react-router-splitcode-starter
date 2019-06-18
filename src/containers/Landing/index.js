import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Landing = (props) => {
  return (
    <div>
      Landing
      <Link to="/notfound">404</Link>
    </div>
  );
};

Landing.propTypes = {};

export default Landing;
