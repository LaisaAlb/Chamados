import { useContext } from 'react'
import  avatar  from '../../assets/avatar.png'
import { Link } from 'react-router-dom'

import { AuthContext } from '../../contexts/auth'
import { FiHome, FiUser, FiSettings  } from 'react-icons/fi'

import './header.css'

export default function Header(){
    const { user } = useContext(AuthContext); 

    return(
        <div className="sidebar">
           <div>
            <img src={ user.avatarUrl === null ? avatar : user.avatarUrl} alt="Foto do usuário"/>
           </div>

           <Link to="/dashboard">
                <FiHome color='#FFF' size={24}></FiHome>
                Chamados
           </Link> 

           <Link to="/costumers">
                <FiUser color='#FFF' size={24}></FiUser>
                Clientes
           </Link> 

           <Link to="/profile">
                <FiSettings color='#FFF' size={24}></FiSettings>
                Perfil
           </Link> 
        </div>
    )
}