import React from 'react';
import PropTypes from 'prop-types';

function Keg(props) {
  return (
    <div className = {props.sugarContent > 20 ? 'Sugary' : null}>
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
              .Sugary{
                background-color: red;
              }
              .Low{
                font-weight: bold;
                text-decoration: underline;
              }
              button{
                height: 50px;
                width: 50px;
                margin-top: 50px;
                float: right;
              }
              .Hidden{
                display:none;
              }
            `}</style>
      <span className = {this.location.hash.includes('low') && props.pints > 10 ? 'Hidden' : null }>
        
        <button className = {props.name}> Sell a pint</button>
        <h2>{props.brand} {props.name}</h2>
        <h3>Grams of Sugar {props.sugarContent}</h3>
        <h3> ${props.price}</h3>
        <h3 className = {props.pints < 10 ? 'Low' : null}>{props.pints} pints left</h3>
      </span>
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
