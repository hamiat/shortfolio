const t4Box = document.getElementById('t4')
const aboutText = document.getElementById('aboutText')
const t5Box = document.getElementById('t5')
const contactLinks = document.querySelector('.contactLinks')


t4Box.addEventListener('click', () => {
    t4Box.classList.add('displayingAbout')
    aboutText.style.display = 'block'  
 })

/* t5Box.addEventListener('click', () => {
    t5Box.classList.add('displayingContacts')
    contactLinks.style.display = 'block'  
 }) */

const hideStuff = () => {
    contactLinks.style.display = "none"
    aboutText.style.display = "none"
    t4Box.classList.remove('displayingAbout')
}

window.addEventListener('mousedown', hideStuff)



    





