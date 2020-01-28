import React, { useState } from 'react';


export default function Login({ history }) {

    const [nome, setNome] = useState('');
    async function handleSubmit(event){
      //Prevenir o funcionamento padrão do formulário    
      event.preventDefault(); 
      if(nome){
        localStorage.setItem('nome', nome);
        history.push('/dashboard');
      }
      else alert("Digite um nome de usuário");
    }

    return (
        <>
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
        </>
    );
}