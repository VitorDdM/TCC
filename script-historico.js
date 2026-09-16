document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.filter-tab');
  const historyItems = document.querySelectorAll('.timeline-item');
  const searchInput = document.querySelector('#history-search');
  let activeFilter = 'all';

  const updateHistory = () => {
    const searchTerm = searchInput.value.trim().toLowerCase();

    historyItems.forEach((item) => {
      const matchesFilter = activeFilter === 'all' || item.dataset.type === activeFilter;
      const matchesSearch = item.textContent.toLowerCase().includes(searchTerm);
      item.hidden = !(matchesFilter && matchesSearch);
    });
  };

  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      activeFilter = button.dataset.filter;
      filterButtons.forEach((item) => item.classList.toggle('active', item === button));
      updateHistory();
    });
  });

  searchInput.addEventListener('input', updateHistory);
  updateHistory();
});
