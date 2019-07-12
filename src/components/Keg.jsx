import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Keg(props) {

  return (
    <div className = 'outer'>
      <style jsx>{`
              div {
                  background-color: orange;
                  font-family: Arial, Helvetica, sans-serif;
                  border-top: black solid 1px;
                  border-right: black solid 1px;
                  border-left: black solid 1px;
              }
              div h3 {
                  font-weight: lighter;
                  text-align: center;

              }
              h2 {
                  font-weight: lighter;
                  text-align: center;
                  font-weight: bold;
              }
              .Sugary{
                background-color: red;
              }
              *.outer{
                border: none;
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
              *.Hidden{
                display:none;
              }
            `}</style>
      {props.availableKegs.map((keg, index) =>
        <span className = {window.location.href.split('/')[5] === ('low') && keg.pints > 10 ? 'Hidden' : null }>
          <div className = {keg.sugarContent > 20 ? 'Sugary' : null}>
            <button onClick={() => props.sellPint(index)}> Sell a pint</button>
            <h2>{keg.brand} {keg.name} </h2>
            <h3> Price: ${keg.price} | Grams of Sugar {keg.sugarContent}</h3>
            <h3 className = {keg.pints < 10 ? 'Low' : null}>{keg.pints} pints remaining</h3>
            <Link to={'/viewkeg/'+index}> Edit Keg</Link>
          </div>
        </span>
      )}
    </div>
  );
}

Keg.propTypes = {
  availableKegs: PropTypes.array,
  sellPint: PropTypes.func
};
