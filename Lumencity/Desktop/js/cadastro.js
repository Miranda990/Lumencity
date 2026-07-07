document.addEventListener('DOMContentLoaded', () => {
    // Seleção dos elementos para as senhas separadas
    const togglePassword = document.querySelector('#togglePassword');
    const passwordInput = document.querySelector('#password');
    
    const toggleConfirmPassword = document.querySelector('#toggleConfirmPassword');
    const confirmPasswordInput = document.querySelector('#confirmPassword');
    
    const registerForm = document.querySelector('#registerForm');

    // Alternar visibilidade do campo "Password"
    togglePassword.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        togglePassword.classList.toggle('fa-eye');
        togglePassword.classList.toggle('fa-eye-slash');
    });

    // Alternar visibilidade do campo "Confirm Password" de forma independente
    toggleConfirmPassword.addEventListener('click', () => {
        const type = confirmPasswordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        confirmPasswordInput.setAttribute('type', type);
        toggleConfirmPassword.classList.toggle('fa-eye');
        toggleConfirmPassword.classList.toggle('fa-eye-slash');
    });

    // Validação básica e Envio do formulário
    registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const fullName = document.querySelector('#fullName').value;
        const email = document.querySelector('#email').value;
        const password = passwordInput.value;
        const confirmPassword = confirmPasswordInput.value;
        const termsChecked = document.querySelector('#terms').checked;

        // Validação estrita de senhas iguais
        if (password !== confirmPassword) {
            alert('As senhas não coincidem!');
            return;
        }

        console.log('Cadastro enviado com sucesso:', { fullName, email, termsChecked });
        // Adicione aqui a sua comunicação com o back-end futuramente
    });
});