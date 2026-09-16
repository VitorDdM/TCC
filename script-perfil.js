const personalProfile = JSON.parse(localStorage.getItem('personalProfile') || '{}');

document.querySelectorAll('[data-profile]').forEach((element) => {
  const value = personalProfile[element.dataset.profile];

  if (value) {
    element.textContent = value;
  }
});
