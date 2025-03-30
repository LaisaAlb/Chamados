import { useContext } from 'react'
import { AuthContext } from '../../contexts/auth'

import Header from '../../components/Header/index'

export default function Dashboard(){
    const { logout } = useContext(AuthContext);

    async function handleLogout(){
        await logout(); 
    }

    return (
        <div>
            <Header />
            <h1>Página de deshboard</h1>
            <button onClick={handleLogout}>Sair da conta</button>
        </div>
    )
}