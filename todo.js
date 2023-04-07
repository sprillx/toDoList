const checkbox  =  document.getElementById('myCheck');
const checkbox2  =  document.getElementById('myCheck2');
const checkbox3  =  document.getElementById('myCheck3');

const task1 = document.querySelector('#task1');
const task2 = document.querySelector('#task2');
const task3 = document.querySelector('#task3');


const List = document.querySelector('Li');

function myFunction(){

    task1.remove();
    checkbox.remove();
}

function myFunction2(){
    checkbox2.remove();
    task2.remove();
}

function myFunction3(){
    checkbox3.remove();
    task3.remove()
}

function addToTheList(){
    const List = document.querySelector('Li');
    const txt = document.querySelector('#listValue').value;
    const button = document.createElement('button');
    button.textContent = 'remove';

// set the button's name attribute to "remove"
    button.setAttribute('name', 'remove');
    let add = document.createElement('li');
    const span = document.createElement('span');
    span.appendChild(button);
    add.innerHTML = txt +" "
    add.appendChild(span)
    document.querySelector('#ToDoList').appendChild(add)
    console.log(txt)

    if(txt === ' '){
        alert('please enter an item');
    }
    button.addEventListener('click', () => {
        add.remove()
    })
    
}


