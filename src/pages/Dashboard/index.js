import { useContext } from 'react'
import { AuthContext } from '../../contexts/auth'

import { header } from '../../components/Header/index'

export default function Dashboard(){
    const { logout } = useContext(AuthContext);

    async function handleLogout(){
        await logout(); 
    }

    return (
        <div>
            <h1>Página de deshboard</h1>
            <button onClick={handleLogout}>Sair da conta</button>
        </div>
    )
}