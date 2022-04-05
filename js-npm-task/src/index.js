import "./style.scss";
import i18next from 'i18next';

const MONTH_NAME = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const WEEK_DAY_NAME = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const I18_LANG ={
  ru: 'ru',
  en: 'en'
}

const translationRu = {
  Sunday: 'Воскресенье',
  Monday: 'Понедельник',
  Tuesday: 'Вторник',
  Wednesday: 'Среда',
  Thursday: 'Четверг',
  Friday: 'Пятница',
  Saturday: 'Суббота',
  January: 'января',
  February: 'февраля',
  March: 'марта',
  April: 'апреля',
  May: 'мая',
  June: 'июня',
  July: 'июля',
  August: 'августа',
  September: 'сентября',
  October: 'октября',
  November: 'ноября',
  December: 'декабря',
  font: '"Marmelad", sans-serif',
  language: 'Выберите язык',
  today: 'Сегодня'
};

const translationEn = {
  Sunday: 'Sunday',
  Monday: 'Monday',
  Tuesday: 'Tuesday',
  Wednesday: 'Wednesday',
  Thursday: 'Thursday',
  Friday: 'Friday',
  Saturday: 'Saturday',
  January: 'January',
  February: 'February',
  March: 'March',
  April: 'April',
  May: 'May',
  June: 'June',
  July: 'July',
  August: 'August',
  September: 'September',
  October: 'October',
  November: 'November',
  December: 'December',
  font: '"Quicksand", sans-serif',
  language: 'Choose language',
  today: 'Today'
};

const body = document.querySelector('body');
const time = document.getElementById('time');
const langTxt = document.querySelector('.lang');
const week = document.getElementById('week');
const todayTxt = document.querySelector('.today');
const sliderLang = document.getElementById('slider');

i18next.init({
  lng: 'en',
  resources: {
    en: {
      translation: translationEn
    },
    ru: {
      translation: translationRu
    }
  }
});

const addZero = (n) => (parseInt(n, 10) < 10 ? '0' : '') + n;

const showTime = () => {
  const today = new Date();
  const hour = today.getHours();
  const min = today.getMinutes();
  const sec = today.getSeconds();
  const month = i18next.t(MONTH_NAME[today.getMonth()]);
  const day = today.getDate();
  const weekDay = i18next.t(WEEK_DAY_NAME[today.getDay()]);
  time.innerHTML = `${addZero(hour)}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;
  if (i18next.language === I18_LANG.en) {
    week.innerHTML = `${weekDay}, ${month} ${day}`;
  } else {
    week.innerHTML = ` ${weekDay}, ${day} ${month}`;
  }
  setTimeout(showTime, 1000);
};

const showInfo = () => {
  body.style.fontFamily = `${i18next.t('font')}`;
  langTxt.innerHTML = `${i18next.t('language')}`;
  todayTxt.innerHTML = `${i18next.t('today')}:`;
}

const init = () => {
  showInfo();
  showTime();
}

const listnerLang = () => {
  sliderLang.addEventListener('click', () => {
    const lang = sliderLang.checked ? I18_LANG.ru : I18_LANG.en;
    i18next.changeLanguage(lang, init);
  });
};

const startApp = () => {
  init();
  listnerLang();
}

startApp();