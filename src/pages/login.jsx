import { useContext, useState } from "react";
import {Button} from "@mui/material"
import { TextFields } from "@mui/icons-material"

const Paginalogin = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [showRegistration, setShowRegistration] = useState(false);
    const [newUsername, setNewUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');

const handleLogin = () => {
    // Aqui você pode adicionar a lógica para verificar as credenciais do usuário
    // Por enquanto, vamos apenas verificar se ambos os campos estão preenchidos
    if (username !== '' && password !== '') {
      setLoggedIn(true);
    } else {
      alert('Por favor, preencha ambos os campos.');
    }
  };

  const handleRegistration = () => {
    // Aqui você pode adicionar a lógica para registrar o novo usuário
    // Por enquanto, vamos apenas alternar para mostrar o formulário de registro
    setShowRegistration(true);
  };

  const handleRegister = () => {
    // Aqui você pode adicionar a lógica para registrar o novo usuário
    // Por enquanto, vamos apenas alternar para mostrar o formulário de login
    setShowRegistration(false);
    alert('Usuário registrado com sucesso!');
  };

  return (
    <div>
      {showRegistration ? (
        <div>
          <h2>Cadastrar</h2>
          <input
            type="text"
            placeholder="Nome de usuário"
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Senha"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <br />
          <button onClick={handleRegister}>Cadastrar</button>
          <br />
          <button onClick={() => setShowRegistration(false)}>Cancelar</button>
        </div>
      ) : (
        <div>
          {loggedIn ? (
            <div>
              <h2>Você está Online</h2>
              <button onClick={() => setLoggedIn(false)}>Logout</button>
            </div>
          ) : (
            <div>
              <h2>Login</h2>
              <input
                type="text"
                placeholder="Nome de usuário"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <br />
              <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <br />
              <button onClick={handleLogin}>Login</button>
              <br />
              <button onClick={handleRegistration}>Cadastrar</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Paginalogin