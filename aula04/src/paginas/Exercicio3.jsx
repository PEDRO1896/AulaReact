import { Link } from "react-router-dom";
import { useState } from "react";

export default function Exercicio3() {

 const [valor, setValor] = useState();
 const [taxa, setTaxa] = useState();
 const [tempo, setTempo] = useState();
 const [resultado, setResultado] = useState();

 function calcular() {
 let valor_parcela;

 // Convertendo os valores para números
 let nValor = Number(valor);
 let nTaxa = Number(taxa);
 let nTempo = Number(tempo);

 // Aplicando a fórmula: taxa ao quadrado (nTaxa * nTaxa)
 valor_parcela = nValor + nValor * ((nTaxa * nTaxa) / 100) * nTempo;

 // Guardando o valor final formatado com 2 casas decimais no estado 'resultado'
 setResultado(valor_parcela.toFixed(2));
 }

 return (
 <div>
 {/* Seus inputs devem atualizar os estados correspondentes aqui no HTML */}
 <input type="text" placeholder="Valor" onChange={(e) => setValor(e.target.value)} />
 <input type="text" placeholder="Taxa" onChange={(e) => setTaxa(e.target.value)} />
 <input type="text" placeholder="Tempo" onChange={(e) => setTempo(e.target.value)} />

 <button onClick={calcular}>Calcular</button>

 {/* Exibindo o valor armazenado na variável de estado 'resultado' */}
 <p>O valor da parcela é = R$ {resultado}</p>
 </div>
 );
}