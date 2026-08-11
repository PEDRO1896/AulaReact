import { Link } from"react-router-dom";
export default function DistritoFederal()
{
    return (
 <div>
    <h1>Distrito Federal</h1>
    <div className="conteudo">
                <img src="/DF.png" />
                <p>
                 O Distrito Federal tem Brasília como capital do Brasil. É onde estão localizados os principais órgãos do governo federal e possui grande importância política e administrativa para o país.   
                </p>
                <p>
                <Link to="/">Voltar</Link>
                </p>
 </div>
 </div>
    );
}