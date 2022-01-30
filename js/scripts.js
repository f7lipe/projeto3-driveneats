let dishPrice = 0
let drinkPrice = 0
let dessertPrice = 0

function selectDish(id, priceID){
    const selection = document.querySelector('.dishes .dish .selection')
    if (selection !== null){
        selection.classList.remove('selection')
    }

    const selected = document.getElementById(id)
    selected.classList.add('selection')

    dishPrice = document.getElementById(priceID).innerHTML.replace('R$:', '').replace(',', '.')
    verify()
}

function selectDrink(id, priceID){
    let selection = document.querySelector('.drinks .drink .selection')
    if (selection !== null){
        selection.classList.remove('selection')
    }

    let selected = document.getElementById(id)
    selected.classList.add('selection')

    drinkPrice = document.getElementById(priceID).innerHTML.replace('R$:', '').replace(',', '.')
    verify()
}

function selectDessert(id, priceID){
    let selection = document.querySelector('.desserts .dessert .selection')
    if (selection !== null){
        selection.classList.remove('selection')
    }

    let selected = document.getElementById(id)
    selected.classList.add('selection')

    dessertPrice = document.getElementById(priceID).innerHTML.replace('R$:', '').replace(',', '.')
    verify()
}

function verify(){
    const finishBtn = document.querySelector('.finish-btn')

    if((dishPrice !==0) &&( drinkPrice !==0) && (dessertPrice !==0)){
        finishBtn.innerHTML = 'Fechar pedido'
        finishBtn.disabled = false
    }
}

