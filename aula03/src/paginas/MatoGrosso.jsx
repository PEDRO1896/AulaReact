import { Link } from"react-router-dom";
export default function MatoGrosso()
{
    return (
 <div>
    <h1>Estado do Mato Grosso</h1>
            <div className="conteudo">
                <img src="/MT.png" />
<p>
Mato Grosso tem Cuiabá como capital e é conhecido por sua grande produção agrícola e pecuária. O estado também abriga parte do Pantanal e possui uma rica diversidade de animais e plantas.
</p>
<p>
<Link to="/">Voltar</Link>
</p>
 </div>
 </div>
    );
}