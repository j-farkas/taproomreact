import React from 'react';
import Header from './Header';
import KegList from './KegList';
import NewKeg from './NewKeg';
import { Switch, Route } from 'react-router-dom';
import IntroImg from './IntroImg';

function App() {
  return (
    <div>
      <Header />


      <style global jsx>{`
        h2 {
          text-align: center;
        }
        span {
          text-align: center;
        }
        `}</style>
      <Switch>
        <Route exact path='/' component={IntroImg} />
        <Route path='/viewkeg' component={KegList} />
        <Route path='/addkeg' component={NewKeg} />
      </Switch>
    </div>
  );
}

export default App;
