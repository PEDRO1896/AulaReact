import { Link } from"react-router-dom";
export default function MinasGerais()
{
    return (
        <div>
            <h1>Estado de Minas Gerais</h1>
        <div className="conteudo">
            <img src="/MG.png" />
            <p>
            O estado de Minas Gerais está localizado na região Sudeste do Brasil e é conhecido por sua rica história, cultura e tradições. Sua capital é Belo Horizonte, e sua economia se destaca pela mineração, agropecuária, indústria e turismo. O estado também é famoso por sua culinária e cidades históricas.
            </p>

            <p>
            <Link to="/">Voltar</Link>
            </p>
        </div>
        </div>
    );
}