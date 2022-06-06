const DATA = [{
    '№': 1,
    'name': 'Mark',
    'surname': 'Petrov',
    'age': 27
  },
  {
    '№': 2,
    'name': 'Petr',
    'surname': 'Markov',
    'age': 30
  },
  {
    '№': 3,
    'name': 'Alex',
    'surname': 'Ivanov',
    'age': 21
  },
  {
    '№': 4,
    'name': 'Ivan',
    'surname': 'Serov',
    'age': 35
  },
  {
    '№': 5,
    'name': 'Olga',
    'surname': 'Pupkina',
    'age': 18
  }
]

class Table {

  constructor(data) {
    this.data = data;
    this.thName = Object.keys(this.data[0]);
    this.direction = 1;
    this.sortType = '№'
    this.renameTmp = {
      'id': 0,
      'field': '',
      'text': '',
    }
    this.renderRenameField();
  }

  renderRenameField() {
    const root = document.querySelector('#root');
    const container = document.createElement('div');
    container.classList.add('rename', 'none');
    const input = document.createElement('input');
    input.value = this.renameTmp.text;
    input.setAttribute('type', 'text');
    container.appendChild(input);
    const btn = document.createElement('button');
    btn.innerHTML = 'Rename field';
    container.appendChild(btn);
    btn.addEventListener('click', () => {
      this.renameTmp.text = input.value;
      this.data[this.renameTmp.id][this.renameTmp.field] = this.renameTmp.text;
      container.classList.add('none')
      this.renderTable();
    })
    root.insertAdjacentElement('afterend', container);
  }

  renderTable() {
    const root = document.getElementById('root');
    root.innerHTML = '';
    root.innerHTML = this.getTableTemplate();
    this.addListners();
  }

  getTableTemplate() {
    return `
      <table>
        <caption>
          Click on the heading of the column to sort by <br>
          Now we sort by column - <span>${this.sortType}</span>, direction - <span>'${this.direction === 1? 'ASC' : 'DESC'}</span>'
        </caption>
        ${this.getHeaderTemplate()}
        ${this.getBodyTemplate()}
      </table>
    `
  }

  getHeaderTemplate() {
    return `
    <thead>
      ${this.renderHeaderData()}
    </thead>
    `
  }

  renderHeaderData() {
    const headerTr = document.createElement('tr');
    this.thName.forEach(item => {
      const th = document.createElement('th');
      th.textContent = `${item}`;
      headerTr.appendChild(th)
    });
    return headerTr.outerHTML;
  }

  getBodyTemplate() {
    const tBody = document.createElement('tbody');
    this.data.forEach((row, i) => {
      const tr = document.createElement('tr');
      for (let key in row) {
        const td = document.createElement('td');
        td.textContent = row[key];
        td.dataset.id = i;
        td.dataset.field = key;
        tr.appendChild(td);
      }
      tBody.appendChild(tr)
    })
    return tBody.outerHTML;
  }

  addListners() {
    const thead = document.querySelector('thead');
    thead.addEventListener('click', (e) => {
      this.sortType = e.target.textContent;
      this.direction === 1 ? this.direction = -1 : this.direction = 1;
      this.sortTable(this.sortType);
    })

    const tbody = document.querySelector('tbody');
    tbody.addEventListener('click', (e) => {
      this.renameTmp.id = e.target.getAttribute('data-id');
      this.renameTmp.field = e.target.getAttribute('data-field');
      const renameContainer = document.querySelector('.rename');
      renameContainer.classList.remove('none');
      this.renameInputValue(e.target.innerHTML);
    })
  }

  renameInputValue(value) {
    const input = document.querySelector('input');
    input.value = value;
  }

  sortTable(param) {
    this.data = this.data.sort((a, b) => {
      return this.direction * (a[param] <= b[param] ? -1 : 1);
    });
    this.renderTable()
  }

}

document.addEventListener('DOMContentLoaded', () => {
  const tbl = new Table(DATA);
  tbl.renderTable()
})