import { useState, useContext } from 'react'
import logo from '../../assets/logo.png'

import './signin.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth'

export default function SingIn(){

const [ email, setEmail ] = useState('');
const [password, setPassword] = useState('');

const { singIn } = useContext(AuthContext);

function handleSubmit(e){
    e.preventDefault();
    if( email !== '' && password !== ''){
        singIn(email, password);
    }
    alert('teste')
}

    return(
        <div className="container-center">
            <div className="login">
                <div className="login-area">
                    <img src={logo} alt="Logo do sistem de ConsultaOS"/>
                </div>

                <form onSubmit={handleSubmit}>
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
