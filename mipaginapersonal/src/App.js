import React, { Component }  from 'react';
import Navbar from './components/Navbar';
import Presentacion from './components/Presentacion';
import Conocimientos from './components/Conocimientos';
import Experiencia from './components/Experiencia';
import Proyectos from './components/Proyectos';
import Educacion from './components/Educacion';

class App extends Component {
  scroll = (control) => {
    var elemento = document.getElementById(control);
    //console.log(elemento)
    elemento.scrollIntoView('smooth','start');
  }

  render(){
    return (
      <div className="app container">
        <Navbar
          scroll={this.scroll}
        />
        <div className="jumbotron" id="presentacion">
          <Presentacion/>
        </div>
        <div className="jumbotron" id="conocimientos">
          <Conocimientos/>
        </div>
        <div className="jumbotron" id="experiencia">
          <Experiencia/>
        </div>
        <div className="jumbotron" id="misproyectos">
          <Proyectos/>
        </div>
        <div className="jumbotron" id="educacion">
          <Educacion/>
        </div>
        <div className="jumbotron" id="contactame">
        </div>
      </div>
    );
  }
}

export default App;
