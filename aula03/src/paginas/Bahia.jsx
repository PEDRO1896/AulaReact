import { Link } from"react-router-dom";
export default function Bahia() 
{
    return (
 <div>
    <h1>Bahia</h1>
    <div className="conteudo">
                <img src="/BA.png" />
                <p>
                A Bahia é o maior estado do Nordeste e possui uma cultura muito diversificada. É famosa pela culinária, pelas festas e pelas praias. Sua capital é Salvador.
                </p>
                <p>
                <Link to="/">Voltar</Link>
                </p>
 </div>
 </div>
    );
}