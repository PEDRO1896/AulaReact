import { Link } from"react-router-dom";
export default function Paraiba() 
{
    return (
 <div>
    <h1>Paraiba</h1>
    <div className="conteudo">
                <img src="/PB.png" />
                <p>
                A Paraíba é um dos menores estados do Brasil. Possui praias bonitas e uma cultura muito rica, especialmente durante as festas juninas. Sua capital é João Pessoa.
                </p>
                <p>
                <Link to="/">Voltar</Link>
                </p>
 </div>
 </div>
    );
}