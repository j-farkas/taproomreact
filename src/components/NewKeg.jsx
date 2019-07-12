import React from 'react';
import PropTypes from 'prop-types';


function NewKeg(props) {
  let _name = null;
  let _brand = null;
  let _price = null;
  let _sugarContent = null;
  let _pints = null;
  let drinkName = '';
  let brandName = '';
  let price = '';
  let sugar = '';
  if(window.location.href.split('/')[5] !== 'new'){
    let loc = window.location.href.split('/')[5]
    drinkName = props.availableKegs[loc].name;
    price = props.availableKegs[loc].price;
    sugar = props.availableKegs[loc].sugarContent;
    brandName = props.availableKegs[loc].brand;
  }





  function handleNewKegSubmit(event) {
    event.preventDefault();
    if(window.location.href.split('/').length > 5){
      props.editKeg({name: _name.value, brand: _brand.value, price: _price.value, sugarContent: _sugarContent.value, pints: _pints.value}, parseInt(window.location.href.split('/')[5]))
    }else{
      props.addKeg({name: _name.value, brand: _brand.value, price: _price.value, sugarContent: _sugarContent.value, pints: _pints.value})
    }
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
          value = {drinkName}
          ref={(input) => {_name = input;}}/>
        <input
          type='text'
          id='brand'
          placeholder='Brand Name'
          value={brandName}
          ref={(input) => {_brand = input;}}/>
        <input
          type ='number'
          id='price'
          placeholder='The Price per pint'
          value = {price}
          ref={(input) => {_price = input;}}/>
        <input
          type ='number'
          id='sugarContent'
          placeholder='The sugar content per pint'
          value = {sugar}
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
  addKeg: PropTypes.func,
  editKeg: PropTypes.func,
  availableKegs: PropTypes.array
};

export default NewKeg;
