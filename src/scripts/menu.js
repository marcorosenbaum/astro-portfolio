const showMenuButton = document.querySelector('#show-menu-button');
if (showMenuButton) {
  showMenuButton.addEventListener('click', () => {
    const menuModal = document.querySelector('#menu-modal');
    if (menuModal) {
      menuModal.classList.remove('translate-x-[100%]');
    }
  });
}

const hideMenuButton = document.querySelector('#hide-menu-button');
if (hideMenuButton) {
  hideMenuButton.addEventListener('click', () => {
    const menuModal = document.querySelector('#menu-modal');
    if (menuModal) {
      menuModal.classList.add('translate-x-[100%]');
    }
  });
}
