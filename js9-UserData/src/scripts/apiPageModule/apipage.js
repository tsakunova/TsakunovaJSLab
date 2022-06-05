const { root, URL, load } = require('../constants');

export class ApiPage {
  dataCategory;
  dataTitles;
  currData;
  currCategory;
  currTitle;

  constructor() {
    this.currCategory = 'Animals';
    this.currTitle = 'AdoptAPet';
    this.start();
  }

  async start() {
    await this.loadCategories();
    await this.loadTitles();
  }

  async loadCategories() {
    const data = await this.getAsyncData(`${URL}categories`);
    this.dataCategory = data;
    this.renderSelectCategories();
  }

  async loadTitles() {
    const data = await this.getAsyncData(`${URL}entries?category=${this.currCategory}`);
    this.dataTitles = data;
    this.currTitle = this.dataTitles.entries[0].API;
    this.renderSelectTitles();
  }

  async loadData() {
    const data = await this.getAsyncData(`${URL}entries?title=${this.currTitle}`);
    this.currData = data;
    this.renderData();
  }

  renderSelectCategories() {
    const container = document.createElement('div');
    container.classList.add('categories-container');
    const select = document.createElement('select');
    select.classList.add('categories');
    this.dataCategory.categories.forEach(optionEl => {
      const option = document.createElement('option');
      option.innerHTML = optionEl;
      select.appendChild(option);
    });
    container.appendChild(select);
    root.insertAdjacentHTML('afterbegin', container.outerHTML);
    this.addListenersCategory();
  }

  renderSelectTitles() {
    document.querySelector('.titles-container') && document.querySelector('.titles-container').remove();
    const container = document.createElement('div');
    container.classList.add('titles-container');
    const select = document.createElement('select');
    select.classList.add('titles');
    this.dataTitles.entries.forEach(optionEl => {
      const option = document.createElement('option');
      option.innerHTML = optionEl.API;
      select.appendChild(option);
    });
    container.appendChild(select);
    root.insertAdjacentHTML('beforeend', container.outerHTML);
    this.addListenersTitle();
    this.loadData();
  }

  renderData() {
    document.querySelector('.content') && document.querySelector('.content').remove();
    const {
      API,
      Category,
      Description,
      Link
    } = this.currData.entries[0];
    const text = `
    <div class="content">
      <h3>${API}</h3>
      <p>Category: ${Category}</p>
      <p>${Description}</p>
      <a href="${Link}" target="blank">${API} Link </a>
    </div>
    `;
    root.insertAdjacentHTML('afterend', text);
    load.classList.add('none');
  }

  async getAsyncData(url) {
    return fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }
        return response;
      })
      .then((response) => response.json())
      .catch((error) => {
        load.textContent = `Please repeat your select or reload page.\n ${error} data`;
        load.classList.remove('none');
      })
  }

  addListenersCategory() {
    const selectCategory = document.querySelector('.categories');
    selectCategory.addEventListener('change', (e) => {
      this.addLoadContainer();
      const el = e.target;
      this.currCategory = el.value;
      this.loadTitles();
    })
  }

  addListenersTitle() {
    const selectTitle = document.querySelector('.titles');
    selectTitle.addEventListener('change', (e) => {
      this.addLoadContainer();
      const el = e.target;
      this.currTitle = el.value;
      this.loadData();
    })
  }

  addLoadContainer() {
    load.textContent = '...loading';
    load.classList.remove('none');
  }

}