import React from 'react';
import Schedule from './Schedule';
import Header from './Header';
import KegList from './KegList';
import { Switch, Route } from 'react-router-dom';
import About from './About';
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
      </Switch>
    </div>
  );
}

export default App;
