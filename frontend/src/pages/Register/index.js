import React from "react";

import {Link} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi';
import logoImage from  '../../assets/logo.svg'

import api from '../../services/api';

import './styles.css';

export default function Register() {

    function handleRegister() {

    }

    return (
        <div className="register-container">
            <dic className="content">
                <section>
                    <img src={logoImage} alt="Be The Hero"/>

                    <h1>Cadastro</h1>
                    <p>Faça seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG.</p>
                    <Link className="back-link" to="/register" >
                        <FiArrowLeft size={16} color="#e02041"/>
                        Não tenho cadastro
                    </Link>
                </section>
                <form onSubmit={handleRegister} >
                    <input type="text" placeholder="Nome da ONG"/>
                    <input type="email" placeholder="E-mail"/>
                    <input type="text" placeholder="WHatssap"/>
                    <div className="input-group">
                        <input type="text" placeholder="Cidade"/>
                        <input type="text" placeholder="UF" style={{width:80}}/>
                    </div>

                    <button className="button" type="submit" >Cadastrar</button>

                </form>
            </dic>
            
        </div>
    )
}