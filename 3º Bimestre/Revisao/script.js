class Person {
  constructor(name, age, portugueseGrade, mathGrade, wdGrade) {
    this.name = name;
    this.age = age;
    this.portugueseGrade = portugueseGrade;
    this.mathGrade = mathGrade;
    this.wdGrade = wdGrade; // Web Development == wd
  }

  calcularMedia() {
    const numberOfSubjects = 3;

    return ((this.portugueseGrade + this.mathGrade + this.wdGrade) / numberOfSubjects).toFixed(2);
  }

  calcularIdade(ano) {
    const currentYear = Number(new Date().getFullYear());

    return (ano - currentYear) + this.age;
  }
}

let person = new Person(
  prompt('Qual o seu nome?'),
  Number(prompt('Qual sua idade?')),
  Number(prompt('Qual foi sua nota em Português?')),
  Number(prompt('Qual foi sua nota em Matemática?')),
  Number(prompt('Qual foi sua nota em Desenvolvimento WEB?'))
);

let futureYear = Number(prompt('Digite um ano futuro para saber sua idade:'));

function getNumbers() {
  let numbers;
  do {
    numbers = (prompt('Digite 9 números separados por um espaço " ":')).split(' ');

    if (numbers.length != 9) {
      alert('Você não digitou 9 números :(');
    }
  } while (numbers.length != 9);

  let HTMLString = '';
  numbers.forEach(num => {
    HTMLString += `<p>${num}</p>`;
  })

  return HTMLString;
}

document.body.innerHTML = `
<section>
  <header>
  <div class="info">
    <h2>Nome:</h2>
    <p>${person.name}</p>
  </div>
  <div class="info">
    <h2>Idade:</h2>
    <p>${person.age}</p>
  </div>
  <div class="info">
    <h2>Em ${futureYear} você terá:</h2>
    <p>${person.calcularIdade(futureYear)} anos</p>
  </div>
  </header>

  <main>
  <table>
    <tr>
      <th>Disciplina</th>
      <th>Nota</th>
    </tr>
    <tr>
      <td>Português</td>
      <td>${person.portugueseGrade}</td>
    </tr>
    <tr>
      <td>Matemática</td>
      <td>${person.mathGrade}</td>
    </tr>
    <tr>
      <td>Desenvolvimento Web</td>
      <td>${person.wdGrade}</td>
    </tr>
    <tr>
      <td>Média Geral</td>
      <td>${person.calcularMedia()}</td>
    </tr>
  </table>
  </main>
</section>
<footer>
  ${getNumbers()}
</footer>
`

let userColor = prompt('Qual sua cor favorita? (em inglês):');

const colorVariableCSS = document.querySelector(':root').style;
colorVariableCSS.setProperty('--color', userColor);

function getTextColor(backgroundColor) {
  const r = parseInt(backgroundColor.slice(1, 3), 16);
  const g = parseInt(backgroundColor.slice(3, 5), 16);
  const b = parseInt(backgroundColor.slice(5, 7), 16);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 128 ? "black" : "white";
}

const textColor = getTextColor(userColor);
colorVariableCSS.setProperty('--table-text-color', textColor);

const footer = document.querySelector('footer');

footer.addEventListener('click', () => {
  if (footer.classList.contains('footer')) {
    footer.classList.remove('footer');
  } else {
    footer.classList.add('footer');
  }
})

const body = document.body;

body.addEventListener('keypress', (event) => {
  if (event.key === 'i') {
    if (body.classList.contains('show-igor')) {
      body.classList.remove('show-igor');
    } else {
      body.classList.add('show-igor');
    }
  }
})