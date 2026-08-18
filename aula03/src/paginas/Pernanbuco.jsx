import { Link } from"react-router-dom";
export default function Pernanbuco() 
{
    return (
 <div>
    <h1>Pernanbuco</h1>
    <div className="conteudo">
                <img src="/PE.png" />
                <p>
                Pernambuco tem grande importância histórica e cultural. É conhecido pelo frevo, pelo maracatu e pelas praias de Porto de Galinhas. Sua capital é Recife.
                </p>
                <p>
                <Link to="/">Voltar</Link>
                </p>
 </div>
 </div>
    );
}