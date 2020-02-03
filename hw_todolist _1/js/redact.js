const red = document.getElementsByClassName('redact');
function redactTodo () {
  for (const span of red) {
    span.addEventListener('click', (event) => {
      span.parentElement.children[2].classList.toggle('hidden');

      span.parentElement.children[3].classList.toggle('hidden');
      span.parentElement.children[3].addEventListener('keypress', (keyPressed) => {
        const keyEnter = 13;
        if (keyPressed.which === keyEnter) {
          span.parentElement.children[2].textContent = span.parentElement.children[3].value;
          span.parentElement.children[2].classList.toggle('hidden');
          span.parentElement.children[3].classList.toggle('hidden');
        }
      }
      );
    });
  }
}

function hidden (element) {
  for (const span of element) {
    span.addEventListener('mouseenter', (event) => {
      span.children[0].classList.toggle('hidden');
      span.children[1].classList.toggle('hidden');
    });
    span.addEventListener('mouseleave', (event) => {
      span.children[0].classList.toggle('hidden');
      span.children[1].classList.toggle('hidden');
    });
  }
}
export {
  redactTodo, hidden
};