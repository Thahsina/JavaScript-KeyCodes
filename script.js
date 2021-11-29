const key= document.getElementById('key')
const keyCode = document.getElementById('keyCode')
const code = document.getElementById('code')
// const container = document.getElementsByClassName('.container')
// const theme = document.getElementById('theme-button')


window.addEventListener('keydown', (e)=> {
    e.key === ' '? key.innerHTML='Space' : key.innerHTML = e.key;
    keyCode.innerHTML = e.keyCode;
    code.innerHTML= e.code;
    
}
)



