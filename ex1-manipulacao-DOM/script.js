//Selecionar o botão via JS
const button = document.querySelector('#btn');

//Selecionar o texto via JS
const text = document.getElementById('myText');

//Adicionando um "ovinte" de evento para disparar um ação
button.addEventListener('click',() => {

    
    //Troca de texto para "Olá, mundo!"
    text.textContent = 'Olá, mundo!'
})