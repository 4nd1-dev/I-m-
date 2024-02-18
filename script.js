const $ = el => document.querySelector(el)

const themeButton = $('#theme')
const markyImg = $('#marky')
const rmImg = $('#rm')
const menuResp = $('#menu-resp')
const menuNav = $('#menu-nav')
const menuButton = $('#menu-button')

// Theme restore from cache
const theme = localStorage.getItem("theme")
if (theme === 'dark') {
  document.body.classList.toggle('dark')
  themeButton.src = "./assets/Icons/moon.svg"
}

// Theme button functionality 
themeButton.addEventListener('click', ()=>{
  if (document.body.className === "dark") {
    // Light theme actions
    themeButton.src = "./assets/Icons/sun.svg"
    markyImg.src = "./assets/Projects/marky.png"
    rmImg.src = "./assets/Projects/rm.png"
    localStorage.setItem("theme", "light")
  } else {
    // Dark theme actions
    themeButton.src = "./assets/Icons/moon.svg"
    markyImg.src = "./assets/Projects/marky-dark.png"
    rmImg.src = "./assets/Projects/rm-dark.png"
    localStorage.setItem("theme", "dark")
  }

  document.body.classList.toggle('dark')
})

// Menu functionality
menuButton.addEventListener('click', ()=>{
  menuNav.style.animation = "show-menu 300ms backwards ease-in"
  menuResp.style.display = "block" // Show
})

menuResp.addEventListener('click', ()=>{
  menuNav.style.animation = "hidde-menu 300ms backwards ease-in"

  setTimeout(()=>{
    menuResp.style.display = "none"
  },300)
})