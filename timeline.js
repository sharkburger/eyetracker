(() => {
  const english = document.documentElement.lang === 'en';
  const search = document.getElementById('history-search');
  const order = document.getElementById('history-order');
  const events = [...document.querySelectorAll('.milestone')];
  const sections = [...document.querySelectorAll('.era-section')];
  const buttons = [...document.querySelectorAll('.theme-filters button')];
  let theme = 'all';
  function apply() {
    const q = search.value.trim().toLocaleLowerCase();
    let count = 0;
    for (const event of events) {
      const visible = (theme === 'all' || event.dataset.theme === theme) && (!q || event.textContent.toLocaleLowerCase().includes(q));
      event.hidden = !visible;
      count += Number(visible);
    }
    const newest = order.value === 'desc';
    for (const section of sections) {
      const children = [...section.querySelectorAll('.milestone')];
      section.hidden = children.every(e => e.hidden);
      document.querySelector(`.era-sidebar a[href="#${section.id}"]`).hidden = section.hidden;
      children.sort((a,b) => (Number(a.dataset.year) - Number(b.dataset.year) || Number(a.dataset.position) - Number(b.dataset.position)) * (newest ? -1 : 1));
      children.forEach(e => section.append(e));
    }
    sections.sort((a,b) => (Number(a.dataset.era) - Number(b.dataset.era)) * (newest ? -1 : 1));
    sections.forEach(section => document.getElementById('era-content').append(section));
    buttons.forEach(b => b.setAttribute('aria-pressed', String(b.dataset.theme === theme)));
    document.getElementById('history-count').textContent = english ? `Showing ${count} / ${events.length} milestones` : `显示 ${count} / ${events.length} 个历史节点`;
    document.getElementById('history-empty').hidden = count > 0;
  }
  search.addEventListener('input', apply);
  order.addEventListener('change', apply);
  buttons.forEach(b => b.addEventListener('click', () => { theme = b.dataset.theme; apply(); }));
  document.getElementById('history-reset').addEventListener('click', () => { theme = 'all'; search.value = ''; order.value = 'asc'; apply(); });
  const eraLinks = [...document.querySelectorAll('.era-sidebar a')];
  eraLinks.forEach(a => a.addEventListener('click', () => {
    theme = 'all'; search.value = ''; apply();
    eraLinks.forEach(link => link.classList.toggle('active', link === a));
  }));
  document.querySelectorAll('.permalink').forEach(a => a.addEventListener('click', () => {
    const details = a.closest('.milestone').querySelector('details');
    details.open = true;
  }));
  apply();
})();
