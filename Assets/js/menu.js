//permanecer cor após click
var menu = document.querySelectorAll('.itemMenu')

function seletor(){
    menu .forEach((item)=>
        item.classList.remove('open')
    )
    this.classList.add('open')
}

menu.forEach((item)=>
    item.addEventListener('click', seletor)
)


var btnExp = document.querySelector('#btnExp')
var menuSide = document.querySelector('.menuLateral')

btnExp.addEventListener('click', function(){
    menuSide.classList.toggle('expandir')
})