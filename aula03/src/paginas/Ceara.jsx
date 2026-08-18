import { Link } from"react-router-dom";
export default function Ceara() 
{
    return (
 <div>
    <h1>Ceara</h1>
    <div className="conteudo">
                <img src="/CE.png" />
                <p>
                O Ceará é famoso por suas praias, dunas e clima quente. O turismo é uma atividade muito importante para o estado. Sua capital é Fortaleza.
Rio Grande do Norte — RN: O Rio Grande do Norte possui belas praias e grandes áreas de dunas. É conhecido também pela produção de sal. Sua capital é Natal.
                </p>
                <p>
                <Link to="/">Voltar</Link>
                </p>
 </div>
 </div>
    );
}