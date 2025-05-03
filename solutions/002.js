export default function solucao002() {
    const max = 4000000;
    let sum = 0; 
    let a = 1;
    let b = 2;

    while (true) {
        const c = a+b;
        if (c > max) {
            break;
        }
        if (c%2 == 0) {
            sum += c; // é a mesma coisa que sum = sum + c
        }
        a = b;
        b = c;
    }
    return sum
}