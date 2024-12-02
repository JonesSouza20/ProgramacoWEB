import React, { useState } from "react";
import Botao from "./Botao";

function Calculadora() {
    const [tela, setTela] = useState('');

    const handleClique = (valor) => {
        if (valor === '=') {
            try {
                setTela(eval(tela)); //Faz o calculo das expressões.
            }   catch (error) {
                setTela('Erro'); //Retorno erro se caso houver.
            }
        }   else if (valor === 'C') {
            setTela(''); //Limpa a tela.
        }   else {
            setTela(tela + valor);  //Atualiza a expressão.
        }
    };

    return (
        <div>
            <div style={{padding: '14px', border: '2px solid black', fontSize: '22px', marginBottom: '12px'}}>
                {tela || '0'}
            </div>
            <div>
                {['7', '8', '9', '/'].map((valor) => (
                    <botao key={valor} valor={valor} Clique={handleClique} />
                ))}
            </div>
            <div>
                {['4', '5', '6', '*'].map((valor) => (
                    <botao key={valor} valor={valor} Clique={handleClique} />
                ))}
            </div>
            <div>
                {['1', '2', '3', '-'].map((valor) => (
                    <botao key={valor} valor={valor} Clique={handleClique} />
                ))}
            </div>
            <div>
                {['0', '.', '=', '+'].map((valor) => (
                    <botao key={valor} valor={valor} Clique={handleClique} />
                ))}
            </div>
            <div>
                <botao valor='C' Clique={handleClique} />
            </div>
        </div>
    );
}

export default Calculadora;