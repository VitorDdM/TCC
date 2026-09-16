const personalForm = document.querySelector('#personal-registration');
const companyForm = document.querySelector('#company-registration');

personalForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(personalForm));
  localStorage.setItem('personalProfile', JSON.stringify(data));
  window.location.href = 'avaliaçao.html';
});

companyForm?.addEventListener('submit', (event) => {
  event.preventDefault();
  const data = Object.fromEntries(new FormData(companyForm));
  localStorage.setItem('companyProfile', JSON.stringify(data));
  const status = document.querySelector('.status-message');

  if (status) {
    status.textContent = 'Cadastro da empresa salvo com sucesso.';
  }
});
