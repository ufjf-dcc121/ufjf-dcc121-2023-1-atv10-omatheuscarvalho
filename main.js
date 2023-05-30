window.addEventListener('load', setup);

function setup() {
    const form = document.forms.entrada;
    form.addEventListener('submit', envia);
    
    function envia(evento) {
        evento.preventDefault();
        console.log('Formulário enviado!');
        atualiza();
    }
}

let estado = 0;
function atualiza(){
    const ol = document.querySelector('ol');
    ol.innerHTML = `<li>${estado}</li>`
}