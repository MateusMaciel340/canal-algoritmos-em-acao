// Variáveis definidas com var podem ser reatribuídas e redeclaradas
var a = 1;
console.log(a);

var a = 2;
console.log(a);


// Variáveis definidas com let podem ser reatribuídas, mas não redeclaradas
let b = 1;
console.log(b);

b = 2;
console.log(b);


// Variáveis definidas com const não podem ser reatribuídas nem redeclaradas
const c = 1;
console.log(c);


{
    var x = 1;
    let y = 2;
    const z = 3;
}

console.log(x); // 1

// Isso causará um erro: "Uncaught ReferenceError: y is not defined"
console.log(y);
console.log(z);