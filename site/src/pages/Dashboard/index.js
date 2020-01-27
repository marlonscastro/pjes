import React, { useState, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function Dashboard() {
    const [nome, setNome] = useState('');

    useEffect(() => {
        setNome(localStorage.getItem('nome'));
    }, []);

    function handleBtn(e, id) {

        const td = document.getElementById(id);
        const btn = document.getElementById("btn" + id);
        if (!td.innerHTML) {
            td.innerHTML = nome;
            btn.innerText = "Ocup";
        }
        else {
            if(td === nome){            
                btn.innerText = "Livre";
                td.innerHTML = "";
            }
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
                    <tr>
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
                    </tr>
                </tbody>
            </table>
        </>
    );
}
