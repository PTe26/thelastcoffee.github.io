function calcularCostos() {
    // Obtener los valores de los campos
    const alquiler = parseFloat(document.getElementById('alquiler').value) || 0;
    const salariosFijos = parseFloat(document.getElementById('salariosFijos').value) || 0;
    const materiaPrima = parseFloat(document.getElementById('materiaPrima').value) || 0;
    const envases = parseFloat(document.getElementById('envases').value) || 0;

    // Calcular el costo total
    const costoTotal = alquiler + salariosFijos + materiaPrima + envases;

    // Mostrar el resultado
    document.getElementById('costoTotal').innerText = `Costo Total: $${costoTotal.toFixed(2)}`;
}
