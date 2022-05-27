import {createNavBar} from './home-page'

const loadContactPage = () => {
    let content = document.getElementById('content')
    content.removeAttribute('class')
    content.classList.add('contact-content')
    content.textContent = ''
    let navBar = createNavBar()
    content.appendChild(navBar)
    let contactContainer = document.createElement('div')
    contactContainer.classList.add('contact-container')
    content.appendChild(contactContainer)
    let contactDiv = document.createElement('div')
    contactContainer.appendChild(contactDiv)
    contactDiv.classList.add('contact')
    let contactTitle = document.createElement('div')
    contactDiv.appendChild(contactTitle)
    contactTitle.classList.add('contact-page-title')
    contactTitle.textContent = 'Contact us'
    let phone = document.createElement('div')
    contactDiv.appendChild(phone)
    phone.classList.add('contact-group')
    let phoneTitle = document.createElement('div')
    phone.appendChild(phoneTitle)
    phoneTitle.classList.add('contact-title')
    phoneTitle.textContent = 'Phone number:'
    let phoneNumber = document.createElement('div')
    phone.appendChild(phoneNumber)
    phoneNumber.classList.add('contact-info')
    phoneNumber.textContent = '+0123456789'
    let mail = document.createElement('div')
    contactDiv.appendChild(mail)
    mail.classList.add('contact-group')
    let mailTitle = document.createElement('div')
    mail.appendChild(mailTitle)
    mailTitle.classList.add('contact-title')
    mailTitle.textContent = 'Mail:'
    let mailAddress = document.createElement('div')
    mail.appendChild(mailAddress)
    mailAddress.classList.add('contact-info')
    mailAddress.textContent = 'restaurant@gmail.com'
    let location = document.createElement('div')
    location.classList.add('contact-group')
    contactDiv.appendChild(location)
    let locationTitle = document.createElement('div')
    location.appendChild(locationTitle)
    locationTitle.classList.add('contact-title')
    locationTitle.textContent = 'Our location:'
    let locationAddress = document.createElement('div')
    location.appendChild(locationAddress)
    locationAddress.classList.add('contact-info')
    locationAddress.textContent = 'Liberty Street, no.45, New York, NY'
    let hours = document.createElement('div')
    contactDiv.appendChild(hours)
    hours.classList.add('contact-group')
    let hoursTitle = document.createElement('div')
    hours.appendChild(hoursTitle)
    hoursTitle.classList.add('contact-title')
    hoursTitle.textContent = 'Working hours:'
    let workingHours = document.createElement('div')
    hours.appendChild(workingHours)
    workingHours.classList.add('contact-info')
    workingHours.textContent = 'Mon-Thu: 12:00-00:00, Fri-Sun: 12:00-02:00'
}

export {loadContactPage}