function calcularCostos() {
    // Obtener los valores de los campos de costos fijos
    const alquiler = parseFloat(document.getElementById('alquiler').value) || 0;
    const salariosFijos = parseFloat(document.getElementById('salariosFijos').value) || 0;
    const serviciosPublicos = parseFloat(document.getElementById('serviciosPublicos').value) || 0;
    const seguros = parseFloat(document.getElementById('seguros').value) || 0;
    const Mantrepa = parseFloat(document.getElementById('Mantrepa').value) || 0;
    const DepreMobi = parseFloat(document.getElementById('DepreMobi').value) || 0;
    const ImpLic = parseFloat(document.getElementById('ImpLic').value) || 0;

    // Obtener los valores de los campos de costos variables
    const materiaPrima = parseFloat(document.getElementById('materiaPrima').value) || 0;
    const envases = parseFloat(document.getElementById('envases').value) || 0;

    // Calcular el costo total sumando costos fijos y variables
    const costoTotal = alquiler + salariosFijos + serviciosPublicos + seguros + Mantrepa + DepreMobi + ImpLic + materiaPrima + envases;

    // Mostrar el resultado en la interfaz
    document.getElementById('costoTotal').innerText = `Costo Total: $${costoTotal.toFixed(2)}`;
}
