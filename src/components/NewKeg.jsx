import React from 'react';
import PropTypes from 'prop-types';


function NewKeg(props) {
  let _name = null;
  let _brand = null;
  let _price = null;
  let _sugarContent = null;
  let _pints = null;





  function handleNewKegSubmit(event) {
    event.preventDefault();
    props.addKeg({name: _name.value, brand: _brand.value, price: _price.value, sugarContent: _sugarContent.value, pints: 124})
    _name.value = '';
    _brand.value = '';
    _price.value = '';
    _sugarContent.value ='';
  }


  return (
    <div>
      <form onSubmit={handleNewKegSubmit}>
        <style jsx>{`
                    input {
                        height: 20px;
                        width: 150px;
                        font-family: Arial, Helvetica, sans-serif;
                    }
                    button{
                      width: 80px;
                      height: auto;

                    }
                `}</style>
        <input
          type='text'
          id='name'
          placeholder='Drink Name'
          ref={(input) => {_name = input;}}/>
        <input
          type='text'
          id='brand'
          placeholder='Brand Name'
          ref={(input) => {_brand = input;}}/>
        <input
          type ='number'
          id='price'
          placeholder='The Price per pint'
          ref={(input) => {_price = input;}}/>
        <input
          type ='number'
          id='sugarContent'
          placeholder='The sugar content per pint'
          ref={(input) => {_sugarContent = input;}}/>
        <input
          type ='hidden'
          id='pints'
          value='124'
          ref={(input) => {_pints = input;}}/>
        <button onClick={this.handleConfirmation} type='submit'>Add it</button>
      </form>
    </div>
  );

}

NewKeg.propTypes = {
  addKeg: PropTypes.func
};

export default NewKeg;
