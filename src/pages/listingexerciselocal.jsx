import TextField from "@mui/material/TextField"
import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"

function Listagemdexercicio() {
    const { id } = useParams()


    const [local, SetLocal] = useState({
        nome: "",
        Descricao: "",
        CEP: "",
        Lougradoro: "",
        Bairro: "",
        Numero: "",
        Cidade: "",
        Estado: "",
        Pais: "",
        Longitude: "",
        Latitude: ""
    })

    useEffect(() => {
        async function fetchData() {
            if (!!id) {
                const resultados = await fetch("http://localhost:3000/locaisColeta/" + id)
                const dados = await resultados.json()
                SetLocal({...dados})
            }
        }
        fetchData()
    }, [id])
    async function CadastrarLocal(evento) {
        try {
            evento.preventDefault()
            await fetch("http://localhost:3000/locaisColeta", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(local)
            })
            alert("Usuario cadastrado com Sucesso!")
            SetLocal({
                nome: "",
                Descricao: "",
                CEP: "",
                Lougradoro: "",
                Bairro: "",
                Numero: "",
                Cidade: "",
                Estado: "",
                Pais: "",
                Longitude: "",
                Latitude: ""
            }
            )
        } catch (erro) {
            console.log(erro)
        }
    }
    async function BuscarCep() {
        try {
            if (local.CEP.length != 8) {
                alert("CEP Invalido!")
                return
            }
            const response = await fetch(`https://viacep.com.br/ws/${local.CEP}/json/`)
            const dados = await response.json()
            SetLocal({ ...local, Lougradoro: dados.logradouro, Estado: dados.uf, Cidade: dados.localidade, Bairro: dados.bairro, Pais: "Brasil" })

        } catch (erro) {
            console.log(erro)
        }
    }
    return (<form>
        <TextField type="text" value={local.nome} label="Nome" variant="outlined" onChange={(evento) => SetLocal({ ...local, nome: evento.target.value })} />
        <TextField type="text" value={local.Descricao} label="Descrição" variant="outlined" onChange={(evento) => SetLocal({ ...local, Descricao: evento.target.value })} />
        <TextField type="text" value={local.CEP} label="CEP" variant="outlined" onBlur={() => BuscarCep()} onChange={(evento) => SetLocal({ ...local, CEP: evento.target.value })} />
        <TextField type="text" value={local.Lougradoro} label="Lougradoro" variant="outlined" onChange={(evento) => SetLocal({ ...local, Lougradoro: evento.target.value })} />
        <TextField type="text" value={local.Bairro} label="Bairro" variant="outlined" onChange={(evento) => SetLocal({ ...local, Bairro: evento.target.value })} />
        <TextField type="text" value={local.Numero} label="Número" variant="outlined" onChange={(evento) => SetLocal({ ...local, Numero: evento.target.value })} />
        <TextField type="text" value={local.Cidade} label="Cidade" variant="outlined" onChange={(evento) => SetLocal({ ...local, Cidade: evento.target.value })} />
        <TextField type="text" value={local.Estado} label="Estado" variant="outlined" onChange={(evento) => SetLocal({ ...local, Estado: evento.target.value })} />
        <TextField type="text" value={local.Pais} label="País" variant="outlined" onChange={(evento) => SetLocal({ ...local, Pais: evento.target.value })} />
        <TextField type="text" value={local.Longitude} label="Longitude" variant="outlined" onChange={(evento) => SetLocal({ ...local, Longitude: evento.target.value })} />
        <TextField type="text" value={local.Latitude} label="Latitude" variant="outlined" onChange={(evento) => SetLocal({ ...local, Latitude: evento.target.value })} />

        <button onClick={(evento) => CadastrarLocal(evento)}>Cadastrar</button>
    </form>
    )
}

export default Listagemdexercicio