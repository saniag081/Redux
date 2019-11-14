import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Menu from './Menu';
import User from './users/index';

const tareas = () => <div> Tareas </div>

const App = () => {
  return(
    <BrowserRouter>
      <Menu />
      <div className="margen">
        <Route exact path="/" component={User}/>
        <Route exact path="/tareas" component={tareas}/>
      </div>
    </BrowserRouter>
  );
}

export default App;