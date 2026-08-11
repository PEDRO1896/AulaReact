import { Link } from"react-router-dom";
export default function Goiás()
{
    return (
<div>
<h1>Estado de Goiás</h1>
            <div className="conteudo">
                <img src="/GO.png" />
                <p>
                Goiás tem Goiânia como capital e se destaca pela agricultura, pela pecuária e pela produção de alimentos. O estado também possui belas paisagens naturais, como as encontradas na Chapada dos Veadeiros.
                </p>
                <p>
                <Link to="/">Voltar</Link>
                </p>
</div>
</div>
    );
}