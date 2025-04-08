export {createCard, deleteCard, likeCard};

function createCard(cardUrl, cardName, deleteCard, likeCard, cardViewFunction) {
    const cardTemplate = document.querySelector('#card-template').content;
    const cardItem = cardTemplate.querySelector('.places__item').cloneNode(true);
    const cardImage = cardItem.querySelector('.card__image');
    const cardTitle = cardItem.querySelector('.card__title');
    cardImage.src = cardUrl;
    cardImage.alt = cardName;
    cardTitle.textContent = cardName;
    const deleteButton = cardItem.querySelector('.card__delete-button');
    deleteButton.addEventListener('click', function() {
        deleteCard(cardItem);
    });
    const likeButton = cardItem.querySelector('.card__like-button');
    likeButton.addEventListener('click', function() {
        likeCard(likeButton);
    });
    const cardView = cardItem.querySelector('.card__image');
    cardView.addEventListener('click', function() {
        cardViewFunction(cardView);
    });
    return cardItem;
  }

function deleteCard(cardItem) {
    cardItem.remove();
};

function likeCard(cardItem) {
    cardItem.classList.toggle('card__like-button_is-active');
};
