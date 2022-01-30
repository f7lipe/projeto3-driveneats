let dishName = '' 
let drinkName = ''
let dessertName = ''

let dishPrice = 0
let drinkPrice = 0
let dessertPrice = 0


function selectDish(id, dishID, priceID){
    const selection = document.querySelector('.dishes .dish .selection')
    if (selection !== null){
        selection.classList.remove('selection')
    }

    const selected = document.getElementById(id)
    selected.classList.add('selection')

    dishName = document.getElementById(dishID).innerHTML
    dishPrice = document.getElementById(priceID).innerHTML
    verify()
}

function selectDrink(id, drinkID,priceID){
    let selection = document.querySelector('.drinks .drink .selection')
    if (selection !== null){
        selection.classList.remove('selection')
    }

    let selected = document.getElementById(id)
    selected.classList.add('selection')

    drinkName = document.getElementById(drinkID).innerHTML
    drinkPrice = document.getElementById(priceID).innerHTML.replace('R$', '').replace(',', '.')
    verify()
}

function selectDessert(id, dessertID, priceID){
    let selection = document.querySelector('.desserts .dessert .selection')
    if (selection !== null){
        selection.classList.remove('selection')
    }

    let selected = document.getElementById(id)
    selected.classList.add('selection')

    dessertName = document.getElementById(dessertID).innerHTML
    dessertPrice = document.getElementById(priceID).innerHTML.replace('R$', '').replace(',', '.')
    verify()
}

function total(item1, item2, item3){
    return (Number(item1) + Number(item2) + Number(item3))
}

function verify(){
    const finishBtn = document.querySelector('.finish-btn')

    if((dishPrice !==0) &&( drinkPrice !==0) && (dessertPrice !==0)){
        finishBtn.innerHTML = 'Fechar pedido'
        finishBtn.disabled = false
    }
}

function checkout(){
    const formatedDishPrice = dishPrice.replace('R$', '').replace(',', '.')
    const formatedDrinkPrice = drinkPrice.replace('R$', '').replace(',', '.')
    const formatedDessertPrice = dessertPrice.replace('R$', '').replace(',', '.')
    const order = `Olá, gostaria de fazer o pedido: \n
    - Prato: ${dishName} \n
    - Bebida: ${drinkName} \n
    - Sobremesa: ${dessertName} \n
    Total: R$ ${total(formatedDessertPrice, formatedDrinkPrice, formatedDishPrice)}
    `
    window.open("https://wa.me/5575998651973?text="+encodeURI(order));
}