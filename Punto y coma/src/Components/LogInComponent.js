import React, { Component } from 'react';
import '../css/ModalComponents.css'
import logo from "../Images/Logo.png";
import close from "../Ico-img/delete.png"
import line from "../Ico-img/line.png"
class LogInComponent extends Component {

    render(){
        return(
            <dialog className="modal" id="LogInModal">
                <div className="container">
                    <div className="modalContent">
                        <div className="modalHeader">
                            <div className="modalClose" >
                                <img src={close} className="closeButton" alt="close" id="close" onClick={this.close}/>
                            </div>
                            <div className="modalTitle">
                                <img src={logo} alt="logo" className="modalLogo"/>
                                <h2>Iniciar sesion</h2>
                            </div>
                        </div>
                        <div className="content">
                            <div className="authInputLogin">
                                <input type="email" placeholder="Correo electronico" id="email"/>
                                <input type="password" placeholder="Contraseña" id="pass" />
                            </div>
                            <div className="authButtonsLogin">
                                <button className="btn">Iniciar sesion</button>
                                <span className="or">
                                    <img src={line} alt="line"/>O<img src={line} alt="line" />
                                </span>
                                <button className="btn googlebtn">Iniciar con google</button>
                            </div>
                        </div>
                    </div>
                </div>
            </dialog>
        )
    }
    close(){
        document
        .getElementById("LogInModal")
        .removeAttribute("open")
    }

}
export default LogInComponent