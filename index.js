import solucao001 from "./solutions/001.js";
import solucao002 from "./solutions/002.js";



// capiturando o primeiro argumento do processo (node index.js <arg> (<> siginifica template, algo que substitui depois))
const problemNumber = process.argv[2];
   
// ! inverte a verdade lógica (true becames false e vice e versa)
// esse é o padrão de guardião (bloco de if e else que interrompe a execução de uma função se não passa no teste)
if (!problemNumber) {
    console.log ("Problem number is not well defined");
    process.exit(0) // significa que ele interrompe o programa
}
console.log ("Resolvendo o problema", problemNumber) //se tem o 3 item (0,1,2 no caso escolhemos o 2) tiver um argumento (oo1) ele continua do programa

let solucao;
switch (problemNumber) { // switch é um tipo de router (padrão de código)
    case "001":
        solucao = solucao001();
        break;
    case "002":
        solucao = solucao002();
        break;
    default:
        console.log("Solução não encontrada");
        process.exit(0)
}

console.log("A solução do problema", problemNumber, "é:", solucao);

