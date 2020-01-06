import React, { useState } from 'react';
import api from './services/api';
import './App.css';

function App() {
  const [cpf, setCpf] = useState('');
  async function handleSubmit(event){
    //Prevenir o funcionamento padrão do formulário    
    event.preventDefault(); 
    console.log(cpf);

    const response = await api.post('/sessions', { cpf });
  }

  return (
    <div className="container">
      <div className="content">
        <p>
          Teste de <strong>Aplicativo</strong>.
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="cpf">CPF *</label>
          <input 
            type="text" 
            id="cpf" 
            placeholder="digite seu CPF"
            value={cpf}
            onChange={event => setCpf(event.target.value)}
          />
          <label htmlFor="senha">SENHA *</label>
          <input 
            type="password" 
            id="senha" 
            placeholder="digite sua senha"
          />          
          <button className="btn" type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
