import { useState } from 'react'
import logo from '../../assets/logo.png'

import './signin.css'
import { Link } from 'react-router-dom';

export default function SingIn(){

const [ email, setEmail ] = useState('');
const [password, setPassword] = useState('');

    return(
        <div className="container-center">
            <div className="login">
                <div className="login-area">
                    <img src={logo} alt="Logo do sistem de ConsultaOS"/>
                </div>

                <form>
                    <h1>Entrar</h1>
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
                        >Acessar 
                    </button>
                </form>

                <Link to="/register">Criar uma conta</Link>
            </div>
        </div>
    )
}
