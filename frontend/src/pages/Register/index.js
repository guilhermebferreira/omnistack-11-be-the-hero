import React, {useState} from "react";

import {Link, useHistory} from 'react-router-dom'
import {FiArrowLeft} from 'react-icons/fi';
import logoImage from  '../../assets/logo.svg'

import api from '../../services/api';

import './styles.css';

export default function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatssap, setWhatssap] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');

    const history = useHistory();

    async function handleRegister(e) {
        e.preventDefault();
        const data = {
            name,
            email,
            whatssap,
            city,
            uf,
        };
       try {

           const response = await api.post('ongs', data);
           alert(`Seu ID é ${response.data.id}`);
           history.push('/');
       }catch (e) {
           alert(`Erro no cadastro, tente novamente. (${e.message})`)
       }
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
                    <input
                        type="text"
                        placeholder="Nome da ONG"
                        value={name}
                        onChange={e => setName(e.target.value)}

                    />
                    <input
                        type="email"
                           placeholder="E-mail"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <input type="text" placeholder="whatssap"
                           value={whatssap}
                           onChange={e => setWhatssap(e.target.value)}
                    />
                    <div className="input-group">
                        <input type="text" placeholder="Cidade"
                               value={city}
                               onChange={e => setCity(e.target.value)}
                        />
                        <input type="text" placeholder="UF"
                               value={uf}
                               onChange={e => setUf(e.target.value)}
                               style={{width:80}}
                        />
                    </div>

                    <button className="button" type="submit" >Cadastrar</button>

                </form>
            </dic>
            
        </div>
    )
}