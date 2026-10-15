const languageSwitch = document.getElementById('language-switch');
if (languageSwitch) {
  const destination = languageSwitch.getAttribute('href').split('#')[0];
  const links = [languageSwitch];
  const modalHead = document.querySelector('.modal-head');
  const closeButton = document.getElementById('close-dialog');
  if (modalHead && closeButton) {
    const modalSwitch = languageSwitch.cloneNode(true);
    modalSwitch.removeAttribute('id');
    modalSwitch.className = 'modal-language';
    modalHead.insertBefore(modalSwitch, closeButton);
    links.push(modalSwitch);
  }
  const syncLanguageLinks = () => {
    for (const link of links) link.href = destination + location.hash;
  };
  syncLanguageLinks();
  window.addEventListener('hashchange', syncLanguageLinks);
  for (const link of links) link.addEventListener('click', syncLanguageLinks);
}
