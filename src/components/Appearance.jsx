import React from 'react';
import PropTypes from 'prop-types';

function Appearance(props) {
  return (
    <div>
      <style jsx>{`
          div {
            background-color: green;
            font-family: Arial, Helvetica, sans-serif;
          }

          div h3 {
            padding-left: 1em;
            font-weight: lighter;
          }
          `}</style>
      <h2>{props.day}</h2>
      <h3>{props.location}</h3>
      <h3>Booth # {props.booth} from {props.hours}</h3>
      <hr />
    </div>
  );
}

Appearance.propTypes = {
  day: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  hours: PropTypes.string.isRequired,
  booth: PropTypes.string.isRequired,
};

export default Appearance;