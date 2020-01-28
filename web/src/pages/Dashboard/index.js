import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Dashboard({ history }) {
    const [nome, setNome] = useState('');
    let count = 0;
    /** Array inicial para apenas 2 cotas - exemplo */
    const lista = [{
        matricula: 1137204,
        nome: "Marlon"
    },{
        matricula: 1083456,
        nome: "Thiago"
    }];

    useEffect(() => {
        let nome = localStorage.getItem('nome');
        if(nome){
            setNome(localStorage.getItem('nome'));
            count++;
        }
        else history.push('/');
    }, [history]);

    function handleBtn(e, id) {

        const td = document.getElementById(id);
        const btn = document.getElementById("btn" + id);
        if (!td.innerHTML) {
            td.innerHTML = nome;
            btn.innerText = "Ocup";
        }
        else {
            btn.innerText = "Livre";
            td.innerHTML = "";
        }
    }

    return (
        <>
            <h5>Olá {nome} </h5>
            <table className="table table-stripped">
                <thead>
                    <th>
                        Nome
                    </th>
                    <th>
                        Ação
                    </th>
                </thead>
                <tbody>
                    {lista.map(nome => {
                        count++;
                        return (
                            <tr>
                                <td id={`cota`+count}>{nome.nome}</td>
                                <td>
                                    <button id={`btncota`+count} onClick={e => handleBtn(e, "cota"+count)}>Livre</button>
                                </td>
                            </tr>                  
                        )}
                    )}
                   
{/*                     <tr>
                        <td id="cota1"></td>
                        <td>
                            <button id="btncota1" onClick={e => handleBtn(e, "cota1")}>Livre</button>
                        </td>
                    </tr>
                    <tr>
                        <td id="cota2"></td>
                        <td>
                            <button id="btncota2" onClick={e => handleBtn(e, "cota2")}>Livre</button>
                        </td>
                    </tr> */}
                </tbody>
            </table>
        </>
    );
}
