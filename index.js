(() => {
    const refs = {
      openModal: document.querySelector(
        '.button1'
      ),
      closeModal: document.querySelector(
        '.modal-close'
      ),
      modal: document.querySelector('.backdrop'),
    };
    refs.openModal.addEventListener('click', toggleMenu);
    refs.closeModal.addEventListener('click', toggleMenu);
  
    function toggleMenu() {
      refs.modal.classList.toggle('is-hidden');
    }
  })();