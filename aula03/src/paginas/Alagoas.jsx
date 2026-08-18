import { Link } from"react-router-dom";
export default function Alagoas() 
{
    return (
 <div>
    <h1>Alagoas</h1>
    <div className="conteudo">
                <img src="/AL.png" />
                <p>
                Alagoas é conhecido por suas praias de águas claras e piscinas naturais. O turismo é uma atividade bastante importante no estado. Sua capital é Maceió.
                </p>
                <p>
                <Link to="/">Voltar</Link>
                </p>
 </div>
 </div>
    );
}