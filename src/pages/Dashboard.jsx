import React, { useEffect, useState } from 'react';

function Dashboard() {
  const [locais, SetLocais] = useState(0)
  const [usuarios, SetUsuarios] = useState(0)
  async function PegaosDadosLocais() {
    const resultados = await fetch("http://localhost:3000/locaisColeta")
    const dados = await resultados.json()
    SetLocais(dados.length)
  }  
  async function PegaosDadosUsuarios() {
    const resultados = await fetch("http://localhost:3000/usuarios")
    const dados = await resultados.json()
    SetUsuarios(dados.length)
  }
  useEffect(() =>{
    PegaosDadosLocais()
    PegaosDadosUsuarios()
  },[])
  return (
      <div>
        <h1>Dashboard</h1>
        <div className="cards-container">
          <div className="card">
            <h2>Usuários</h2>
            <p>Total de usuários {usuarios}</p>
          </div>
          <div className="card">
            <h2>Locais</h2>
            <p>Total de locais:{locais}</p>
          </div>
        </div>
      </div>
    );
  };
  
export default Dashboard