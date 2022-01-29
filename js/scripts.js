function selectDish(id){
    let selection = document.querySelector('.dishes .dish .selection')
    if (selection !== null){
        selection.classList.remove('selection')
    }

    let selected = document.getElementById(id)
    selected.classList.add('selection')
}

function selectDrink(id){
    let selection = document.querySelector('.drinks .drink .selection')
    if (selection !== null){
        selection.classList.remove('selection')
    }

    let selected = document.getElementById(id)
    selected.classList.add('selection')
}

function selectDessert(id){
    let selection = document.querySelector('.desserts .dessert .selection')
    if (selection !== null){
        selection.classList.remove('selection')
    }

    let selected = document.getElementById(id)
    selected.classList.add('selection')
}

