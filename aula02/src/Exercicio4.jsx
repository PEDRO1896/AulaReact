export default function Exercicio4({base, altura}){

  let triangulo = area=(base*altura /2)

  let retangulo = area=(base*altura)

  return (
    <div>
base : {base} <br />
altura: {altura} <br />
A area do triangulo é {base} é , e o retangulo é {altura}.
    </div>
)
}

