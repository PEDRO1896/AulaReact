export default function Exercicio6({capital, taxa, tempo})
{
let montanteSimples = Number(capital) * (1 + (Number(taxa) / 100) * Number(tempo));
let montanteComposto = Number(capital) * Math.pow((1 + Number(taxa)/ 100), Number(tempo));


return(
    <div>
        Capital: R$ {Number(capital).toFixed(2)}, taxa: {taxa}5, tempo: {tempo} meses.
        Montante (Juros Simples) = R$ {montanteSimples.toFixed(2)}.
        Montante (JUros Compostos) = R${montanteComposto.toFixed(2)}.
    </div>
)

}