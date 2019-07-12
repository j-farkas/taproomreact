import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default function Keg(props) {

  return (
    <div>
      <style jsx>{`
                div {
                    background-color: orange;
                    font-family: Arial, Helvetica, sans-serif;
                    border:1px black solid;
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
          {props.availableKegs.map((keg, index) =>
            <div className = {keg.sugarContent > 20 ? 'Sugary' : null}>
      <span className = {window.location.href.split('/')[5] === ('low') && keg.pints > 10 ? 'Hidden' : null }>
        <button onClick={() => props.sellPint(index)}> Sell a pint</button>
        <Link to={'/viewkeg/'+index}> Edit Keg</Link>
        <h2>{keg.brand} {keg.name} </h2>
        <h3> Price: ${keg.price} | Grams of Sugar {keg.sugarContent}</h3>
        <h3 className = {keg.pints < 10 ? 'Low' : null}>{keg.pints} pints left</h3>
      </span>
    </div>
    )}
</div>
  )
}

Keg.propTypes = {
  availableKegs: PropTypes.array,
  sellPint: PropTypes.func
};
//
// Keg.propTypes = {
//   name: PropTypes.string.isRequired,
//   sugarContent: PropTypes.number.isRequired,
//   brand: PropTypes.string,
//   price: PropTypes.number.isRequired,
//   pints: PropTypes.number.isRequired
// };



// export default Keg;
