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

    var costosFijos = parseFloat(document.getElementById("alquiler").value) +
                      parseFloat(document.getElementById("salariosFijos").value) +
                      parseFloat(document.getElementById("serviciosPublicos").value +
                      parseFloat(document.getElementById("seguros").value + 
                      parseFloat(document.getElementById("Mantrepa").value) +
                      parseFloat(document.getElementById("DepreMobi").value +
                      parseFloat(document.getElementById("ImpLic").value   
    var costosVariables = parseFloat(document.getElementById("materiaPrima").valu +
                            parseFloat(document.getElementById("envases").value +
                              parseFloat(document.getElementById("SalEmpleH").value +
                               parseFloat(document.getElementById("CombusTransp").value +
                                parseFloat(document.getElementById("PlubMark").value +
                                  parseFloat(document.getElementById("ComVentas").value          
                                 
        

    // Calcula el costo total
    var costoTotal = alquiler + salariosFijos + serviciosPublicos + seguros + Mantrepa + DepreMobi + ImpLic +
        materiaPrima + envases + SalEmpleH + CombusTransp + PlubMark + ComVentas;

    // Actualiza el resultado en el HTML
    document.getElementById("costoTotal").innerHTML = "Costo Total: $" + costoTotal.toFixed(2);


                                             // Actualiza el párrafo de costo total
    document.getElementById("costoTotal").textContent = "Costo Total: $" + costosTotales;

    // Llama a la función para crear o actualizar el gráfico
    crearActualizarGrafico(costosFijos, costosVariables);
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


function crearActualizarGrafico(costosFijos, costosVariables) {
    var ctx = document.getElementById("graficoBarras").getContext('2d');
    
    // Si ya existe un gráfico, destrúyelo antes de crear uno nuevo
    if (window.myBarChart) {
        window.myBarChart.destroy();
    }

    // Crea el nuevo gráfico de barras
    window.myBarChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Costos Fijos', 'Costos Variables'],
            datasets: [{
                label: 'Costos',
                data: [costosFijos, costosVariables],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.7)',
                    'rgba(54, 162, 235, 0.7)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
