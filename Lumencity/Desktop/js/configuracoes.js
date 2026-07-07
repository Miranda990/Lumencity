document.addEventListener("DOMContentLoaded", () => {
    // Inicializa todos os elementos visuais do Lucide Icons
    lucide.createIcons();

    // Adiciona feedback tátil ao clicar nas linhas de opções de configuração
    const clickableItems = document.querySelectorAll('.list-item.clickable');
    
    clickableItems.forEach(item => {
        item.addEventListener('click', function() {
            const settingName = this.querySelector('.item-left span').textContent;
            console.log(`Navegando para as configurações de: ${settingName}`);
            
            // Aqui pode ser adicionado o direcionamento de rotas futuramente
        });
    });
});