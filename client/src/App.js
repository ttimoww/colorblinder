import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Homepage from './scenes/Homepage/Homepage';
import Gamepage from './scenes/Gamepage/Gamepage';

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/game">
            <Gamepage />
        </Route>

        {/* The / route should stay at the bottom */}
        <Route path="/"> 
            <Homepage />
        </Route>
      </Switch>
    </>
  );
}





export default App;
