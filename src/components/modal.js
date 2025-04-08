export {openModal, eventKeydown, eventClick, closeModal}

function openModal(popup) {
    popup.classList.add('popup_is-opened');
    document.addEventListener('keydown', eventKeydown);
};

function eventKeydown(evt) {
    evt.stopImmediatePropagation();
    const popupOpened = document.querySelector('.popup_is-opened');
    if (evt.key === 'Escape') {
        closeModal(popupOpened);
    };
};

function closeModal(popup) {
    document.removeEventListener('keydown', eventKeydown);
    popup.classList.remove('popup_is-opened');
};

function eventClick(evt, popup) {
    evt.stopImmediatePropagation();
    const popupClosed = popup.querySelector('.popup__close');
    if(evt.target === popup || evt.target === popupClosed) {
        closeModal(popup);
    };
};