import { useContext, useState } from 'react'
import logo from '../../assets/logo.png'

import './singnup.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/auth';

export default function SingUp(){

const [ name, setName ] = useState('');
const [ email, setEmail ] = useState('');
const [ password, setPassword ] = useState('');

const { singUp, loadingAuth } = useContext(AuthContext)

async function handleSubmit(event){
    event.preventDefault();

    if(name !== '' && email !== '' && password !== ''){
        await singUp(email, password, name)
    }
}

    return(
        <div className="container-center">
            <div className="login">
                <div className="login-area">
                    <img src={logo} alt="Logo do sistem de ConsultaOS"/>
                </div>

                <form onSubmit={handleSubmit}>
                    <h1>Cadastrar Nova Conta</h1>
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
                    
                    <button type="submit">
                        {loadingAuth ? 'Carregando...' : 'Cadastrar'}
                    </button>
                </form>

                <Link to="/">Já possui uma conta? Faça Login</Link>
            </div>
        </div>
    )
}
