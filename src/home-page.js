import {loadMenuPage} from './menu-page'
import {loadContactPage} from './contact-page'

const loadHomePage = () => {
    let content = document.getElementById('content')
    content.removeAttribute('class')
    content.classList.add('home-content')
    content.textContent = ''
    let navBar = createNavBar()
    content.appendChild(navBar)
    let title = document.createElement('div')
    title.classList.add('title')
    title.textContent = 'Anna\'s kitchen'
    content.appendChild(title)
    let about = document.createElement('section')
    content.appendChild(about)
    about.classList.add('about')
    about.textContent = 'Prepare for one of the most exquisite culinary experiences that will make you come back again and again...'
}

const createNavBar = () => {
    let nav = document.createElement('nav')
    let navTabs = document.createElement('ul')
    nav.appendChild(navTabs)
    let homeTab = document.createElement('button')
    homeTab.setAttribute('id', 'home-tab')
    homeTab.classList.add('tab')
    let menuTab = document.createElement('button')
    menuTab.setAttribute('id', 'menu-tab')
    homeTab.classList.add('tab')
    let contactTab = document.createElement('button')
    contactTab.setAttribute('id', 'contact-tab')
    homeTab.classList.add('tab')
    homeTab.textContent = 'Home'
    menuTab.textContent = 'Menu'
    contactTab.textContent = 'Contact'
    navTabs.appendChild(homeTab)
    navTabs.appendChild(menuTab)
    navTabs.appendChild(contactTab)
    homeTab.addEventListener('click', loadHomePage)
    menuTab.addEventListener('click', loadMenuPage)
    contactTab.addEventListener('click', loadContactPage)
    return nav
}

export {
    loadHomePage, 
    createNavBar
}