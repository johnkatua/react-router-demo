import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';

import Navbar from './components/Navbar';

import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <div className='container mt-2' style={{ marginTop: 40 }}>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route path='/profile/:name' component={Profile} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
