import React, { Component } from 'react';
import '../css/ModalComponents.css'
import logo from "../Images/Logo.png";
import close from "../Ico-img/delete.png"
import line from "../Ico-img/line.png"
import firebase from '../config/fire';
import 'firebase/auth';

class LogInComponent extends Component {

    Login(){
        let email = document.getElementById('email').value;
        let password = document.getElementById('pass').value;
        if(email === "" || password === ""){
            alert("Debes de llenar todos los campos");
        }else{
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // ...
        });

        firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            window.location.reload(true);
            alert("Bienvenido!");
            document.getElementById('UserActivo').style.display = 'none';
        } else {
            alert("Presione ENTER o OK para continuar");
            document.getElementById('UserActivo').style.display = 'true';
        }
        });
        }
    }

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
                                <button className="btn" onClick={this.Login}>Iniciar sesion</button>
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