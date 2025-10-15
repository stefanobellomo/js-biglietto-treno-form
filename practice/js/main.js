// const list = document.querySelector('.list')

// const names = ['fabio', 'luigi','giovanni', 'stefn', 'onofrj']

// let items = ''

// for (let i = 0; i < names.length; i++) {
//     const name = names[i];
//     items += `<li class="">${name}</li>`    
// }

// list.innerHTML = items


// const group = document.querySelector('.group')

// const medals = ['ora', 'argento','bronzo', 'legno', 'delfino']

// for (let i = 0; i < medals.length; i++) {
//     const medal = medals[i];
//     const li = document.createElement('li')
//     li.append(medal)
// }

const nameField = document.getElementById('nameField');
const companyField = document.getElementById('companyField');
const buttonEl = document.querySelector('button')
const formEl = document.querySelector('form')
const infoEl = document.getElementById('info')

console.log(nameField, companyField, buttonEl, formEl);


formEl.addEventListener('submit', (event) => {

    event.preventDefault()

    const name = nameField.value;
    const company = companyField.value;

    console.log(name, company);

    const info = `${nameField.value} ${companyField.value}`

    infoEl.innerText = info
})

// const nameField = document.getElementById("name")
// const emailField = document.getElementById("email")
// const formEl = document.querySelector("form")
// const infoEl = document.getElementById("info")

// console.log(nameField, emailField)

// formEl.addEventListener("submit", (event) => {
//     event.preventDefault()

//     console.log(nameField.value, emailField.value);
//     const info = `${nameField.value} ${emailField.value}`
//     infoEl.innerText = info

// })
