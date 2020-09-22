import React from 'react';

const Modal = props => {
    const mostrar_modal = props.mostrar_modal;
    if (mostrar_modal){
        return(
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h5 className="modal-title">Modal title</h5>
                    <button onClick={props.hideModal} type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <p>Modal body text goes here.</p>
                </div>
                <div className="modal-footer">
                    <button onClick={props.hideModal} type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                </div>
                </div>
            </div> 
        )
    }
    else{
        return null
    }  
}

export default Modal;