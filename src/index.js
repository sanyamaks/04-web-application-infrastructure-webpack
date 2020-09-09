import Api from "./js/Api.js";
import Card from "./js/Card.js";
import CardList from "./js/CardList.js";
import { errorMessages } from "./js/errorMessages.js";
import FormAvatar from "./js/FormAvatar.js";
import FormPlaceCard from "./js/FormPlaceCard.js";
import FormProfile from "./js/FormProfile.js";
import FormValidator from "./js/FormValidator.js";
import Popup from "./js/Popup.js";
import UserInfo from "./js/UserInfo.js";
import "./pages/index.css";

const openPopupPlaceCardButton = document.querySelector(
  ".button.user-info__button"
);
const openPopupProfileButton = document.querySelector(".user-info__edit");
const openPopupAvatarButton = document.querySelector(".user-info__photo");
const placeList = document.querySelector(".places-list");
const fullName = document.querySelector(".user-info__name");
const job = document.querySelector(".user-info__job");
const avatar = document.querySelector(".user-info__photo");
const popupProfile = document.querySelector(".popup_profile");
const popupPlaceCard = document.querySelector(".popup_place-card");
const popupImage = document.querySelector(".popup_image");
const popupAvatar = document.querySelector(".popup_avatar");
const formProfile = popupProfile.querySelector(".popup__form");
const formPlaceCard = popupPlaceCard.querySelector(".popup__form");
const formAvatar = popupAvatar.querySelector(".popup__form");
const popupProfileObj = new Popup(popupProfile);
popupProfileObj.setCloseButtonListeners();
const popupPlaceCardObj = new Popup(popupPlaceCard);
popupPlaceCardObj.setCloseButtonListeners();
const popupImageObj = new Popup(popupImage);
popupImageObj.setCloseButtonListeners();
const popupAvatarObj = new Popup(popupAvatar);
popupAvatarObj.setCloseButtonListeners();
const formValidatorProfile = new FormValidator(formProfile, errorMessages);
const formValidatorPlaceCard = new FormValidator(formPlaceCard, errorMessages);
const formValidatorAvatar = new FormValidator(formAvatar, errorMessages);
const userInfo = new UserInfo(fullName, job, avatar);

const createCard = card => {
  return new Card(card, handleOpenPopupImage);
};

const API_URL =
  NODE_ENV === "production" ? "https://www.aleksmaksimov.tk" : "http://www.aleksmaksimov.tk";
const api = new Api({
  baseUrl: API_URL,
  headers: {
    authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZjU4YTJkY2JlNmI1NzM1OWY1M2M1OGIiLCJpYXQiOjE1OTk2NDQzODMsImV4cCI6MTYwMDI0OTE4M30.l-n-7_O0Eae8fugvVTHkVNdKFJxd8X82sWTXcUz-Z8g",
    "Content-Type": "application/json",
  }
});
const cardList = new CardList(placeList, createCard, api);

const formProfileObj = new FormProfile(
  formProfile,
  formValidatorProfile,
  popupProfileObj,
  api,
  userInfo
);
formProfileObj.setEventListeners();
const formPlaceCardObj = new FormPlaceCard(
  formPlaceCard,
  formValidatorPlaceCard,
  popupPlaceCardObj,
  api,
  cardList
);
formPlaceCardObj.setEventListeners();
const formAvatarObj = new FormAvatar(
  formAvatar,
  formValidatorAvatar,
  popupAvatarObj,
  api,
  userInfo
);
formAvatarObj.setEventListeners();

function handleOpenPopupImage(event) {
  if (event.target.classList.contains("place-card__image")) {
    const link = event.target.style.backgroundImage.slice(5, -2);
    const image = popupImage.querySelector(".popup__image");

    image.src = link;

    popupImageObj.open();
  }
}

const handleOpenPopupPlaceCard = () => {
  formValidatorPlaceCard.resetErrorMessage();
  popupPlaceCardObj.open();
  formPlaceCardObj.setFocusOnFirstInput();
};

const handleOpenPopupProfile = () => {
  const { name, description } = { ...userInfo };
  formProfile.name.defaultValue = name;
  formProfile.description.defaultValue = description;
  formValidatorProfile.resetErrorMessage();
  popupProfileObj.open();
  formProfileObj.setFocusOnFirstInput();
};

const handleOpenPopupAvatar = () => {
  formValidatorAvatar.resetErrorMessage();
  popupAvatarObj.open();
  formAvatarObj.setFocusOnFirstInput();
};

openPopupPlaceCardButton.addEventListener("click", handleOpenPopupPlaceCard);
openPopupProfileButton.addEventListener("click", handleOpenPopupProfile);
openPopupAvatarButton.addEventListener("click", handleOpenPopupAvatar);

api
  .getUserInfo()
  .then(info => {
    userInfo.updateUserInfo(info);
    userInfo.updateUserAvatar(info);
  })
  .catch(err => console.log(err));
api
  .getInitialCards()
  .then(cards => {
    cardList.renderCards(cards, userInfo.userID); //АМ: Можно ли так передавать ID? /
  })
  .catch(err => console.log(err));


