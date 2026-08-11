import { Link } from"react-router-dom";
export default function SantaCatarina()
{
    return (
 <div>
    <h1>Estado de Santa Catarina</h1>
    <div className="conteudo">
        <img src="/SC.png" />
        <p>
        Santa Catarina tem Florianópolis como capital e é conhecida por suas belas praias, serras e cidades de forte influência europeia. A economia do estado é diversificada, com destaque para a indústria, o turismo e a agricultura.
        </p>
        <p>
            <Link to="/">Voltar</Link>
        </p>
 </div>
 </div>
    );
}