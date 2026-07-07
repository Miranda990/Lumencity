document.addEventListener('DOMContentLoaded', () => {
    const togglePassword = document.querySelector('#togglePassword');
    const passwordInput = document.querySelector('#password');
    const loginForm = document.querySelector('#loginForm');

    // Funcionalidade de alternar visibilidade da senha (olho)
    togglePassword.addEventListener('click', () => {
        // Altera o tipo do input
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        // Altera o ícone de olho aberto / fechado
        togglePassword.classList.toggle('fa-eye');
        togglePassword.classList.toggle('fa-eye-slash');
    });

    // Evento de submit do formulário (Pronto para sua lógica)
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const email = document.querySelector('#email').value;
        const password = passwordInput.value;

        console.log('Tentativa de login com:', { email, password });
        // Adicione sua integração com API aqui futuramente
    });
});