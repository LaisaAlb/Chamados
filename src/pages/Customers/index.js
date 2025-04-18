import { use, useState } from "react";
import Header from "../../components/Header";
import Title from "../../components/Title";

import { FiUser } from 'react-icons/fi'

import { db } from '../../services/firebaseConnection'
import { addDoc, collection } from 'firebase/firestore'

import { toast } from "react-toastify";

export default function Customers(){
    const [nome, setNome] = useState('')
    const [cnpj, setCnpj]= useState('')
    const [endereco, setEndereco] = useState('')

    async function handleRegister(e){
        e.preventDefault()

        if(nome !== '' && cnpj !== '' && endereco !== ''){
            await addDoc(collection(db, "customers"), {
                nomeFantasia: nome,
                cnpj: cnpj,
                endereco: endereco
            })
            .then(() => {
                setNome('')
                setCnpj('')
                setEndereco('')
                toast.success("Empresa Registrada!")
            })
            .catch((error) => {
                console.log(error)
                toast.error("Erro ao fazer o Cadastro")
            })
        } else {
            toast.error("Preencha todos os campos")
        }
    }

    return(
        <div>
            <Header/>

            <div className="content">
                <Title name="Clientes">
                    <FiUser size={25}/>
                </Title>

                <div className="container">
                    <form className="form-profile" onSubmit={handleRegister}>
                        <label> Nome Fantasia </label>
                        <input 
                            type="text" 
                            placeholder="Nome da empresa "
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />

                        <label> Nome Fantasia </label>
                        <input 
                            type="text" 
                            placeholder="Digite o CNPJ"
                            value={cnpj}
                            onChange={(e) => setCnpj(e.target.value)}
                        />

                        <label> Endereço da Empresa </label>
                        <input 
                            type="text" 
                            placeholder="Endereço "
                            value={endereco}
                            onChange={(e) => setEndereco(e.target.value)}
                         />

                        <button type="submit">
                            Salvar
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}