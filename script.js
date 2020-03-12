/*
const openModalButtons = document.querySelectorAll('[data-modal-target]');
const closeModalButtons = document.querySelectorAll('[data-close-button]');
const overlay = document.getElementById('overlay');


openModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = document.querySelector(button.dataset.modalTarget);
        openModal(modal);
    });
});


overlay.addEventListener('click', () => {
    const modals = document.querySelectorAll('.modal.active');
    modal.forEach(modal => {
        closeModal(modal)
    });
});

closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
        const modal = button.closest('.modal');
        closeModal(modal);
    });
})

function openModal(modal) {
    if (modal == null) return
    modal.classList.add('active');
    overlay.classList.add('active');
};

function closeModal(modal) {
    if (modal == null) return
    modal.classList.remove('active');
    overlay.classList.remove('active');
};
*/

const openModalButtons = document.querySelector('.modal-btn');
const closeModalButtons = document.querySelector('.close-button');
const overlay = document.querySelector('#overlay');

openModalButtons.addEventListener('click', function () {
    openModalButtons.classList.add('.active');
});

closeModalButtons.addEventListener('click', function () {
    closeModalButtons.classList.remove('.active');
});