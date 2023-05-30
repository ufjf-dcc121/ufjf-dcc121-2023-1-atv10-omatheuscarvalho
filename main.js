window.addEventListener('load', setup);

function setup() {
    const form = document.forms.entrada;
    form.addEventListener('submit', envia);
    
    function envia(evento) {
        evento.preventDefault();
        console.log('Formulário enviado!');
        const valor = document.querySelector('#valor').value;
        atualiza(valor);
    }
}

function atualiza(valor){
    const ol = document.querySelector('ol');
    ol.innerHTML += `<li>${valor}</li>`
}