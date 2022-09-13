"use strict";
const button = document.getElementById('add-data');
const td = document.querySelector('td');
let row = 1;
let count = 1;
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
    let table = document.getElementById('display');
    // create delete button and its holder div
    const buttonHolder = document.createElement('div');
    buttonHolder.setAttribute('class', '.newButtonHolder');
    const deletebtn = document.createElement('button');
    deletebtn.textContent = 'X';
    deletebtn.style.backgroundColor = 'red';
    deletebtn.style.color = 'white';
    // create more... button for notes content
    const notesHolder = document.createElement('div');
    notesHolder.setAttribute('class', '.newButtonHolder');
    const moreBtn = document.createElement('button');
    moreBtn.textContent = 'Open Notes...';
    moreBtn.setAttribute("class", "btn btn-secondary btn-sm");
    let newRow = table.insertRow(row);
    // assign numbers to cells
    const cellOne = newRow.insertCell(0);
    const cellTwo = newRow.insertCell(1);
    const cellThree = newRow.insertCell(2);
    const cellFour = newRow.insertCell(3);
    const cellFive = newRow.insertCell(4);
    const cellSix = newRow.insertCell(5);
    const cellSeven = newRow.insertCell(6);
    const cellEight = newRow.insertCell(7);
    // conditional rendering the output
    if (!firstName.value || !lastName.value || !address.value) {
        alert('Required field is empty');
        gender.value = '';
        cellOne.value = '';
    }
    else {
        cellOne.innerHTML = count;
        cellTwo.innerHTML = firstName.value;
        cellThree.innerHTML = lastName.value;
        cellFour.innerHTML = address.value;
        cellFive.innerHTML = birthday.value;
        cellSix.innerHTML = gender.value;
        cellSeven.append(moreBtn);
        cellEight.append(deletebtn);
        count++;
    }
    // display notes after clicking Open Notes button
    moreBtn.addEventListener('click', (e) => {
        e.preventDefault();
    });
    //give functionality to delete button
    deletebtn.addEventListener('click', (e) => {
        e.preventDefault();
        cellOne.remove();
        cellTwo.remove();
        cellThree.remove();
        cellFour.remove();
        cellFive.remove();
        cellSix.remove();
        cellSeven.remove();
        cellEight.remove();
        count--;
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
