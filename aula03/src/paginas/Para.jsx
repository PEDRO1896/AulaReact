import { Link } from"react-router-dom";
export default function Para() 
{
    return (
 <div>
    <h1>Para</h1>
    <div className="conteudo">
                <img src="/PA.png" />
                <p>
                O Pará é um dos estados mais populosos da Região Norte. Destaca-se pela mineração, agricultura e pesca. Sua capital é Belém.
                </p>
                <p>
                <Link to="/">Voltar</Link>
                </p>
 </div>
 </div>
    );
}