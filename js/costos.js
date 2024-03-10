// costos.js

function calcularCostos() {
    // Obtén los valores de los campos
    var alquiler = parseFloat(document.getElementById("alquiler").value) || 0;
    var salariosFijos = parseFloat(document.getElementById("salariosFijos").value) || 0;
    var serviciosPublicos = parseFloat(document.getElementById("serviciosPublicos").value) || 0;
    var seguros = parseFloat(document.getElementById("seguros").value) || 0;
    var Mantrepa = parseFloat(document.getElementById("Mantrepa").value) || 0;
    var DepreMobi = parseFloat(document.getElementById("DepreMobi").value) || 0;
    var ImpLic = parseFloat(document.getElementById("ImpLic").value) || 0;

    var materiaPrima = parseFloat(document.getElementById("materiaPrima").value) || 0;
    var envases = parseFloat(document.getElementById("envases").value) || 0;
    var SalEmpleH = parseFloat(document.getElementById("SalEmpleH").value) || 0;
    var CombusTransp = parseFloat(document.getElementById("CombusTransp").value) || 0;
    var PlubMark = parseFloat(document.getElementById("PlubMark").value) || 0;
    var ComVentas = parseFloat(document.getElementById("ComVentas").value) || 0;

    // Calcula el costo total
    var costoTotal = alquiler + salariosFijos + serviciosPublicos + seguros + Mantrepa + DepreMobi + ImpLic +
        materiaPrima + envases + SalEmpleH + CombusTransp + PlubMark + ComVentas;

    // Actualiza el resultado en el HTML
    document.getElementById("costoTotal").innerHTML = "Costo Total: $" + costoTotal.toFixed(2);
}

function borrarRegistro() {
    // Obtén todos los campos de entrada y restablece sus valores
    var campos = document.querySelectorAll('input[type="number"]');
    campos.forEach(function (campo) {
        campo.value = "";
    });

    // Restablece el resultado a $0
    document.getElementById("costoTotal").innerHTML = "Costo Total: $0";
}
