let userInput = document.getElementById("userInput");
let homeContent = document.getElementById("homeContent");
let searchInput = document.getElementById("searchInput");

let items = [];

if(localStorage.getItem("allItems")){
    items = JSON.parse(localStorage.getItem("allItems"))
    displayItems();
}

function addItem(){
    if(userInput.value){
        items.push(userInput.value);
        userInput.value= "";
        localStorage.setItem("allItems",JSON.stringify(items))
    displayItems();
    }else{
        window.alert("please enter string")
    }
}

function displayItems(){
    let cartona = ``
    items.forEach((item, ind) => {
        cartona += `
        <div
        class="home-item mb-2 rounded-pill text-dark mx-auto w-25 bg-danger d-flex justify-content-between align-items-center">
        <p id="item" class="m-0 p-0">${item}</p>
        <i class="fa-sharp fa-solid fa-trash" onclick="remove(${ind})"></i>
        </div>
        `
    })
    homeContent.innerHTML = cartona;
}

function remove(index){
    items.splice(index, 1);
    localStorage.setItem("allItems",JSON.stringify(items))
    displayItems();
}

searchInput.addEventListener('input',(event) => {
    searche(event.target.value)
})

function searche(term){
    let cartona = ``
    items.forEach((item, ind) => {
        if (item.toLowerCase().includes(term.toLowerCase())){
            cartona += `
        <div
        class="home-item mb-2 rounded-pill text-dark mx-auto w-25 bg-danger d-flex justify-content-between align-items-center">
        <p id="item" class="m-0 p-0">${item.toLowerCase().replace(term, `<span class="text-white fw-bolder">${term.toLowerCase()}</span>`)}</p>
        <i class="fa-sharp fa-solid fa-trash" onclick="remove(${ind})"></i>
        </div>
        `
        }
        
    })
    homeContent.innerHTML = cartona;
}