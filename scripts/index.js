// @todo: Темплейт карточки
const cardTemplate = document.querySelector('#card-template').content;

// @todo: DOM узлы
const placesList = document.querySelector('.places__list');

// @todo: Функция создания карточки
function createCard(cardTemplate, cardName, cardLink, deleteCard) {
  const cardClone = cardTemplate.querySelector('.places__item').cloneNode(true);
  const cardImage = cardClone.querySelector('.card__image');
  const cardTitle = cardClone.querySelector('.card__title');
  const deleteButton = cardClone.querySelector('.card__delete-button');
  cardImage.src = cardLink;
  cardImage.alt = cardTitle;
  cardTitle.textContent = cardName;
  deleteButton.addEventListener('click', () => deleteCard(cardClone));
  return cardClone;
}

// @todo: Функция удаления карточки
function deleteCard(card) {
    card.remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach(function (item) {
    const cardName = item.name;
    const cardlink = item.link;
    const cardItem = createCard(cardTemplate, cardName, cardlink, deleteCard);
    placesList.append(cardItem);
})
