import React from 'react';
import Confirmation from './ConfirmAdd';
import NewKeg from './NewKeg';

class NewKegControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.handleConfirmation = this.handleConfirmation.bind(this);
  }

  handleConfirmation(){
    this.setState({formVisibleOnPage: true});
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <NewKeg />;
    } else {
      currentlyVisibleContent = <Confirmation onConfirmation={this.handleConfirmation}/>;
    }
    return (
      <div>
        {currentlyVisibleContent}
      </div>
    );
  }
}

export default NewKegControl;
