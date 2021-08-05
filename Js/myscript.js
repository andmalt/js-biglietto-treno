
const requiredAge = parseInt(prompt("Quanti anni ha?"));
const kilometers = parseInt(prompt("Quanti chilometri deve percorrere?"));
const costPerKilometers = 0.21;

let cost = kilometers*costPerKilometers;
let totalCost;

if (requiredAge < 18){
    totalCost = cost - ((cost*20) / 100);
}
else if (requiredAge > 65){
    totalCost = cost - ((cost*40) /100);
}
else {
    totalCost = cost;
}

document.getElementById("prezzo-finale").innerHTML = totalCost.toFixed(2);