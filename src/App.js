import React from 'react';

// Importaciones
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

// Components
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import ObPersonajes from './components/OpPersonajes/ObPersonajes';
import ObSearch from './components/OpPersonajes/ObSearch';

// Boostrap

import "bootswatch/dist/cosmo/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';

// Icons Font Awesone




function App() {
  return (

    <Router>
      
      <Navbar></Navbar> {/* Barra superior, disponible en todas las vistas */}

      <Switch>
        

        <Route exact path="/" component={Home} />
        <Route exact path="/Personajes" component={ObPersonajes} />
        <Route exact path="/Search" component={ObSearch} />


      </Switch>

    </Router>

  )
}

export default App;
