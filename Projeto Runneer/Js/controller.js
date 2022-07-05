const personagem = document.querySelector('.personagem')
const pipe = document.querySelector('.pipe');

const jump = () => {
    personagem.classList.add('jump');

    setTimeout(()=>{
        personagem.classList.remove('jump'); 
    } , 500);
}

const loop = setInterval(()=>{
    const pipebox = pipe.offsetLeft
    const personagembox = +window.getComputedStyle(personagem).bottom.replace('px', '');

    if(pipebox <= 120 && personagembox < 80 && pipebox > 0){
        pipe.style.animation = 'none'
        pipe.style.left = `${pipebox}px`

        personagem.style.animation = 'none'
        personagem.style.bottom = `${personagembox}px`

        personagem.src = './Images/game-over.png'
        personagem.style.width = '75px'
        personagem.style.marginLeft = '50px'

        clearInterval(loop);
    }

}, 10)


document.addEventListener('keydown', jump);
