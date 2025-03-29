import { useState } from 'react'
import logo from '../../assets/logo.png'

import './singnup.css'
import { Link } from 'react-router-dom';

export default function SingUp(){

const [ name, setName ] = useState('');
const [ email, setEmail ] = useState('');
const [password, setPassword] = useState('');

    return(
        <div className="container-center">
            <div className="login">
                <div className="login-area">
                    <img src={logo} alt="Logo do sistem de ConsultaOS"/>
                </div>

                <form>
                    <h1>Cdastrar Nova Conta</h1>
                    <input 
                        type="text" 
                        placeholder="Name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value) } 
                    />

                    <input 
                        type="text" 
                        placeholder="example@gmail.com" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value) } 
                    />

                    <input 
                        type="password" 
                        placeholder="********" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    
                    <button
                        type="submit" 
                        value="Acessar" 
                        >Cadastrar 
                    </button>
                </form>

                <Link to="/">Já possui uma conta? Faça Login</Link>
            </div>
        </div>
    )
}
