import React from 'react';
import eggplant from '../assets/img/eggplant.png';
import jared from '../assets/img/jared.png';

function About(){
  return (
    <div>
      <style jsx>{`
          div {
            font-family: Arial, Helvetica, sans-serif;
            text-align: center;
            text-transform: uppercase;
          }
  
          img {
            max-width: 100%;
          }

          .flex{
              display: flex;
          }

          .flex-right {
              text-align: right;
          }

          `}</style>
      <h1>About</h1>
      <img src="https://images.unsplash.com/photo-1525026198548-4baa812f1183?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1533&q=80" alt=""/>
      
      <div className="flex">
        <h3 class="name">Meat Eggplant</h3>
        <img src={eggplant} width="80" height="120"/>
      </div>
      <div className="flex-right">  
        <h3 class="name">Meat Jared the Toe</h3>
        <img src={jared} width="110" height="110"/>
      </div>
    
    </div>
  );
}
  
export default About;