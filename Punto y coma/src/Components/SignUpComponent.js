import React, { Component } from 'react';
import logo from "../Images/Logo.png";
import close from "../Ico-img/delete.png";
import "../css/ModalComponents.css";

class SignUpComponent extends Component{

    render(){
        return(
            <dialog className="modal" id="SignUpModal">
                <div className="container">
                    <div className="modalContent">
                        <div className="modalHeader">
                            <div className="modalClose" >
                                <img src={close} className="closeButton" alt="close" id="close" onClick={this.close} />
                            </div>
                            <div className="modalTitle">
                                <img src={logo} alt="logo" className="modalLogo" />
                                <h2>Registrarse</h2>
                            </div>

                        </div>
                        <div className="content">
                            <div className="authInputRegister">
                                <input type="text" placeholder="Nombre" id="nombreUsuario" />
                                <input type="text" placeholder="Apellido" id="apellidoUsuario" />
                                <input type="email" placeholder="Correo electronico" id="emailUsuario" />
                                <input type="password" placeholder="Contraseña" id="passUsuario" />
                            </div>
                            <div className="authButtonsRegister">
                                <button className="btn">Registrarse</button>
                            </div>
                        </div>
                    </div>
                </div>
            </dialog>
        )
    }

    close() {
        document
        .getElementById("SignUpModal")
        .removeAttribute("open")
    }

}
export default SignUpComponent