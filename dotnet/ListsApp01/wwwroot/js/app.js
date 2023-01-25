// funcçoes globais 
const getElement = selector => document.querySelector(selector);
const getElements = selector => document.querySelectorAll(selector);

// variaveis
/*const modalMessage = new bootstrap.Modal(document.getElementById('message-modal'));*/
const mainModal = new bootstrap.Modal(getElement("#modal"));
const addCategorie = getElement("#add-categorie");


// funções
addCategorie.addEventListener("click", ev => {
    fetch("add-categorie").then(res => res.text()).then(html => {
        getElement("#modal").innerHTML = html;
        mainModal.show();
    });

})