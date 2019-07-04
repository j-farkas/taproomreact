import React from 'react';
import Confirmation from './ConfirmAdd';


class NewKeg extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    console.log('Hey, you clicked me! I do not have code to change my state quite yet, but I will in a moment!');
  }

  render(){
    return (
      <div>
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
          <input
            type='text'
            id='brand'
            placeholder='Brand Name'/>
          <input
            type ='number'
            id='price'
            placeholder='The Price per pint'/>
          <input
            type ='number'
            id='sugarContent'
            placeholder='The sugar content per pint'/>
          <input
            type ='hidden'
            id='pints'
            value='124'/>
          <button onClick={this.handleClick} type='submit'>Add it</button>
        </form>
        <Confirmation />
      </div>
    );
  }
}

export default NewKeg;
