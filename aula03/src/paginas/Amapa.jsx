import { Link } from"react-router-dom";
export default function Amapa() 
{
    return (
 <div>
    <h1>Amapa</h1>
    <div className="conteudo">
                <img src="/AP.png" />
                <p>
                O Amapá está localizado no extremo norte do Brasil. É conhecido por suas áreas de floresta preservada e por ser cortado pela Linha do Equador. Sua capital é Macapá.
                </p>
                <p>
                <Link to="/">Voltar</Link>
                </p>
 </div>
 </div>
    );
}