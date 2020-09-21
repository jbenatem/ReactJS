import React from 'react';

const Producto = props => {
    return(
        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div className="card">
                <img src="https://www.sanborns.com.mx/imagenes-sanborns-ii/1200/7500563133793.jpg" className="card-img-top"/>
                <div className = "card-body">
                    <p className = "card-text">Blusa XXXXXXXXX</p>
                    <p className = "card-text">Precio: s/35.00</p>
                </div>
            </div>
        </div>
    )  
}

export default Producto;