import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  return (
    <div>
      <style jsx>{`
                div {
                    background-color: orange;
                    font-family: Arial, Helvetica, sans-serif;
                }

                div h3 {
                    padding-left: 1em;
                    font-weight: lighter;
                    text-align: center;
                  }
            `}</style>
      <h2>{props.brand} {props.name}</h2>
      <h3>Grams of Sugar {props.sugarContent}</h3>
      <h3> ${props.price}</h3>
      <h3>{props.pints} pints left</h3>
     </div>
  );
}
Keg.propTypes = {
  name: PropTypes.string.isRequired,
  sugarContent: PropTypes.number.isRequired,
  brand: PropTypes.string,
  price: PropTypes.number.isRequired,
  pints: PropTypes.number.isRequired
};

export default Keg;
