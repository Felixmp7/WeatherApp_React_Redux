import React from "react";
import PropTypes from "prop-types";
import '../css/location.css'

const Location = ({location}) => {
  return (
    <div className="locationContainer">
        <h4 className="locationTitle">{location}</h4>
    </div>
  );
};

Location.propTypes = {
  location: PropTypes.string
};

export default Location;
