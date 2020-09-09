class Api {
  constructor(options) {
    this.options = options;
  }


  getInitialCards() {
    return fetch(this.options.baseUrl + "/cards", {
      headers: this.options.headers
    }).then(res => {
      return this.isResolve(res);
    }).then((res) => res.data);
  }

  getUserInfo() {
    return fetch(this.options.baseUrl + "/users/me", {
      headers: this.options.headers
    }).then(res => {
      return this.isResolve(res);
    }).then((res) => res.data);;
  }

  updateUserInfo(userInfo) {
    return fetch(this.options.baseUrl + "/users/me", {
      method: "PATCH",
      headers: this.options.headers,
      body: JSON.stringify(userInfo)
    }).then(res => {
      return this.isResolve(res);
    }).then((res) => res.data);;
  }

  addCard(card) {
    return fetch(this.options.baseUrl + "/cards", {
      method: "POST",
      headers: this.options.headers,
      body: JSON.stringify(card)
    }).then(res => {
      return this.isResolve(res);
    }).then((res) => res.data);;
  }

  removeCard(cardID) {
    return fetch(this.options.baseUrl + "/cards/" + cardID, {
      method: "DELETE",
      headers: this.options.headers
    }).then(res => {
      return this.isResolve(res);
    }).then((res) => res.data);;
  }

  putLike(cardID) {
    return fetch(this.options.baseUrl + "/cards/" + cardID + "/likes", {
      method: "PUT",
      headers: this.options.headers
    }).then(res => {
      return this.isResolve(res);
    }).then((res) => res.data);;
  }

  removeLike(cardID) {
    return fetch(this.options.baseUrl + "/cards/" + cardID + "/likes", {
      method: "DELETE",
      headers: this.options.headers
    }).then(res => {
      return this.isResolve(res);
    }).then((res) => res.data);;
  }

  updateUserAvatar(linkAvatar) {
    return fetch(this.options.baseUrl + "/users/me/avatar", {
      method: "PATCH",
      headers: this.options.headers,
      body: JSON.stringify(linkAvatar)
    }).then(res => {
      return this.isResolve(res);
    }).then((res) => res.data);;
  }

  async isResolve(res) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }
}

export default Api;
