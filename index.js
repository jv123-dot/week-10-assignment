let id = 0;

let buttonDesign = document.getElementById('button') // getting the elements by their ID and styling them with bootstrap
buttonDesign.className = 'btn btn-secondary form-control'
buttonDesign.innerHTML = 'Click to add information to table below.'
let tableDesign = document.getElementById('list')
tableDesign.className = 'table table-dark table-striped table-hover table-bordered'


document.getElementById('button').addEventListener('click', () => { // adding functionality to the button that takes in the entered values in the form and pushes them to the table. Then clears form
    let table = document.getElementById('list')
    let row = table.insertRow(1);
    row.setAttribute('id', `item-${id}`)
    row.insertCell(0).innerHTML = document.getElementById('new-first-name').value;
    row.insertCell(1).innerHTML = document.getElementById('new-last-name').value;
    row.insertCell(2).innerHTML = document.getElementById('new-email').value;
    document.getElementById('new-email').value = '';
    document.getElementById('new-first-name').value = '';
    document.getElementById('new-last-name').value = '';
})


// wanted to add a delete button but couldn't figure out how to add the buttons to the already inputed data in the table (john, smith, j.smith@gmail.com for example)
// Did have one that created a functioning delete button to the newly added info
