window.addEventListener('load', setup);

function setup() {
    const form = document.forms.entrada;
    form.addEventListener('submit', envia);
    
    function envia(evento) {
        evento.preventDefault();
        console.log('Formulário enviado!');
    }
}
