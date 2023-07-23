import React from "react";
import '../styles/Register.css'
import {Link} from 'react-router-dom'

function Register(){
    
    return(
    <div>
        <div className='container_name'>
            <h1 className='login_name sign-registrarse'>Registrarse</h1>
            <hr className="hr-register"></hr>
        </div>
        <div className="login-form">
        <form>
            <div className="content">
                <div className="input-field">
                    <input className='input-login' type="email" placeholder="Nombre Completo" autocomplete="nope"  id="placeholderColor" />
                </div>
                <div className="input-field">
                    <input className='input-login' type="email" placeholder="Email" autocomplete="nope" id="placeholderColor" />
                </div>
                <div className="input-field">
                    <input className='input-login' type="password" placeholder="Contraseña" autocomplete="nope" id="placeholderColor" />
                </div>
                <a href="/Login" className="link">Tienes una cuenta? Ingresa <a className="a-aqui">Aqui</a></a>
                <div className="button-field">
                    <Link to='/'><button>Crear Cuenta</button></Link>
                </div>
            </div>
        </form>
        </div>
  
         
        
        
        
    </div>
    
    )
};

export default Register;