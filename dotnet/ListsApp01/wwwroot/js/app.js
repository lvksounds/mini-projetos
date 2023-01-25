// funcçoes globais 
const getElement = selector => document.querySelector(selector);
const getElements = selector => document.querySelectorAll(selector);

// variaveis
const modalMessage = new bootstrap.Modal(document.getElementById('message-modal'));
const mainModal = new bootstrap.Modal(getElement("#modal"));
const addBtn = getElement("#add-record");


// funções
addBtn.addEventListener("click", ev => {
    mainModal.show();
})