import { Link } from"react-router-dom";
export default function Acre() 
{
    return (
 <div>
    <h1>Acre</h1>
    <div className="conteudo">
                <img src="/AC.png" />
                <p>
                O Acre fica no extremo oeste da Região Norte. É conhecido pela Floresta Amazônica e por sua história ligada à extração do látex. Sua capital é Rio Branco.   
                </p>
                <p>
                <Link to="/">Voltar</Link>
                </p>
 </div>
 </div>
    );
}