import { Link } from"react-router-dom";
export default function EspiritoSanto()
{
    return (
        <div>
            <h1>Estado do Espirito Santo</h1>
            <div className="conteudo">
                <img src="/ES.png" />
                <p>
                O estado do Espírito Santo está localizado na região Sudeste e tem como capital Vitória. Sua economia é baseada na atividade portuária, indústria, comércio, agricultura e produção de café. Além disso, o estado possui belas praias e importantes áreas de preservação ambiental.
                </p>
                <p>
                <Link to="/">Voltar</Link>
                </p>
            </div>
        </div>
    );
}