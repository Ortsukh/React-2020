const input = document.querySelector("input[type='text']");
const ul = document.querySelector("ul.todos");
function addNew() {
  const li = document.createElement("li");
  const textSpan = document.createElement("span");
  textSpan.classList.add("todo-text");
  const newTodo = input.value;
  textSpan.append(newTodo);

  const deleteBtn = document.createElement("span");
  deleteBtn.classList.add("todo-trash");
  deleteBtn.classList.add("hidden");
  const icon = document.createElement("i");
  icon.classList.add("fas", "fa-trash-alt");
  deleteBtn.appendChild(icon);

  const redact = document.createElement("span");
  redact.classList.add("redact");
  redact.classList.add("hidden");
  const iconRed = document.createElement("i");
  iconRed.classList.add("fas", "fa-pencil-alt");
  redact.appendChild(iconRed);

  const redact1 = document.createElement("input");
  redact1.classList.add("redact1");
  redact1.classList.add("hidden");
  redact1.setAttribute("value", `${newTodo}`);

  ul.appendChild(li).append(deleteBtn, redact, textSpan, redact1);
  input.value = "";

  redactTodo1(redact);
  listenDeleteTodo1(deleteBtn);
  hidden1(li);
}

function listenDeleteTodo1(element) {
  element.addEventListener("click", event => {
    element.parentElement.remove();
    event.stopPropagation();
  });
}
function redactTodo1(span) {
  span.addEventListener("click", event => {
    span.parentElement.children[2].classList.toggle("hidden");

    span.parentElement.children[3].classList.toggle("hidden");
    span.parentElement.children[3].addEventListener("keypress", keyPressed => {
      const keyEnter = 13;
      if (keyPressed.which === keyEnter) {
        span.parentElement.children[2].textContent =
          span.parentElement.children[3].value;
        span.parentElement.children[2].classList.toggle("hidden");
        span.parentElement.children[3].classList.toggle("hidden");
      }
    });
  });
}
function hidden1(element) {
  element.addEventListener("mouseenter", event => {
    element.children[0].classList.toggle("hidden");
    element.children[1].classList.toggle("hidden");
  });
  element.addEventListener("mouseleave", event => {
    element.children[0].classList.toggle("hidden");
    element.children[1].classList.toggle("hidden");
  });
}
export { addNew };
