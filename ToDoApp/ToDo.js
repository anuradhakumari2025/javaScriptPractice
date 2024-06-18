let todolist = [{
    items: 'buy milk',
    date: '4-6-2023'
},
{
    items: 'buy what',
    date: '5-7-2024'
}];
displayItems();

function addToDo() {
    let inputElement = document.querySelector('#ToDoInput');
    let dateElement = document.querySelector('#todoDate');

    let todoinput = inputElement.value;
    let tododate = dateElement.value;
    todolist.push({ items: todoinput, date: tododate });
    inputElement.value = '';
    dateElement.value = '';
    displayItems();
}

function displayItems() {
    let displayElement = document.querySelector('.todoContainer');
    let newHTML = '';
    for (let i = 0; i < todolist.length; i++) {
        let items = todolist[i].items;
        let date = todolist[i].date;
        // let [items,date]  = todolist[i];
        newHTML += `
        
        <span>${items}</span>
        <span>${date}</span>
        <button class=" btnDelete" onclick="todolist.splice(${i},1) ;displayItems()">Delete</button>
        
        `;
    }
    displayElement.innerHTML = newHTML;
}