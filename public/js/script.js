const addModalOverlay = document.querySelector('.add-modalOverlay');
const updateModalOverlay = document.querySelector('.update-modalOverlay');
const contactos = document.querySelectorAll('#id');

document.querySelector('.novoContacto').addEventListener('click', () => {
    if (!addModalOverlay.classList.contains('active'))
        addModalOverlay.classList.add('active');
    else
        addModalOverlay.classList.remove('active');
});

document.querySelector('.btnAtualizar').addEventListener('click', () => {
    for (const contacto of contactos) {
        console.log(contacto.innerHTML);
    }

    if (!updateModalOverlay.classList.contains('active'))
        updateModalOverlay.classList.add('active');
    else
        updateModalOverlay.classList.remove('active');
});

document.querySelector('.close-modalAdd').addEventListener('click', () => {
    addModalOverlay.classList.add('active');
});

document.querySelector('.close-modalUpdate').addEventListener('click', () => {
    updateModalOverlay.classList.add('active');
});