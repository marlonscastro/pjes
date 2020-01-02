import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <div className="content">
        <p>
          Teste de aplicativo para o PJES.
        </p>
        <form>
          <label htmlFor="email">E-MAIL *</label>
          <input type="email" id="email"/>
        </form>
      </div>
    </div>
  );
}

export default App;
