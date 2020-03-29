import React, {useEffect, useState} from "react";

import {Link} from 'react-router-dom'
import {FiPower, FiTrash2} from 'react-icons/fi';

import api from '../../services/api';
import logoImage from '../../assets/logo.svg'
import './styles.css';

export default function Profile() {

    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');
    const [incidents, setIncidentes] = useState([]);

    useEffect(
        () => {
            loadIncidents()
        },
        [ongId]
    );

    function loadIncidents(){
        api.get('profile',
            {
                headers: {
                    Authorization: ongId
                }
            }).then(response => {
            setIncidentes(response.data);
        });
    }
    
    async function handleDelete(id) {
        try {
            await api.delete(`incident/${id}`,  {headers:{Authorization: ongId}})
                .then(()=>{
                    //loadIncidents();
                    setIncidentes(incidents.filter(incident => incident.id !== id));
                });
        }catch (e) {
            alert(`Erro ao deletar caso (${e.message})`);
        }
    }

    return (
        <div className="profile-container">
            <header>
                <img src={logoImage} alt="Be The Hero"/>
                <span>Bem vinda, {ongName}</span>

                <Link className="button" to="/incident/new">Cadastrar novo caso</Link>
                <button type="button">
                    <FiPower size={18} color="#e02041"/>
                </button>
            </header>

            <h1>Casos cadastrados</h1>

            <ul>
                {incidents.map(incident => (
                    <li key={incident.id}>
                        <strong>CASO:</strong>
                        <p>{incident.title}</p>

                        <strong>DESCRIÇÂO:</strong>
                        <p>{incident.description}</p>

                        <strong>Valor:</strong>
                        <p>{Intl.NumberFormat('pt-BR', {style: 'currency', currency: 'BRL'}).format(incident.value)}</p>

                        <button type="button" onClick={()=>{handleDelete(incident.id)}}>
                            <FiTrash2 size={20} color="#a8a8b3"/>
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
