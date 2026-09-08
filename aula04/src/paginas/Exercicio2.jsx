import {Link} from "react-router-dom";
import {useState} from "react";
export default function Exercicio2()
{
const[celsius, setCelsius] = useState();
const[fahrenheit, setFarenheit] = useState();

function calcular()
{

}
    return (
        <div>

            <h1>Exercício 2</h1>

            <div className="conteudo">
        <form>
            <p>
                Digite a temperatura em farenheit <br />
                <input type="text" 
                value={numero}
                onChange={(e) => setFarenheit(e.target.value)}
                />
            </p>

        <p> 
            <input type="button" value="Calcular" />
        </p>

        <p>
            {resultado}
        </p>



        </form>


                <p>
                    <Link to="/">Voltar</Link>
                </p>

            </div>

        </div>
    );
}