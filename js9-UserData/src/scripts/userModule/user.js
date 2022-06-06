import {
  IMG_HOURS,
  name, NAME_FIELD_TEXT
} from '../constants';

export class User {
  
  start(){
    this.getName();
    this.addListeners();
    this.getHourText();
  }
  getName() {
    if (localStorage.getItem('name') === null) {
      name.textContent = NAME_FIELD_TEXT;
    } else {
      name.textContent = localStorage.getItem('name');
    }
  }

  delName() {
    name.textContent = '';
    if (localStorage.getItem('name') === null) {
      localStorage.setItem('name', NAME_FIELD_TEXT);
    }
  };

  setName(e) {
    const field = e.target;
    const storage = localStorage.getItem('name');
    if (e.type === 'keypress') {
      if (e.which === 13 || e.keyCode === 13) {
        !field.innerText && (name.textContent = NAME_FIELD_TEXT)
        localStorage.setItem('name', field.innerText);
        name.blur();
      }
    } else {
      !field.innerText && (name.textContent = storage)
      localStorage.setItem('name', field.innerText);
    }
  }

  addListeners() {
    name.addEventListener('keypress', this.setName);
    name.addEventListener('blur', this.setName);
    name.addEventListener('click', this.delName);
  }

  getHourText() {
    const today = new Date();
    const hour = today.getHours();
    let imgHour;
    if (hour < 6) {
      imgHour = IMG_HOURS[0];
    } else if (hour < 12) {
      imgHour = IMG_HOURS[1];
    } else if (hour < 18) {
      imgHour = IMG_HOURS[2];
    } else {
      imgHour = IMG_HOURS[3];
    }
    greeting.textContent = `Good ${imgHour}, `;
  };
}