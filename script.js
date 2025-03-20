function calcularPegada() {
    let totalCO2 = 0;

    // Obtém os valores selecionados das perguntas
    const transporte = document.querySelector('input[name="transporte"]:checked');
    const aviao = document.querySelector('input[name="aviao"]:checked');

    if (transporte) totalCO2 += parseInt(transporte.value);
    if (aviao) totalCO2 += parseInt(aviao.value);

    // Salva o total e redireciona para a página de resultado
    localStorage.setItem("pegadaTotal", totalCO2);
    window.location.href = "result.html";
}
