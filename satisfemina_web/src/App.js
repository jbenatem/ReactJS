import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Modal from './components/Modal';
import Catalogo from './components/Catalogo';
import CarritoCompras from './components/CarritoCompras'
import logo from './components/gif.gif';

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
          <img src={logo} class="img-fluid" alt="Satis Femina" width="100%" height="auto"/>
        </div>
        <div className="jumbotron" id="catalogo">
          <h2>Catálogo</h2>
          <p className="text-secondary">Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
          <Catalogo/> 
        </div>
        <div className="jumbotron" id="carritocompras">
          <h2>Carrito de compras</h2>
          <p className="text-secondary">Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
          <CarritoCompras/>
        </div>
        <div className="jumbotron" id="quienessomos">
          <h2>¿Quiénes somos?</h2>
          <p className="text-secondary">Pellentesque ornare sem lacinia quam venenatis vestibulum.</p>
        </div>
        <div className="jumbotron" id="contactenos">
          <h2>Contáctenos</h2>
          <p className="text-secondary">Sígannos en nuestras redes sociales!</p>
          <div className="row">
            <div className="col-md-6">
              <i class="fab fa-instagram fa-2x"></i>
              <a class="lead" href="#" target="_blank">  satis.femina.11</a>             
            </div>  
            <div className="col-md-6">
              <i class="fab fa-facebook fa-2x"></i>
              <a class="lead" href="https://www.facebook.com/Satis-Femina-102655381539922/" target="_blank">  Satis Femina</a>
            </div>  
          </div>
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
