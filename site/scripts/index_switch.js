class Switch {
  constructor(page) {
    this.toggle = document.querySelector('.logo');
    this.menu = document.querySelector('.switch');
    this.page = document.querySelector(page);
    this.localStorageKey = 'otherTheme';
    this.localStorageValue = 'on';

    if (localStorage.otherTheme === this.localStorageValue) {
      this.appAction();
    }

    this.toggle.addEventListener('click', this.appLogic.bind(this));
    this.menu.addEventListener('click', this.appLogic.bind(this));
  }

  appLogic() {
    if (localStorage.otherTheme === this.localStorageValue) {
      localStorage.removeItem(this.localStorageKey);
      this.appAction();
    } else {
      localStorage.setItem(this.localStorageKey, this.localStorageValue);
      this.appAction();
    }
  }

  appAction() {
    this.toggle.classList.toggle('light');
    this.page.classList.toggle('dark');
  }
}
