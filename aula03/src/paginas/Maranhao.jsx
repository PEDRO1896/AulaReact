import { Link } from"react-router-dom";
export default function Maranhão() 
{
    return (
 <div>
    <h1>Maranhão</h1>
    <div className="conteudo">
                <img src="/MA.png" />
                <p>
                O Maranhão fica no oeste da Região Nordeste. É conhecido pelos Lençóis Maranhenses, com suas belas dunas e lagoas. Sua capital é São Luís.
                </p>
                <p>
                <Link to="/">Voltar</Link>
                </p>
 </div>
 </div>
    );
}