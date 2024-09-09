const showContactFormButtons = document.querySelectorAll(
  '.show-contact-form-btn'
);

showContactFormButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const contactFormModal = document.querySelector('#contact-form-modal');
    if (contactFormModal) {
      contactFormModal.classList.remove('translate-x-[100%]');
    }
    const body = document.querySelector('body');
    if (body) {
      body.classList.add('overflow-hidden');
    }
  });
});

const hideContactFormButton = document.querySelector(
  '#hide-contact-form-button'
);

if (hideContactFormButton) {
  hideContactFormButton.addEventListener('click', () => {
    const contactFormModal = document.querySelector('#contact-form-modal');
    if (contactFormModal) {
      contactFormModal.classList.add('translate-x-[100%]');
    }
    const body = document.querySelector('body');
    if (body) {
      body.classList.remove('overflow-hidden');
    }
  });
}
