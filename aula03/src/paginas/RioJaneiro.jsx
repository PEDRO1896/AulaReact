import { Link } from"react-router-dom";
export default function RioJaneiro()
{
    return (
        <div>
            <h1>Estado do Rio de Janeiro</h1>
            <div className="conteudo">
            <img src="/RJ.png" />
        <p>
        O estado do Rio de Janeiro está localizado na região Sudeste e tem como capital a cidade do Rio de Janeiro. É conhecido por suas belas paisagens, praias e pontos turísticos famosos. Sua economia é impulsionada pelo turismo, pela indústria, pelos serviços e pela produção de petróleo.
        </p>
        <Link to="/">Voltar</Link>
        <p>

        </p>
        </div></div>
    );
}