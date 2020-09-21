import React from 'react';
import Producto from './Producto';
import TipoProductos from './TipoProducto';

const Catalogo = props => {
    return(
        <div className="row">
            <div className="col-md-2">
              <TipoProductos/>
            </div>  
            <div className="col-md-10 p-10 row">
              <Producto/>
              <Producto/>
              <Producto/>
              <Producto/>
              <Producto/>
              <Producto/>
            </div>  
          </div>
    )  
}

export default Catalogo;