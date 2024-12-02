import React from "react";

function botao({valor, Clique}) {
    return (
        <button onClick={() => Clique(valor)} style={{padding: '10px', margin: '6px', fontsize: '16px'}}>{valor}</button>
    );
}

export default botao;