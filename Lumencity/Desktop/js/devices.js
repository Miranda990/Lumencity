document.addEventListener("DOMContentLoaded", () => {
    // Inicializa todos os ícones declarados pelo atributo data-lucide
    lucide.createIcons();

    // Sistema de Filtragem em Tempo Real na barra de pesquisa
    const searchInput = document.getElementById('deviceSearch');
    const deviceCards = document.querySelectorAll('.device-card');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const query = e.target.value.toLowerCase();

            deviceCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                if (title.includes(query)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }

    // Interatividade visual ao chavear os Toggles (On/Off)
    const toggles = document.querySelectorAll('.switch input');
    toggles.forEach(toggle => {
        toggle.addEventListener('change', function() {
            const card = this.closest('.device-card');
            const statusLabel = card.querySelector('.status');
            
            if (!this.checked) {
                statusLabel.style.opacity = '0.35';
            } else {
                statusLabel.style.opacity = '1';
            }
        });
    });
});