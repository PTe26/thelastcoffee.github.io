// costos.js

function calcularCostos() {
    // Obteniendo los valores de los campos de entrada
    var alquiler = parseFloat(document.getElementById("alquiler").value) || 0;
    var salariosFijos = parseFloat(document.getElementById("salariosFijos").value) || 0;
    var serviciosPublicos = parseFloat(document.getElementById("serviciosPublicos").value) || 0;
    var serviciosPublicosVar = parseFloat(document.getElementById("serviciosPublicosVar").value) || 0;
    var seguros = parseFloat(document.getElementById("seguros").value) || 0;
    var Mantrepa = parseFloat(document.getElementById("Mantrepa").value) || 0;
    var DepreMobi = parseFloat(document.getElementById("DepreMobi").value) || 0;
    var ImpLic = parseFloat(document.getElementById("ImpLic").value) || 0;
    var materiaPrima = parseFloat(document.getElementById("materiaPrima").value) || 0;
    var envases = parseFloat(document.getElementById("envases").value) || 0;
    var SalEmpleH = parseFloat(document.getElementById("SalEmpleH").value) || 0;
    var CombusTransp = parseFloat(document.getElementById("CombusTransp").value) || 0;
    var PlubMark = parseFloat(document.getElementById("PlubMark").value) || 0;
    var Comvent = parseFloat(document.getElementById("Comvent").value) || 0;

    // Calculando los costos totales
    var costoFijos = alquiler + salariosFijos + serviciosPublicos + serviciosPublicosVar + seguros + Mantrepa + DepreMobi + ImpLic;
    var costoVariables = materiaPrima + envases + SalEmpleH + CombusTransp + PlubMark + Comvent;
    var costoTotal = costoFijos + costoVariables;

    // Mostrando el resultado
    document.getElementById("costoTotal").innerHTML = "Costo Total: $" + costoTotal.toFixed(2);
}
