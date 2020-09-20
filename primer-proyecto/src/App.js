import React, { Component } from 'react';
import Buscador from './components/Buscador';
import Resultado from './components/Resultado';

class App extends Component {
  state = {
    termino : '',
    imagenes : [],
    pagina : 1
  }

  scroll = () => {
    const elemento = document.querySelector('.jumbotron');
    elemento.scrollIntoView('smooth','start');
  }

  paginaAnterior = () => {
    //Leer el state de la pagina actual
    let pagina = this.state.pagina;
    //Leer si la pagina actual es 1, ya no ir hacia atras
    if (pagina ===1){
      return null;
    }
    //Restar 1 a la pagina actual
    pagina -= 1;
    //Agregar el cambio al state
    this.setState({
      pagina
    }, () => {
      this.consultarApi();
      this.scroll();
    });
    //console.log(pagina);
  }

  paginaSiguiente = () => {
    //Leer el state de la pagina actual
    let pagina = this.state.pagina;
    //Sumar 1 a la pagina actual
    pagina += 1;
    //Agregar el cambio al state
    this.setState({
      pagina
    }, () => {
      this.consultarApi();
      this.scroll();
    });
    //console.log(pagina);
  }

  consultarApi = () => {
    const consulta = this.state.termino
    const pagina = this.state.pagina;
    const url = `https://pixabay.com/api/?key=18368448-99db5f2150ec5c8bced40c692&q=${consulta}&page=${pagina}`;
    //console.log(url);
    fetch(url)
      .then(respuesta => respuesta.json())
      .then(resultado => this.setState({imagenes : resultado.hits}))
  }
  
  datosBusqueda = (termino) => {
    //console.log(termino);
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
          <p className="display-3 text-center">Buscador de Imágenes</p>
          <Buscador
            datosBusqueda={this.datosBusqueda}
          />
        </div>
        <div className="row justify-content-center">
          <Resultado
            imagenes = {this.state.imagenes}
            paginaAnterior = {this.paginaAnterior}
            paginaSiguiente = {this.paginaSiguiente}
          />
        </div> 
      </div>
    );
  } 
}

export default App;
