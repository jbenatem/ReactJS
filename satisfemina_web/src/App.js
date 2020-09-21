import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Modal from './components/Modal';

class App extends Component {
  state = {
    mostrar_modal: false
  };
    
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
        />
        <div className="jumbotron">
          <h1 className="display-3">Hello, world!</h1>
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
