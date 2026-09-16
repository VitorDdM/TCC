const savedTheme = localStorage.getItem('theme') || 'dark';
document.documentElement.setAttribute('data-theme', savedTheme);

const bindThemeButton = () => {
  const themeButton = document.querySelector('.theme-toggle');

  if (!themeButton) {
    return;
  }

  themeButton.setAttribute('role', 'button');
  themeButton.setAttribute('tabindex', '0');
  themeButton.setAttribute('aria-label', 'Alternar tema');

  const toggleTheme = () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  themeButton.addEventListener('click', toggleTheme);
  themeButton.addEventListener('keydown', (event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      toggleTheme();
    }
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', bindThemeButton);
} else {
  bindThemeButton();
}