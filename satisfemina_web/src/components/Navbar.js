import React, { Component } from 'react';

class Navbar extends Component{   
    render(){
        return(    
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="#">Satis Femina</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Inicio<span className="sr-only">(current)</span></a>
                    </li>
                    <li className="nav-item">
                        <a onClick={this.props.scroll.bind(this, 'catalogo')} className="nav-link">Catálogo</a>
                    </li>
                    <li className="nav-item">
                        <a onClick={this.props.scroll.bind(this, 'quienessomos')} className="nav-link">¿Quiénes somos?</a>
                    </li>
                    <li className="nav-item">
                        <a onClick={this.props.scroll.bind(this, 'contactenos')} className="nav-link">Contáctenos</a>
                    </li>
                    </ul>
                </div>
            </nav>
        );    
    }
}
export default Navbar;