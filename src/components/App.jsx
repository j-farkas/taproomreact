import React from 'react';
import Schedule from './Schedule';
import Header from './Header';
import SeasonalProduce from './SeasonalProduce';
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
        <Route path='/schedule' component={Schedule} />
        <Route path='/seasonal-produce' component={SeasonalProduce} />
        <Route path='/about' component={About} />
      </Switch>
    </div>
  );
}

export default App;