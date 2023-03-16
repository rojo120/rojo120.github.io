const menu = document.querySelector(".menu")
const services = document.querySelector(".services")
const acceuil = document.querySelector(".acceuil")
const a_propros = document.querySelector(".a_propros")
const contact = document.querySelector(".contact")
const sousMenu = document.querySelector(".sous-menu")
const item1 = document.querySelector(".item1")
const item2 = document.querySelector(".item2")
const item3 = document.querySelector(".item3")
const ssousMenu1 = document.querySelector(".ssous-menu1")
const ssousMenu2 = document.querySelector(".ssous-menu2")
const ssousMenu3 = document.querySelector(".ssous-menu3")

services.onmouseenter = ()=> {

  sousMenu.style.display = "block"

  item1.onmouseenter = ()=> {
    ssousMenu1.style.display = "block"
    ssousMenu2.style.display = "none"
    ssousMenu3.style.display = "none"

    ssousMenu1.onmouseleave = ()=> {
      ssousMenu1.style.display = "none"
    }
  }
  item2.onmouseenter = ()=> {
    ssousMenu2.style.display = "block"
    ssousMenu1.style.display = "none"
    ssousMenu3.style.display = "none"

    ssousMenu2.onmouseleave = ()=> {
      ssousMenu2.style.display = "none"
    }
  }
  item3.onmouseenter = ()=> {
    const ssousMenu3 = document.querySelector(".ssous-menu3")
    ssousMenu3.style.display = "block"
    ssousMenu2.style.display = "none"
    ssousMenu1.style.display = "none"

    ssousMenu3.onmouseleave = ()=> {
      ssousMenu3.style.display = "none"
    }
  }
}
acceuil.onmouseenter = ()=> {
  sousMenu.style.display = "none"
  ssousMenu1.style.display = "none"
  ssousMenu2.style.display = "none"
  ssousMenu3.style.display = "none"
}
a_propros.onmouseenter = ()=> {
  sousMenu.style.display = "none"
  ssousMenu1.style.display = "none"
  ssousMenu2.style.display = "none"
  ssousMenu3.style.display = "none"
}
contact.onmouseenter = ()=> {
  sousMenu.style.display = "none"
  ssousMenu1.style.display = "none"
  ssousMenu2.style.display = "none"
  ssousMenu3.style.display = "none"
}

