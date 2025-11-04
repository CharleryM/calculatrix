const display = document.getElementById('display');
const keys = document.querySelector('.keys');
let current = '0';
let previous = null;
let operator = null;


function updateDisplay(){ display.textContent = current; }


async function calculateAPI(a, b, op) {
try {
const res = await fetch('/api/calcules', {
method: 'POST',
headers: { 'Content-Type': 'application/json' },
body: JSON.stringify({ a, b, op })
});
const data = await res.json();
if (!res.ok) throw new Error(data.error || 'Erreur API');
return data.result;
} catch (err) {
return 'Error';
}
}


keys.addEventListener('click', async (e) => {
if (e.target.tagName !== 'BUTTON') return;
const btn = e.target;
const action = btn.dataset.action;
const op = btn.dataset.op;
const value = btn.textContent;


if (action === 'clear') { current='0'; previous=null; operator=null; updateDisplay(); return; }
if (action === 'del') { current=current.length>1?current.slice(0,-1):'0'; updateDisplay(); return; }
if (action === 'dot') { if(!current.includes('.')) current+='.'; updateDisplay(); return; }
if (action === 'neg') { current=String(-Number(current)); updateDisplay(); return; }
if (action === 'percent') { current=String(Number(current)/100); updateDisplay(); return; }


if (op) {
if (op==='='){
if(previous===null || operator===null) return;
const result = await calculateAPI(previous, current, operator);
current = String(result);
previous=null;
operator=null;
updateDisplay();
return;
}
operator = op;
previous = current;
current = '0';
updateDisplay();
return;
}


if(/^[0-9]$/.test(value)){ current = current==='0'?value:current+value; updateDisplay(); }
});


updateDisplay();