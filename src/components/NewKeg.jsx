import React from 'react';
import Confirmation from './ConfirmAdd';


class NewKeg extends React.Component {


  constructor(props) {
    let _name = null;
    let _brand = null;
    let _price = null;
    let _sugarContent = null;
    let _pints = null;
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleConfirmation = this.handleConfirmation.bind(this);
  }

  handleConfirmation(){
     this.setState({formVisibleOnPage: true});
   }



   function handleNewKegSubmit(event) {
    event.preventDefault();
  }


  render(){
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
        <form>
          <input
            type='text'
            id='name'
            placeholder='Drink Name'/>
            ref={(input) => {_name = input;}}/>
          <input
            type='text'
            id='brand'
            placeholder='Brand Name'/>
            ref={(input) => {_brand = input;}}/>
          <input
            type ='number'
            id='price'
            placeholder='The Price per pint'/>
            ref={(input) => {_price = input;}}/>
          <input
            type ='number'
            id='sugarContent'
            placeholder='The sugar content per pint'/>
            ref={(input) => {_sugarContent = input;}}/>
          <input
            type ='hidden'
            id='pints'
            value='124'/>
            ref={(input) => {_pints = input;}}/>
          <button onClick={this.handleConfirmation} type='submit'>Add it</button>
        </form>
        <Confirmation />
      </div>
    );
  }
}

export default NewKeg;
