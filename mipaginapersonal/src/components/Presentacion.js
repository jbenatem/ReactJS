import React from 'react';

const Presentacion = () => {
    return(
        <div className="row">
            <div className="col-md-5">
                <div className="card">
                    <img src="https://avatars2.githubusercontent.com/u/38118916?s=460&u=beb23e8e0a83e6688d34a7de1caaa79749756d84&v=4" className="img-thumbnail" alt="Juan Benate"/>
                </div>                      
            </div>  
            <div className="col-md-7">
                <h2>Juan Domingo Benate Mendoza</h2>
                <h5>Fecha / Lugar de nacimiento</h5>
                <p>16-01-1998 / Lima, Perú</p>
                <h5>Domicilio</h5>
                <p>Av. Alameda el Corregidor 3185 dpto. 301 La Molina, Lima, Perú</p>
                <h5>Perfil</h5>
                <p>Soy una persona disciplinada y enfocada en obtener resultados en base a mis conocimientos y valores que pongo en práctica en todos los 
                    actos de mi vida. Puedo interactuar a todo nivel y bajo distintos escenarios, comunicándome de manera solvente y apropiada. Una capacidad 
                    mía es solucionar problemas por mí mismo, buscando soluciones por diferentes medios y aplicándolas, además, de una capacidad para aprender 
                    rápido. Estoy muy interesado en las nuevas tecnologías, desde hace dos años participo en proyectos relacionados a la inteligencia
                    artificial, en especial Chatbots, utilizando componentes de Microsoft; y a la automatización de procesos utilizando herramientas BPMS
                    como Bizagi.</p>
            </div>  
        </div>
    )  
}

export default Presentacion;