import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Modal from './components/Modal';
import Catalogo from './components/Catalogo';
import TipoProductos from './components/TipoProducto';

class App extends Component {
  state = {
    mostrar_modal: false
  };

  scroll = (control) => {
    var elemento = document.getElementById(control);
    //console.log(elemento)
    elemento.scrollIntoView('smooth','start');
  }
    
  showModal = () => {
    this.setState({mostrar_modal:true});
    console.log(this.state.mostrar_modal)
  };

  hideModal = () => {
    this.setState({mostrar_modal:false});
    console.log(this.state.mostrar_modal)
  };

  render(){
    return (
      <div className="app container">
        <Navbar
          showModal={this.showModal}
          scroll={this.scroll}        
        />
        <div className="jumbotron">
          <h1 className="display-3">Hello, world!</h1>
        </div>
        <div className="jumbotron" id="catalogo">
          <h2>Catálogo</h2>
          <p class="text-secondary">Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
          <Catalogo/> 
        </div>
        <div className="jumbotron" id="quienessomos">
          <h2>¿Quiénes somos?</h2>
          <p class="text-secondary">Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
        </div>
        <div className="jumbotron" id="contactenos">
          <h2>Contáctenos</h2>
          <p class="text-secondary">Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
        </div>
        <Modal
          mostrar_modal={this.state.mostrar_modal}
          hideModal={this.hideModal}
        />
      </div>
    );
  }
}

export default App;
