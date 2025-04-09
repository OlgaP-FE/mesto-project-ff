export {openModal, checkKeydown, checkClick, closeModal}

function openModal(popup) {
    popup.classList.add('popup_is-opened');
    document.addEventListener('keydown', checkKeydown);
};

function checkKeydown(evt) {
    if (evt.key === 'Escape') {
        evt.stopImmediatePropagation();
        const popupOpened = document.querySelector('.popup_is-opened');
        closeModal(popupOpened);
    }
};

function closeModal(popup) {
    document.removeEventListener('keydown', checkKeydown);
    popup.classList.remove('popup_is-opened');
};

function checkClick(evt, popup) {
    evt.stopImmediatePropagation();
    const popupClosed = popup.querySelector('.popup__close');
    if(evt.target === popup || evt.target === popupClosed) {
        closeModal(popup);
    };
};