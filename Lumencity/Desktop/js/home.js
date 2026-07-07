document.addEventListener("DOMContentLoaded", () => {
    // Inicialização do Lucide Icons para renderizar todos os ícones das tags data-lucide
    lucide.createIcons();

    // Configuração da animação do gráfico de rosca (78% da meta)
    setupProgressCircle(78);
});

/**
 * Define dinamicamente o preenchimento do gráfico circular de progresso baseado em porcentagem.
 * @param {number} percent Valor de 0 a 100
 */
function setupProgressCircle(percent) {
    const circle = document.querySelector('.progress-ring__bar');
    if (!circle) return;
    
    const radius = circle.r.baseVal.value;
    const circumference = radius * 2 * Math.PI;
    
    // Configura o stroke dasharray padrão baseado no raio calculado
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    
    // Calcula o offset proporcional à porcentagem desejada
    const offset = circumference - (percent / 100) * circumference;
    circle.style.strokeDashoffset = offset;
}