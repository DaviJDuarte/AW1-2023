const answers = [1776, 'Claudete', 'Anakin', 'Ken', 'Voldemort'];

const btns = document.querySelectorAll('.submit-button');

btns.forEach((btn, index) => {
  if (index != 0) {
    btn.disabled = true;
  }

  btn.addEventListener('click', () => {
    const option = document.querySelector(`input[value="${answers[index]}"]`);

    if (option.checked) {
      let spanCorrect = document.querySelectorAll('.correct')[index];
      let spanIncorrect = document.querySelectorAll('.incorrect')[index];
      spanCorrect.style.display = 'block';
      spanIncorrect.style.display = 'none';
      btns[index].disabled = true;

      if (nextBtn = btns[index + 1]) {
        nextBtn.disabled = false;
      }
    }
    else {
      let spanIncorrect = document.querySelectorAll('.incorrect')[index];
      spanIncorrect.style.display = 'block';
    }
  })
});