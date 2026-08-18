import { Link } from"react-router-dom";
export default function Amazonas() 
{
    return (
 <div>
    <h1>Amazonas</h1>
    <div className="conteudo">
                <img src="/AM.png" />
                <p>
                O Amazonas é o maior estado do Brasil em território. É famoso pela Floresta Amazônica e pelos grandes rios. Sua capital é Manaus.
                </p>
                <p>
                <Link to="/">Voltar</Link>
                </p>
 </div>
 </div>
    );
}