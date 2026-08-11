import { Link } from"react-router-dom";
export default function Parana()
{
    return (
<div>
    <h1>Estado do Paraná</h1>
    <div className="conteudo">
        <img src="/PR.png" />
        <p>
        O Paraná é um estado localizado na região Sul do Brasil. Sua capital é Curitiba, conhecida pela organização e pelas áreas verdes. O estado possui belas paisagens, como as Cataratas do Iguaçu, além de uma economia baseada na agricultura, na indústria e no comércio. O Paraná também se destaca por sua diversidade cultural e por suas cidades acolhedoras.
        </p>
        
        <p>
            <Link to="/">Voltar</Link>
        </p>
        </div>
      </div>

    );
    }