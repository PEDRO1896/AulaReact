export default function Exercicio2({nota1, nota2 }) {
   
    let media = Number(nota1) + Number(nota2)/2;

    return (
        <div>
    Nota1 : {nota1} <br />
    Nota2: {nota2} <br />
    A media aritimetica é : {media}
        </div>
    )
}