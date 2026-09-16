const loginForm = document.querySelector('#login-form');

loginForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const status = loginForm.querySelector('.status-message');

  if (status) {
    status.textContent = 'Login demonstrativo realizado. Seu perfil está pronto para continuar.';
  }
});
