import { Link } from"react-router-dom";
export default function MatoGrossodoSul()
{
    return (
        <div>
    <h1>Estado do Mato Grosso do Sul</h1>
            <div className="conteudo">
                <img src="/MS.png" />
                <p>
                Mato Grosso do Sul tem Campo Grande como capital. O estado se destaca pelo turismo de natureza, especialmente no Pantanal e em Bonito, além da agricultura e da pecuária.
                </p>
                <p>
                <Link to="/">Voltar</Link>
                </p>
                </div>
                </div>
    );
    }