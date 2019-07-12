import React from 'react';
import Keg from './Keg';

class NewKegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      availableKegs: [
        {
          name: 'Water',
          sugarContent: 0,
          brand: 'Tap',
          pints: 124,
          price: 1
        },
        {
          name: 'Orange Juice',
          sugarContent: 5,
          brand: 'Tropicana',
          pints: 124,
          price: 2
        },
        {
          name: 'Cola',
          sugarContent: 40,
          brand: 'Coca-Cola',
          pints: 24,
          price: 3
        },
        {
          name: 'Water',
          sugarContent: 0,
          brand: 'Dasani',
          pints: 124,
          price: 2
        },
        {
          name: 'Cola',
          sugarContent: 39,
          brand: 'Pepsi',
          pints: 4,
          price: 3
        }
      ]
    }
     this.sellPint = this.sellPint.bind(this);
  }

  sellPint(id){
    this.state.availableKegs[id].pints -= 1;
    this.setState(this.state.availableKegs);
  }

  render(){
    return(
    // let currentlyVisibleContent = null;
    // if (this.state.formVisibleOnPage){
    //   currentlyVisibleContent = <NewKeg />;
    // } else {
    //   currentlyVisibleContent = <Confirmation onConfirmation={this.handleConfirmation}/>;
    // }
    // return (
    //   <div>
    //     {currentlyVisibleContent}
    //   </div>
  <div>
    <Keg availableKegs={this.state.availableKegs} sellPint={this.sellPint}/>
  </div>
)
    // );
  }
}

export default NewKegControl;
