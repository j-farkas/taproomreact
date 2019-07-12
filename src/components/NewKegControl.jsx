import React from 'react';
import Keg from './Keg';
import NewKeg from './NewKeg';

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
     this.addKeg = this.addKeg.bind(this);
     this.editKeg = this.editKeg.bind(this);
  }

  sellPint(id){
    this.state.availableKegs[id].pints -= 1;
    if(this.state.availableKegs[id].pints === 0){
      this.state.availableKegs = this.state.availableKegs.filter(x=>this.state.availableKegs.indexOf(x) !== id)
    }
    this.setState(this.state.availableKegs);
  }

  addKeg(keg){
    this.state.availableKegs.push(keg);
    this.setState(this.state.availableKegs);
  }

  editKeg(keg, location){
    Object.keys(keg).forEach((el)=>{
      this.state.availableKegs[location][el] = keg[el]
    })
    this.setState(this.state.availableKegs);
  }

  render(){
    if(window.location.href.split('/')[5] === 'new' || window.location.href.split('/').length > 5){
      return(
        <NewKeg addKeg={this.addKeg} editKeg={this.editKeg} availableKegs={this.state.availableKegs}/>
      )
    }
    return(
        <div>
          <Keg availableKegs={this.state.availableKegs} sellPint={this.sellPint}/>
        </div>
)
  }
}

export default NewKegControl;
