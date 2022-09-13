 // grab elements
const button = document.getElementById('add-data')
const td = document.querySelector('td')!

const localStorageKey = 'inputData'

let firstName = document.getElementById('firstname') as HTMLInputElement
let lastName = document.getElementById('lastname') as HTMLInputElement
let address = document.getElementById('address') as HTMLInputElement
let birthday = document.getElementById('date') as HTMLInputElement
let gender = document.getElementById('gender') as HTMLOptionElement
let notes = document.getElementById('notes') as HTMLInputElement
let table = document.getElementById('display') as HTMLTableElement

let row = 1
let count = 1


button!.addEventListener('click', (e) => {
 // prevent reloads when submitting
  e.preventDefault()


// create delete button and its holder div
const buttonHolder = document.createElement('div')
buttonHolder.setAttribute('class', '.newButtonHolder')

const deletebtn = document.createElement('button')
deletebtn.textContent = 'X'
deletebtn.style.backgroundColor = 'red'
deletebtn.style.color = 'white'

// create more... button for notes content
const notesHolder = document.createElement('div')
notesHolder.setAttribute('class', '.newButtonHolder')

const moreBtn = document.createElement('button')
moreBtn.textContent = 'Open Notes...'
moreBtn.setAttribute("class", "btn btn-secondary btn-sm")



let newRow = table.insertRow(row) 
// assign numbers to cells
const cellOne: any = newRow.insertCell(0)
const cellTwo: any = newRow.insertCell(1)
const cellThree: any = newRow.insertCell(2)
const cellFour: any = newRow.insertCell(3)
const cellFive: any = newRow.insertCell(4)
const cellSix: any = newRow.insertCell(5)
const cellSeven: any = newRow.insertCell(6)
const cellEight: any = newRow.insertCell(7)
let a: any




// conditional rendering the output

if(!firstName.value || !lastName.value || !address.value){
  alert('Required field is empty')
  gender.value = ''
  cellOne.value = ''
} else {

  //put stuff in local storage

  localStorage.setItem('firstname', firstName.value)
  localStorage.setItem('lastname', lastName.value)
  localStorage.setItem('address', address.value)
  localStorage.setItem('birthday', birthday.value)
  localStorage.setItem('gender', gender.value)
  localStorage.setItem('notes', notes.value)


  //display on table
  cellOne.innerHTML = count
  cellTwo.innerHTML = localStorage.getItem('firstname')
  cellThree.innerHTML = localStorage.getItem('lastname')
  cellFour.innerHTML = localStorage.getItem('address')
  cellFive.innerHTML = localStorage.getItem('birthday')
  cellSix.innerHTML = localStorage.getItem('gender')
  cellSeven.append(moreBtn)
  cellEight.append(deletebtn)
  a = notes.value

  count++
}


// display notes after clicking Open Notes button
moreBtn.addEventListener('click', (e) => {
  e.preventDefault()
  alert(a)
})


//give functionality to delete button
deletebtn.addEventListener('click', (e) => {
  e.preventDefault()
  cellOne.remove()
  cellTwo.remove()
  cellThree.remove()
  cellFour.remove()
  cellFive.remove()
  cellSix.remove()
  cellSeven.remove()
  cellEight.remove()
  count --
})


row++

// reset input fields after submitting
firstName.value = ''
lastName.value = ''
address.value = ''
birthday.value = ''
gender.value = ''
notes.value = ''
})