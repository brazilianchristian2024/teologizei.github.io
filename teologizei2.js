let m = window.document.getElementById('mouse')
m.addEventListener('click', clicar)
m.addEventListener('mouseenter', entrar)
m.addEventListener('mouseout', sair)

function clicar(){
    m.innerText = 'Seja bem-vindo!'
    m.style.background = '#13678A'
    
    
}
function entrar(){
    m.innerText = 'Seja bem-vindo!'
}

function sair(){
    m.innerText = 'Seu site preferido de teologia!'
    m.style.background = '#012030'
}