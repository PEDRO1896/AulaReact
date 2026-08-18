import { Link } from"react-router-dom";
export default function Rondonia() 
{
    return (
 <div>
    <h1>Rondonia</h1>
    <div className="conteudo">
                <img src="/RO.png" />
                <p>
                Rondônia está no sudoeste da Região Norte e faz fronteira com a Bolívia. Sua economia inclui agricultura, pecuária e mineração. Sua capital é Porto Velho.
                </p>
                <p>
                <Link to="/">Voltar</Link>
                </p>
 </div>
 </div>
    );
}