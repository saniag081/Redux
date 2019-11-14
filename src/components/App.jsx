import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './Menu';
import User from './users/index';

const tareas = () => <div> Tareas </div>

const App = () => {
  return(
    <BrowserRouter>
      <Menu />
      <Route exact path="/" component={User}/>
      <Route exact path="/tareas" component={tareas}/>
    </BrowserRouter>
  );
}

export default App;