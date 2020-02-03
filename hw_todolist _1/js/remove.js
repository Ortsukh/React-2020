
function listenDeleteTodo (element) {
  for (const span of element) {
    span.addEventListener('click', (event) => {
      span.parentElement.remove();
      event.stopPropagation();
    });
  }
}
export {
  listenDeleteTodo
};