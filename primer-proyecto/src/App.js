import React, { Component } from 'react';
import Buscador from './components/Buscador';

class App extends Component {
  state = {
    termino : '',
    imagenes : []
  }

  consultarApi = () => {
    const consulta = this.state.termino
    const url = `https://pixabay.com/api/?key=18368448-99db5f2150ec5c8bced40c692&q=${consulta}&per_page=30`;
    //console.log(url);
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({imagenes : resultado.hits}))
  }
  
  datosBusqueda = (termino) => {
    console.log(termino);
    this.setState({
      termino
    }, () => {
      this.consultarApi();
    })
  }
  
  render(){
    return (
      <div className="app container">
        <div className="jumbotron">
          <p className="lead text-center">Buscador de Imágenes</p>
          <Buscador
            datosBusqueda={this.datosBusqueda}
          />
        </div>
      </div>
    );
  } 
}

export default App;
