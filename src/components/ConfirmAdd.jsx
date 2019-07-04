import React from 'react';
import PropTypes from 'prop-types';

function Confirmation(props){
  return (
    <div>
      <p>Do you want to add a new keg?</p>
      <button onClick={props.onConfirmation}>Yes</button>
    </div>
  );
}

Confirmation.propTypes = {
  onConfirmation: PropTypes.func
};
export default Confirmation;
