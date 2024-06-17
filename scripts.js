const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listALL = document.querySelector('.list-tasks')

let list = [] 

function addTask(){
    list.push({
        i: input.value,
        completed : false
    })
    input.value = ''
    print()
}

function print(){

    let newList = ''

    list.forEach((i, index) => {
        newList =  newList + `
        <li class="task ${i.completed && "done"}">
            <img class="" src="img/checked.png" alt="Check" onclick="completed(${index})">
                <p>${i.i}</p>
            <img src="img/trash.png" alt="trash" onclick="delet(${index})">
        </li>
        `
    })
     listALL.innerHTML = newList
     localStorage.setItem('lista', JSON.stringify(list))
}

function completed(index){
    list[index].completed = !list[index].completed
    print()
}

function delet(index){
    list.splice(index, 1)
    print()
}
function refresh(){
    const tasks = localStorage.getItem('lista')
    
    if(tasks){
        list = JSON.parse(tasks)
    }

    print()
}

refresh()
button.addEventListener('click', addTask)