import { slider } from '../constants';

export class Theme {
  constructor() {
    this.startUse();
    this.addListenerTheme();
  }

  setTheme(themeName) {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
  }

  addListenerTheme() {
    slider.addEventListener("change", ()=>{
      localStorage.getItem('theme') === 'theme-dark' 
      ? this.setTheme('theme-light')
      : this.setTheme('theme-dark');
    });
  }

  startUse() {
    if (localStorage.getItem('theme') === 'theme-dark') {
      this.setTheme('theme-dark');
      slider.checked = false;
    } else {
      this.setTheme('theme-light');
      slider.checked = true;
    }
  }
}