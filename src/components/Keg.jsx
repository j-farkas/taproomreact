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
                    padding-left: 2em;
                    font-weight: lighter;
                    text-align: center;
                    margin-left: 10px;
                  }
                  div h2 {
                      padding-left: 2em;
                      font-weight: lighter;
                      text-align: center;
                      margin-left: 50px;
                      font-weight: bold;
                    }
              .Sugary{
                background-color: red;
              }
              .Low{
                font-weight: bold;
                text-decoration: underline;
              }
              button{
                height: auto;
                width: 50px;
                margin-top: 50px;
                float: right;
              }
              *.edit{
                float: left;
              }
              .Hidden{
                display:none;
              }
            `}</style>
      <span className = {this.location.hash.includes('low') && props.pints > 10 ? 'Hidden' : null }>
        <button className = {props.name}> Sell a pint</button>
        <button className = '"edit " + {props.name}'> Edit Keg</button>
        <h2>{props.brand} {props.name}</h2>
        <h3> Price: ${props.price} | Grams of Sugar {props.sugarContent}</h3>
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
