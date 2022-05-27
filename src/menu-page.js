import {createNavBar} from './home-page'

let item = (name, ingredients) => {
    return {name, ingredients}
}

let menuItems = []

const populateMenuItems = () => {
    let menuItem1 = item("Pizza", ["Tomato sauce", "pepperoni", "mozzarella buffala", "basil"])
    let menuItem2 = item("Burger", ["Black Angus beef", "pickles", "cheddar", "red onion", "homemade bun"])
    let menuItem3 = item("Caesar Salad", ["Grilled chicken", "parmesan", "iceberg lettuce", "mayonaise", "anchois", "croutons"])
    let menuItem4 = item("Spaghetti Carbonara", ["Homemade spaghetti", "pancetta", "parmesan", "egg", "black pepper"])
    menuItems.push(menuItem1, menuItem2, menuItem3, menuItem4)
}

const addMenuItem = (idx, menuContent) => {
    let item = document.createElement('li')
    item.classList.add('menu-item')
    let itemTitle = document.createElement('div')
    itemTitle.textContent = menuItems[idx].name
    itemTitle.classList.add('item-title')
    item.appendChild(itemTitle)
    let itemIngredients = document.createElement('div')
    itemIngredients.textContent = menuItems[idx].ingredients.join(', ')
    itemIngredients.classList.add('item-ingredients')
    item.appendChild(itemIngredients)
    menuContent.appendChild(item)    
}

const loadMenuPage = () => {
    let content = document.getElementById('content')
    content.removeAttribute('class')
    content.classList.add('menu-content')
    content.textContent = ''
    let navBar = createNavBar()
    content.appendChild(navBar)
    let menuContainer = document.createElement('div')
    content.appendChild(menuContainer)
    menuContainer.classList.add('menu-container')
    let menuDiv = document.createElement('div')
    menuDiv.classList.add('menu')
    menuContainer.appendChild(menuDiv)
    let menuTitle = document.createElement('div')
    menuDiv.appendChild(menuTitle)
    menuTitle.textContent = 'Menu'
    menuTitle.classList.add('menu-title')
    let menuContent = document.createElement('ul')
    menuDiv.appendChild(menuContent)
    menuContent.classList.add('menu-item-list')
    for(let i = 0; i < menuItems.length; i++){
        addMenuItem(i, menuContent)
    }
}

export {loadMenuPage, populateMenuItems}