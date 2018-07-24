import React, { Component } from 'react';
import logo from '../Images/Logo.png'
import $ from 'jquery'
import '../css/HeaderComponent.css'
import firebase from '../config/fire';
import 'firebase/auth';

class HeaderComponent extends Component {

    Desactivarusuario(){
                firebase.auth().signOut().then(() => {
            alert("Esta cerrando sesion...");
            window.location.reload(true);
            document.getElementById('btnlogin').style.display = 'true';
            // Sign-out successful.
        }).catch(function(error) {
            // An error happened.
            alert("Vuelva Pronto!");
        });
    }

    componentDidMount(){
        $(document).ready(function () {
            var flag = false;
            var scroll;
            $(window).scroll(function () {
                scroll = $(window).scrollTop();
                if (scroll > 569) {
                    if (!flag) {
                        $("nav").css({ "transition": " 0.2s", "background": "rgba(10,10,10,.9)"});
                        $(".floatButton").css({ "z-index": "-1" });
                        flag = true;
                    }
                } else {
                    if (flag) {
                        $("nav").css({ "background-color": "transparent", "opacity": "1" });
                        $(".floatButton").css({ "z-index": "1" });
                        flag = false;
                    }
                }

            });
        });
    }

    render(){
let user = firebase.auth().currentUser;
let useremail;
firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    document.getElementById('logout').style.display = 'true';
    document.getElementById('registrarse').style.display = 'none';
    document.getElementById('inicarsesion').style.display = 'none';

    useremail = user.email;
    document.getElementById('UserActivo').innerHTML = useremail +  " ";
  } else {
    document.getElementById('logout').style.display = 'none';
    document.getElementById('UserActivo').style.display = "none";

  }

});

        return(
            
            <nav className="menu">
                <div className="Titulo-menu">
                    <img src={logo} className="logo" alt="logo"/>
                    <span>Punto y coma</span>
                </div>

                <div className="enlaces-menu-container">
                    <div className="enlaces-menu">
                        <a >Inicio</a>
                        <a >Post</a>
                        <a >Off topic</a>
                        <a>Nostros</a>
                        <a onClick={this.openLoginModal} id="inicarsesion">Iniciar sesion</a>
                        <a onClick={this.openSignUpModal} id="registrarse">Registrarse</a>
                        <a id="UserActivo">Hola</a>
                        <a onClick={this.Desactivarusuario} id="logout">Logout</a>
                    </div>
                </div>
            </nav>
        )
    }
    openLoginModal() {
        let modal = document.getElementById("LogInModal");
        modal.setAttribute("open", true)
    }
    openSignUpModal(){
        let modal = document.getElementById("SignUpModal");
        modal.setAttribute("open", true)
    }
}

export default HeaderComponent