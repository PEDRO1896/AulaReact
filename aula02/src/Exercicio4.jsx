export default function Exercicio4({baset, alturat}){

  let base = Number(baset);
  let altura = Number(alturat);
  let area = baset * alturat;

return(
  <div>
    A área desse triangulo é {area}
  </div>
)
}