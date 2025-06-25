import React from "react";
import './InsData.css';

function InsData({className})
{
    return(
        <>
            <div id="data" className={className}> 
                <h1>Matrícula</h1>
                <input id="matinp" type="text" placeholder="Insira sua matírcula"/>
                <h1>Setor</h1>
                <select id="setinp" name="Selecione seu setor">
                    <option value="" disabled selected hidden>Selecione seu setor</option>
                    <option value="Manutenção">Manutenção</option> 
                    <option value="Supervisor">Supervisor</option>
                    <option value="Operador">Operador</option>
                </select>
                <h1>Senha</h1>
                <input id="senhinp" type="password" placeholder="Insira sua senha"/>
            </div>
        </>
    )
}

export default InsData;