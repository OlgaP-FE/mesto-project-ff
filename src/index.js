import './pages/index.css';
import {initialCards} from './components/cards';
import {createCard, deleteCard, likeCard} from './components/card';
import {openModal, eventKeydown, eventClick, closeModal} from './components/modal';

const placesList = document.querySelector('.places__list');
const popupTypeImage = document.querySelector('.popup_type_image');
const popupImage = document.querySelector('.popup__image');
const popupCaption = document.querySelector('.popup__caption');
const profileTitle = document.querySelector('.profile__title');
const profileDescription = document.querySelector('.profile__description');
const profileAddButton = document.querySelector('.profile__add-button');
const popupNewCard = document.querySelector('.popup_type_new-card');
const editButton = document.querySelector('.profile__edit-button');
const editPopup = document.querySelector('.popup_type_edit');
const editProfile = editPopup.querySelector('[name="edit-profile"]');
const popupInputName = editProfile.querySelector('.popup__input_type_name');
const popupInputDescription = editProfile.querySelector('.popup__input_type_description');
const newPlace = popupNewCard.querySelector('[name="new-place"]');
const newInputName = newPlace.querySelector('.popup__input_type_card-name');
const newInputUrl = newPlace.querySelector('.popup__input_type_url');

function viewImage(someImage) {
    popupImage.src = someImage.src;
    popupCaption.textContent = someImage.closest('.card').querySelector('.card__title').textContent;
    openModal(popupTypeImage);
};

function inputFormEditProfile() {
    popupInputName.value = profileTitle.textContent;
    popupInputDescription.value = profileDescription.textContent;
};

function handleEditFormSubmit(evt) {
    evt.preventDefault();
    profileTitle.textContent = popupInputName.value;
    profileDescription.textContent = popupInputDescription.value;
    closeModal(editPopup);
};

function handleNewCardFormSubmit(evt) {
    evt.preventDefault();
    const newCardName = newInputName.value;
    const newCardUrl = newInputUrl.value;
    placesList.prepend(createCard(newCardUrl, newCardName, deleteCard, likeCard, viewImage));
    closeModal(popupNewCard);
    newPlace.requestFullscreen();
};

initialCards.forEach(element => {
    placesList.append(createCard(element.link, element.name, deleteCard, likeCard, viewImage))
});

profileAddButton.addEventListener('click', function() {
    openModal(popupNewCard);
    newPlace.reset();
});

popupNewCard.addEventListener('click', function(evt) {
    eventClick(evt, popupNewCard);
});

newPlace.addEventListener('submit', handleEditFormSubmit);

popupTypeImage.addEventListener('click', function(evt) {
    eventClick(evt, popupTypeImage);
});

editButton.addEventListener('click', function() {
    openModal(editPopup);
    inputFormEditProfile();
});

editPopup.addEventListener('click', function(evt) {
    eventClick(evt, editPopup);
});

editProfile.addEventListener('submit', handleEditFormSubmit);

profileAddButton.addEventListener('click', function() {
    openModal(popupNewCard);
    newPlace.reset();
});

popupNewCard.addEventListener('click', function(evt) {
    eventClick(evt, popupNewCard);
});

newPlace.addEventListener('submit', handleNewCardFormSubmit);








