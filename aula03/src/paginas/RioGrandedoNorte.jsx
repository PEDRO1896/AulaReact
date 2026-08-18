import { Link } from"react-router-dom";
export default function RioGrandedoNorte() 
{
    return (
 <div>
    <h1>Rio Grande do Norte</h1>
    <div className="conteudo">
                <img src="/RN.png" />
                <p>
                O Rio Grande do Norte possui belas praias e grandes áreas de dunas. É conhecido também pela produção de sal. Sua capital é Natal.
                </p>
                <p>
                <Link to="/">Voltar</Link>
                </p>
 </div>
 </div>
    );
}