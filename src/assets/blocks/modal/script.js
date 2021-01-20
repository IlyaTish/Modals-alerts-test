(() => {
  /* Variables */

  const modals     = document.querySelectorAll('.modal'),
        modalLinks = document.querySelectorAll('.modal-link'),
        modalCont  = document.querySelector('.modal__cont');



  /* Functions */

  const modalInit = () => {
    [].forEach.call(modals, modalElem => {
      document.addEventListener('click', e => {
        const isClickInside = modalCont.contains(e.target);

        if (!isClickInside && modalElem.classList.contains('active'))
          modalElem.classList.remove('active')
      })
    });

    [].forEach.call(modalLinks, link => {
      const linkHref = link.getAttribute('href').replace('#', '');

      link.addEventListener('click', () => {
        setTimeout(() => {
          modals.forEach(modalElem => {
            if (modalElem.getAttribute('id') === linkHref) {
              const btnClose = modalElem.querySelector('.btn-close'),
                    modalBg  = modalElem.querySelector('.modal-bg'),
                    btns     = modalElem.querySelectorAll('.btn');

              modalElem.classList.add('active');

              btnClose.addEventListener('click', () => modalElem.classList.remove('active'));
              modalBg.addEventListener('click', () => modalElem.classList.remove('active'));

              btns.forEach(btn =>
                btn.addEventListener('click', () => modalElem.classList.remove('active'))
              )
            }
          })
        })
      })
    })
  }



  /* Functions execution */

  modalInit()
})();