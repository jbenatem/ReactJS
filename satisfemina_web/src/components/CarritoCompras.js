import React, { Component } from 'react';

class CarritoCompras extends Component{   
    render(){
        return(    
            <div className="row">
                <div className="col-md-6">
                    <legend>Productos</legend>
                </div>  
                <div className="col-md-6">
                    <form>
                        <fieldset>
                            <legend>Datos personales</legend>
                            <div class="form-group">
                                <input type="text" class="form-control" id="InputNombre" placeholder="Ingrese sus nombres"/>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" id="InputApellido" placeholder="Ingrese sus apellidos"/>
                            </div>
                            <div class="form-group">
                                <input type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Ingrese su correo electrónico"/>
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" id="InputCelular" placeholder="Ingrese su número de celular"/>
                            </div>
                            <div class="form-group">
                                <textarea class="form-control" id="InputDireccion" rows="3" placeholder="Ingrese su dirección"></textarea>
                            </div>
                            <div class="form-group">
                                <button type="submit" class="btn btn-secondary">Registrar pedido</button>
                            </div>
                        </fieldset>
                    </form>
                </div>  
            </div>
        );    
    }
}
export default CarritoCompras;