import { Link } from"react-router-dom";
export default function Tocantins() 
{
    return (
 <div>
    <h1>Tocantins</h1>
    <div className="conteudo">
                <img src="/TO.png" />
                <p>
                Tocantins é o estado mais novo do Brasil, criado em 1988. Destaca-se pelo turismo, pela agricultura e por lugares como o Jalapão. Sua capital é Palmas.
                </p>
                <p>
                <Link to="/">Voltar</Link>
                </p>
 </div>
 </div>
    );
}