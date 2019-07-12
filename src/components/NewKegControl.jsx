import React from 'react';
import Keg from './Keg';

class NewKegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
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
          pints: 124,
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
    // this.handleConfirmation = this.handleConfirmation.bind(this);
  }

  // handleConfirmation(){
  //   this.setState({formVisibleOnPage: true});
  // }

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
    <Keg availableKegs={this.state.availableKegs}/>
  </div>
)
    // );
  }
}

export default NewKegControl;
