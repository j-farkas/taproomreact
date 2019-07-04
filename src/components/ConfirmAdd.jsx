import React from 'react';

function Confirmation(){
  return (
    <div>
      <p>Are you sure you want to add this keg?</p>
      <button onClick={props.onConfirmation}>Yes</button>
    </div>
  );
}

Confirmation.propTypes = {
  onConfirmation: PropTypes.func
};
export default Confirmation;
