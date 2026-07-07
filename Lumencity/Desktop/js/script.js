document.addEventListener("DOMContentLoaded", () => {
    // Inicialização dinâmica dos ícones do Lucide do arquivo index.html
    lucide.createIcons();

    // Comportamento simples nos botões de CTA da página para logs interativos
    const primaryButtons = document.querySelectorAll('.btn-solid-green, .btn-black-cta, .btn-outline-green');
    
    primaryButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            console.log("Fluxo de captura de Early Access iniciado.");
        });
    });
});