"use strict";
const button = document.getElementById('add-data');
const td = document.querySelector('td');
let row = 1;
button.addEventListener('click', (e) => {
    // prevent reloads when submitting
    e.preventDefault();
    // grab elements
    let firstName = document.getElementById('firstname');
    let lastName = document.getElementById('lastname');
    let address = document.getElementById('address');
    let birthday = document.getElementById('date');
    let gender = document.getElementById('gender');
    let notes = document.getElementById('notes');
    // alert user if they forgot to input
    if (!firstName.value || !lastName.value || !address.value) {
        alert('Required field is empty');
        gender.value = '';
    }
    let table = document.getElementById('display');
    const buttonHolder = document.createElement('div');
    buttonHolder.setAttribute('class', '.newButtonHolder');
    const deletebtn = document.createElement('button');
    deletebtn.textContent = 'X';
    deletebtn.style.backgroundColor = 'red';
    deletebtn.style.color = 'white';
    let newRow = table.insertRow(row);
    // assign numbers to cells
    const cellOne = newRow.insertCell(0);
    const cellTwo = newRow.insertCell(1);
    const cellThree = newRow.insertCell(2);
    const cellFour = newRow.insertCell(3);
    const cellFive = newRow.insertCell(4);
    const cellSix = newRow.insertCell(5);
    const cellSeven = newRow.insertCell(6);
    //put the input values  in the table
    cellOne.innerHTML = firstName.value;
    cellTwo.innerHTML = lastName.value;
    cellThree.innerHTML = address.value;
    cellFour.innerHTML = birthday.value;
    cellFive.innerHTML = gender.value;
    cellSix.innerHTML = notes.value && cellSeven.append(deletebtn);
    deletebtn.addEventListener('click', (e) => {
        e.preventDefault();
        //clear table
    });
    row++;
    // reset input fields after submitting
    firstName.value = '';
    lastName.value = '';
    address.value = '';
    birthday.value = '';
    gender.value = '';
    notes.value = '';
});
