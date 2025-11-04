function toNumber(n) {
const v = typeof n === 'number' ? n : Number(n);
if (Number.isNaN(v)) throw new Error('Nombre invalide');
return v;
}


function compute(a, b, op) {
const x = toNumber(a);
const y = toNumber(b);


switch (op) {
case '+': return x + y;
case '-': return x - y;
case '*': return x * y;
case '/':
if (y === 0) throw new Error('Division par zéro');
return x / y;
case '%': return x % y;
case '^': return Math.pow(x, y);
default:
throw new Error('Opérateur non supporté');
}
}


module.exports = { compute };