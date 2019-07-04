import React from 'react';
import Confirmation from './ConfirmAdd';


function NewKeg() {
  let _name = null;
  let _brand = null;
  let _price = null;
  let _sugarContent = null;
  let _pints = null;





   function handleNewKegSubmit(event) {
    event.preventDefault();
    console.log(_name.value);
    console.log(_brand.value);
    console.log(_price.value);
    console.log(_sugarContent.value);
    console.log(_pints.value);
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

export default NewKeg;
