import { Link } from"react-router-dom";
export default function Piaui() 
{
    return (
 <div>
    <h1>Piaui</h1>
    <div className="conteudo">
                <img src="/PI.png" />
                <p>
                O Piauí está localizado no centro-oeste do Nordeste. É conhecido pelo Parque Nacional da Serra da Capivara, que possui importantes pinturas rupestres. Sua capital é Teresina.
                </p>
                <p>
                <Link to="/">Voltar</Link>
                </p>
 </div>
 </div>
    );
}