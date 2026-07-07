document.addEventListener("DOMContentLoaded", () => {
    // Renderiza dinamicamente os ícones declarados pelo Lucide
    lucide.createIcons();

    // Adiciona interatividade aos cliques nas linhas de transações (efeito hover/click tátil)
    const transactionRows = document.querySelectorAll('.transaction-row');
    
    transactionRows.forEach(row => {
        row.style.cursor = 'pointer';
        row.addEventListener('click', function() {
            const description = this.querySelector('.tx-details').textContent;
            console.log(`Visualizando logs detalhados da transação: ${description}`);
        });
    });
});