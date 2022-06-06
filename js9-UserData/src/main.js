import "./style/main.css";
import {
  ApiPage
} from './scripts/apiPageModule';
import {
  Theme
} from './scripts/themeModule';
import {
  User
} from './scripts/userModule';

window.addEventListener('DOMContentLoaded', () => {
  const api = new ApiPage();
  api.start();
})
const theme = new Theme();
theme.start();
const user = new User();
user.start();