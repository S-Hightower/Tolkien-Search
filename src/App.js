import React from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';

//Import Views
import Home from './views/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>

          <Route exact path='https://tolkien-search.netlify.app/'>
            <Home/>
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
