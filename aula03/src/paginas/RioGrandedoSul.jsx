import { Link } from"react-router-dom";
export default function RioGrandedoSul()
{
    return (
<div>
    <h1>Estado do Rio Grande do Sul</h1>
    <div className="conteudo">
        <img src="/RS.png" />
        <p>
        O Rio Grande do Sul tem Porto Alegre como capital. O estado possui uma forte tradição cultural, com destaque para o chimarrão, o tradicionalismo gaúcho, a agricultura e a produção de vinhos.
        </p>
        <p>
                <Link to="/">Voltar</Link>
                </p>
</div>
</div>
    );
}