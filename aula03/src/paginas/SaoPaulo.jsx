import { Link } from"react-router-dom";
export default function SaoPaulo()
{
    return (
        <div>
            <h1>Estado de São Paulo</h1>
            <div className="conteudo">
                <img src="/SP.png" />
                <p>O estado de São Paulo está localizado na região Sudeste do Brasil e é o mais populoso do país. Sua capital, a cidade de São Paulo, é um importante centro econômico, financeiro e cultural. O estado possui uma economia diversificada, com destaque para a indústria, o comércio, os serviços e a agropecuária. Além disso, conta com uma rica diversidade cultural e uma infraestrutura desenvolvida, sendo um dos principais motores da economia brasileira.
                </p>
                <p>
                    <Link to="/">Voltar</Link>
                </p>
            </div>
        </div>
    );
}