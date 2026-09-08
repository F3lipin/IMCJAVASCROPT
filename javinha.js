let calcularBtn = document.getElementById("calcularBtn");

calcularBtn.addEventListener("click", function () {

    
let peso = document.getElementById("peso").value;
let altura = document.getElementById("altura").value;
let imc = peso / (altura * altura);

if (imc < 18.5 ) {
    alert("Seu IMC é " + imc.toFixed(2) + ": Magreza");
}
else if (imc >= 18.5 && imc < 25) {
    alert("Seu IMC é " + imc.toFixed(2) + ": Normal (adequado)");
}
else if (imc >= 25 && imc < 30) {
    alert("Seu IMC é " + imc.toFixed(2) + ": Sobrepeso");
}
else if (imc >= 30 && imc < 40) {
    alert("Seu IMC é " + imc.toFixed(2) + ": Obesidade");
}
else {
    alert("Seu IMC é " + imc.toFixed(2) + ": Obesidade Grave");
}
});