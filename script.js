const t4Box = document.getElementById('t4')
const aboutText = document.getElementById('aboutText')
const t5Box = document.getElementById('t5')
const contactLinks = document.querySelector('.contactLinks')
const allLinks = document.querySelectorAll('a')
const t10Box = document.getElementById('t10')
const t8Box = document.getElementById('t8')
const t9Box = document.getElementById('t9')
const aframeGameText = document.getElementById('aframeGameText')
const pomodoroText = document.getElementById('pomodoroText')
const textLogoText = document.getElementById('textLogoText')


t4Box.addEventListener('click', () => {
    t4Box.classList.add('displayingAbout')
    aboutText.style.display = 'block'  
 })

t5Box.addEventListener('click',  () =>{
    t5Box.classList.add('displayingContacts')
   contactLinks.style.display = 'grid'
   contactLinks.style.fontSize = '0.7em'
 })

 
 t8Box.addEventListener('mouseenter', () => {
    pomodoroText.style.display = "block"
    pomodoroText.style.textAlign = "start"
    pomodoroText.style.fontSize = "1.3em"   
 })
 
 t9Box.addEventListener('mouseenter', () => {
    textLogoText.style.display = "block"
    textLogoText.style.textAlign = "start"
    textLogoText.style.fontSize = "1.3em"   
 })
 

 t10Box.addEventListener('mouseenter', () => {
    aframeGameText.style.display = "block"
    aframeGameText.style.width = "200%"
    aframeGameText.style.textAlign = "start"
    aframeGameText.style.fontSize = "1.3em"   
 })


const hideStuff = () => {
    contactLinks.style.display = "none"
    aboutText.style.display = "none"
    t4Box.classList.remove('displayingAbout')
    t5Box.classList.remove('displayingContacts')
}

window.addEventListener('mousedown', hideStuff)

t8Box.addEventListener('mouseleave', () => {  
    pomodoroText.style.display = "none"   
 })

t9Box.addEventListener('mouseleave', () => {  
    textLogoText.style.display = "none"   
 })

 t10Box.addEventListener('mouseleave', () => {  
    aframeGameText.style.display = "none"   
 })











