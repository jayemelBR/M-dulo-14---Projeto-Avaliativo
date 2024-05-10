import { useEffect, useState } from "react"
import { Link } from 'react-router-dom';

function Locallisting() {
    const [locais, setLocais] = useState([])
    async function BuscarLista() {
        try {
            const result = await fetch("http://localhost:3000/locaisColeta")
            const dados = await result.json()
            if (!!dados) {
                setLocais(dados)
            }
        } catch (erro) {
            console.log(erro)
        }
    }

    async function RemoverLocal(id) {
        try {
            await fetch("http://localhost:3000/locaisColeta/" + id, {
                method: "DELETE"
            })
            await BuscarLista()
            alert("Você apagou um local!")
        } catch (erro) {
            console.log(erro)
        }
    }
    useEffect(() => {
        BuscarLista()
    }, [])
    return (
        <div>
            {!!locais && locais.map((localatual) => (
                <div key={localatual.id}>
                    {localatual.nome}
                    {localatual.CEP}
                    {localatual.Descricao}
                    {localatual.Lougradoro}
                    {localatual.Bairro}
                    {localatual.Numero}
                    {localatual.Cidade}
                    {localatual.Estado}
                    {localatual.Pais}
                    {localatual.Latitude}
                    {localatual.Longitude}
                    <button onClick={() => RemoverLocal(localatual.id)}>Remover</button>
                    <Link  to={`/CadastroLocais/${localatual.id}`}
                    ><button>Editar</button> </Link>
                </div>
            ))}
        </div>
    )
}

export default Locallisting