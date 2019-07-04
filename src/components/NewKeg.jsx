import React from 'react';


function NewKeg(){
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
        <button type='submit'>Add it</button>
      </form>
    </div>
  );
}

export default NewKeg;
