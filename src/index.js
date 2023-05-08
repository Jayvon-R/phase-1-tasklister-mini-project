document.addEventListener("DOMContentLoaded", () => {
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()
    handleToDo(e.target.new_task.value)
  } )
});

function handleToDo(todo){
  let li = document.createElement('li')
  let btn = document.createElement('button')
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'x'
  li.textContent = `${todo} `
  li.appendChild(btn)
 document.querySelector('#list').appendChild(li)
}

function handleDelete(e){
  e.target.parentNode.remove()
}
