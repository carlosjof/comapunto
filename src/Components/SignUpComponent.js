import React, { Component } from 'react';
import logo from "../Images/Logo.png";
import close from "../Ico-img/delete.png";
import "../css/ModalComponents.css";
import firebase from '../config/fire';
import 'firebase/auth';

class SignUpComponent extends Component{
    inicarsesion(){
        let email = document.getElementById('emailUsuario').value;
        let password = document.getElementById('passUsuario').value;
        let nombre = document.getElementById('nombreUsuario').value;
        let apellido = document.getElementById('apellidoUsuario').value;

        if(email === "" || password === "" || nombre === "" || apellido === ""){
            alert("Debes de llenar todos los campos");
        }else{
            firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
                        }).catch(function(error) {
                                // Handle Errors here.
                                let errorCode = error.code;
                                let errorMessage = error.message;
                                // ...
            });


        firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            window.location.reload(true);
            document.getElementById('UserActivo').style.display = 'none';
        } else {
            document.getElementById('UserActivo').style.display = 'true';
        }
        });
        }
    }
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
                                <button className="btn" onClick={this.inicarsesion}>Registrarse</button>
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