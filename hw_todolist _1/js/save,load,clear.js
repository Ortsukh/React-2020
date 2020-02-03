const saveButton = document.querySelector('button.save');
const clearButton = document.querySelector('button.clear');
const ul = document.querySelector('ul.todos');
function save () {
  saveButton.addEventListener('click', () => {
  const data = JSON.stringify(ul.innerHTML);
  localStorage.setItem('todos', data);
});
}
function clear () {
  clearButton.addEventListener('click', () => {
  localStorage.removeItem('todos', ul.innerHTML);
});
}
function loadTodo () {
  if (localStorage.getItem('todos')) {
    const a = localStorage.getItem('todos');
    ul.innerHTML = JSON.parse(a);
  }
}
export {
  save, clear, loadTodo
};