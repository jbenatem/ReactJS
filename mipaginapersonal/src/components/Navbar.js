import React, { Component } from 'react';

class Navbar extends Component{   
    render(){
        return(    
            <nav className="navbar navbar-expand-lg sticky-top navbar-dark bg-dark">      
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor02" aria-controls="navbarColor02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarColor02">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Inicio<span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a onClick={this.props.scroll.bind(this, 'presentacion')} className="nav-link">Presentación</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={this.props.scroll.bind(this, 'conocimientos')} className="nav-link">Conocimientos</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={this.props.scroll.bind(this, 'experiencia')} className="nav-link">Experiencia</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={this.props.scroll.bind(this, 'misproyectos')} className="nav-link">Mis proyectos</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={this.props.scroll.bind(this, 'educacion')} className="nav-link">Educación</a>
                        </li>
                        <li className="nav-item">
                            <a onClick={this.props.scroll.bind(this, 'contactame')} className="nav-link">Contáctame</a>
                        </li>                          
                    </ul>
                </div>
            </nav>
        );    
    }
}
export default Navbar;