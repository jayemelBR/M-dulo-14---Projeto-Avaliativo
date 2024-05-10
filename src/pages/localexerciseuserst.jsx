import TextField from "@mui/material/TextField"
import { useState } from "react"

function ListagemdeUsuarios() {
    const [usuario, SetUsuario] = useState({
        nome: "",
        Genero: "",
        CPF: "",
        DatadeNascimento: "",
        Email: "",
        Senha: "",
        CEP: "",
        Lougradoro: "",
        Cidade: "",
        Estado: "",
        Pais: "",
        Longitude: "",
        Latitude: ""
    })
    async function CadastrarUsuario(evento) {
        evento.preventDefault()
        try{
            await fetch("http://localhost:3000/usuarios",{
                method: "POST",
                body: JSON.stringify(usuario),
                headers: { "Content-Type" : "application/json" }
            })
            alert("Usuário Cadastrado com Sucesso!")
        } catch (erro) {
            console.log(erro)
        }
    }
    async function BuscarCep() {
        try{ if(usuario.CEP.length != 8) {
        alert("CEP Invalido!")
        return
        }
        const response = await fetch(`https://viacep.com.br/ws/${usuario.CEP}/json/`)
            const dados = await response.json()
            SetUsuario({ ...usuario, Lougradoro: dados.logradouro, Estado: dados.uf, Cidade: dados.localidade, Bairro: dados.bairro, Pais: "Brasil" })

        } catch (erro) {
            console.log(erro)
        }
    }
    return (
        <div><TextField type="text" value={usuario.nome} label="Nome" variant="outlined" onChange={(evento) => SetUsuario({ ...usuario, nome: evento.target.value })} />
        <TextField type="text" value={usuario.Genero} label="Gênero" variant="outlined" onChange={(evento) => SetUsuario({ ...usuario, Genero: evento.target.value })} />
        <TextField type="text" value={usuario.CPF} label="CPF" variant="outlined" onChange={(evento) => SetUsuario({ ...usuario, CPF: evento.target.value })} />
        <TextField type="text" value={usuario.DatadeNascimento} label="Data de Nascimento" variant="outlined" onChange={(evento) => SetUsuario({ ...usuario, DatadeNascimento: evento.target.value })} />
        <TextField type="text" value={usuario.Email} label="Email" variant="outlined" onChange={(evento) => SetUsuario({ ...usuario, Email: evento.target.value })} />
        <TextField type="text" value={usuario.Senha} label="Senha" variant="outlined" onChange={(evento) => SetUsuario({ ...usuario, Senha: evento.target.value })} />
        <TextField type="text" value={usuario.CEP} label="CEP" variant="outlined" onBlur={() => BuscarCep()} onChange={(evento) => SetUsuario({ ...usuario, CEP: evento.target.value })} />
        <TextField type="text" value={usuario.Lougradoro} label="Lougradouro" variant="outlined" onChange={(evento) => SetUsuario({ ...usuario, Lougradoro: evento.target.value })} />
        <TextField type="text" value={usuario.Cidade} label="Cidade" variant="outlined" onChange={(evento) => SetUsuario({ ...usuario, Cidade: evento.target.value })} />
        <TextField type="text" value={usuario.Estado} label="Estado" variant="outlined" onChange={(evento) => SetUsuario({ ...usuario, Estado: evento.target.value })} />
        <TextField type="text" value={usuario.Pais} label="País" variant="outlined" onChange={(evento) => SetUsuario({ ...usuario, Pais: evento.target.value })} />
        <TextField type="text" value={usuario.Longitude} label="Longitude" variant="outlined" onChange={(evento) => SetUsuario({ ...usuario, Longitude: evento.target.value })} />
        <TextField type="text" value={usuario.Latitude} label="Latitude" variant="outlined" onChange={(evento) => SetUsuario({ ...usuario, Latitude: evento.target.value })} />
        <button onClick={(evento) => CadastrarUsuario(evento)}>Cadastrar</button></div>
        
    )
}


export default ListagemdeUsuarios