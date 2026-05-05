export default function Exercicio2({peso, altura})
{
    let imc= Number(peso)/ Number(altura)*Number(altura);   
    
    return (
        <div>
            Peso: {peso} <br />
            Altura: {altura} <br />
            O IMC é: {imc} <br />
        </div>
    )
}