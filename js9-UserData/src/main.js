import "./style/main.css";
import { ApiPage } from './scripts/apiPageModule';
import { Theme } from './scripts/themeModule';
import { User } from './scripts/userModule';

window.addEventListener('DOMContentLoaded', () => {
  const api = new ApiPage();
})
const theme = new Theme();
const user = new User();

