import { Link } from"react-router-dom";
export default function Sergipe() 
{
    return (
 <div>
    <h1>Sergipe</h1>
    <div className="conteudo">
                <img src="/SE.png" />
                <p>
                Sergipe é o menor estado brasileiro em território. Possui belas praias e tradições culturais nordestinas. Sua capital é Aracaju.
                </p>
                <p>
                <Link to="/">Voltar</Link>
                </p>
 </div>
 </div>
    );
}