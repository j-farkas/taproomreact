import React from 'react';
import Header from './Header';
import NewKegControl from './NewKegControl';
import { Switch, Route } from 'react-router-dom';
import IntroImg from './IntroImg';
import Footer from './Footer';

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
        <Route path='/viewkeg' component={NewKegControl} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
