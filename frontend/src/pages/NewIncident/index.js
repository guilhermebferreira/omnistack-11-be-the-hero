import React from "react";

import './styles.css';
import {Link} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi';
import logoImage from  '../../assets/logo.svg'

export default function NewIncident() {
    return (  <div className="new-incident-container">
        <dic className="content">
            <section>
                <img src={logoImage} alt="Be The Hero"/>

                <h1>Cadastrar novo caso</h1>
                <p>Descreva o caso detalhadamente para encontrar um heroí para resolver isso.</p>
                <Link className="back-link" to="/profile" >
                    <FiArrowLeft size={16} color="#e02041"/>
                    Voltar para home
                </Link>
            </section>
            <form >
                <input type="text" placeholder="Titulo do caso"/>
                <textarea placeholder="Descrição do caso"/>
                <input type="text" placeholder="Valor em reais"/>

                <button className="button" type="submit" >Cadastrar</button>

            </form>
        </dic>

    </div>);

}