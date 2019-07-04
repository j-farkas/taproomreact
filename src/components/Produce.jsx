import React from 'react';
import PropTypes from 'prop-types';

function Produce(props) {
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
      <h2>{props.month}</h2>
      <h3>
        {props.selection.map((item, index) => {
          if (index === props.selection.length - 1) {
            return <span>{item}.</span>;
          } else {
            return <span>{item}, </span>;
          }
        }
        )}
      </h3>

    </div>
  );
}
Produce.propTypes = {
  month: PropTypes.string.isRequired,
  selection: PropTypes.array.isRequired
};

export default Produce;

