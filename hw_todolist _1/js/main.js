function ready() {
  const input = document.querySelector(".add");
  const filter = document.querySelector(".filter input");
  const ul = document.querySelector("ul.todos");
  const allBtn = document.querySelector(".all");
  const activeBtn = document.querySelector(".active");
  const doneBtn = document.querySelector(".done");

  // let deleteAllBtn = document.querySelectorAll(".delete");
  // let importantBtn = document.querySelectorAll(".importantbtn");
  // let todoitem = document.querySelectorAll(".todoText");

  const getTodoItems = function() {
    return fetch(`https://rn-todo-app-c27d4.firebaseio.com/todos.json`)
      .then(response => response.json())
      .then(data => {
        for (var key in data) {
          addNew(data[key].title);
        }
      });
  };
  getTodoItems();

  function addNew(newTodo = input.value) {
    const li = document.createElement("li");
    const textSpan = document.createElement("span");
    const deleteButton = document.createElement("button");
    const importantButton = document.createElement("button");
    textSpan.append(newTodo);
    textSpan.classList.add("todoText");
    textSpan.classList.add("activeitem");
    deleteButton.classList.add("deletebtn");
    deleteButton.innerText = "D";
    importantButton.classList.add("importantbtn");
    importantButton.innerText = "I";
    ul.appendChild(li).append(textSpan, deleteButton, importantButton);

    listenImportantTodo(importantButton);
    listenDeleteTodo(deleteButton);
    listenexecuteTodo(textSpan);
    input.value = "";
  }

  input.addEventListener("keypress", keyPressed => {
    const keyEnter = 13;
    if (keyPressed.which === keyEnter) {
      console.log(input);

      addNew();
    }
  });
  console.log(filter);

  filter.addEventListener("keyup", keyPressed => {
    let todoitem = document.querySelectorAll(".todoText");
    let find = filter.value;
    console.log(filter);
    for (let span of todoitem) {
      if (!span.textContent.includes(`${find}`)) {
        span.parentElement.classList.add("hidden");
      } else {
        span.parentElement.classList.remove("hidden");
      }
    }
  });
  function listenImportantTodo(element) {
    element.addEventListener("click", event => {
      element.parentElement.children[0].classList.toggle("important");
    });
  }

  function listenexecuteTodo(element) {
    element.addEventListener("click", event => {
      element.classList.toggle("execute");
      element.classList.toggle("activeitem");
    });
  }
  function listenDeleteTodo(element) {
    element.addEventListener("click", event => {
      element.parentElement.remove();
    });
  }

  function filterAll(element) {
    element.addEventListener("click", event => {
      let todoitem = document.querySelectorAll(".todoText");
      for (let span of todoitem) {
        span.parentElement.classList.remove("hidden");
        console.log(span.textContent);
      }
    });
  }

  function filterActive(element) {
    element.addEventListener("click", event => {
      let executeitem = document.querySelectorAll(".execute");
      let todoitem = document.querySelectorAll(".todoText");
      for (let span of todoitem) {
        span.parentElement.classList.remove("hidden");
      }
      for (let span of executeitem) {
        span.parentElement.classList.add("hidden");
      }
    });
  }

  function filterDone(element) {
    element.addEventListener("click", event => {
      let doneItem = document.querySelectorAll(".activeitem");
      let todoitem = document.querySelectorAll(".todoText");
      for (let span of todoitem) {
        span.parentElement.classList.remove("hidden");
      }
      for (let span of doneItem) {
        span.parentElement.classList.add("hidden");
      }
    });
  }
  filterAll(allBtn);
  filterActive(activeBtn);
  filterDone(doneBtn);
}
document.addEventListener("DOMContentLoaded", ready);
