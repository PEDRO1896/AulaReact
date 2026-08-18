import { Link } from"react-router-dom";
export default function Roraima() 
{
    return (
 <div>
    <h1>Roraima</h1>
    <div className="conteudo">
                <img src="/RR.png" />
                <p>
                Roraima é o estado mais ao norte do Brasil. Possui paisagens com florestas, savanas e montanhas. Sua capital é Boa Vista.
                </p>
                <p>
                <Link to="/">Voltar</Link>
                </p>
 </div>
 </div>
    );
}