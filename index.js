// capiturando o primeiro argumento do processo (node index.js <arg> (<> siginifica template, algo que substitui depois))
const problemNumber = process.argv[2];
   
// ! inverte a verdade lógica (true becames false e vice e versa)
// esse é o padrão de guardião (bloco de if e else que interrompe a execução de uma função se não passa no teste)
if (!problemNumber) {
    console.log ("Problem number is not well defined")
    return // significa que ele interrompe o programa
}
console.log ("Resolvendo o problema", problemNumber) //se tem o 3 item (0,1,2 no caso escolhemos o 2) tiver um argumento (oo1) ele continua do programa





//If we list all the natural numbers below $10$ that are multiples of 
//$3$ or $5$, we get $3, 5, 6$ and $9$. The sum of these multiples is $23$.
//Find the sum of all the multiples of $3$ or $5$ below $1000$

let sum = 0;
for (let i=1; i<=1000; i++){ //++ significa que soma 1 unidades
    if ((i%3 == 0) || (i%5 == 0)){
        sum = sum + i
    }
}
    console.log (sum)