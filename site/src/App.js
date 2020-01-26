import React, { useState } from 'react';
import './App.css';

function App() {
  const [nome, setNome] = useState('');
  async function handleSubmit(event){
    //Prevenir o funcionamento padrão do formulário    
    event.preventDefault(); 
    console.log(nome);

    localStorage.setItem('nome', nome);
    //const response = await api.post('/sessions', { cpf });
  }

  return (
    <div className="container">
      <div className="content">
        <p>
          Teste de <strong>Aplicativo</strong>.
        </p>
        <form onSubmit={handleSubmit}>
          <label htmlFor="nome">Nome *</label>
          <input 
            type="text" 
            id="nome" 
            placeholder="Digite seu nome"
            value={nome}
            onChange={event => setNome(event.target.value)}
          />
  
          <button className="btn" type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}

export default App;
