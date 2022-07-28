const persons = document.getElementById("persons");
const starships = document.getElementById("starships");
const planets = document.getElementById("planets");

fillCounters();

function fillCounters() {
  Promise.all([getData("people/"), getData("starships/"), getData("planets/")])
    .then((data) => {
      persons.style.fontSize = "5rem";
      starships.style.fontSize = "5rem";
      planets.style.fontSize = "5rem";

      persons.innerHTML = data[0].count;
      starships.innerHTML = data[1].count;
      planets.innerHTML = data[2].count;
    })
    .catch((err) => {
      console.log("Erro: ", err);
    });
}

function getData(param) {
  return fetch(`https://swapi.dev/api/${param}`).then((res) => res.json());
}

function loadPhrase() {
  const phrase = document.getElementById("phrase");
  const btnphrases = document.getElementById("btn-phrases");
  return fetch(
    "https://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote"
  )
    .then((data) => data.json())
    .then((json) => {
      console.log(json);
      btnphrases.innerHTML = "Ver mais uma frase!";
      phrase.innerHTML = "";
    })
    .catch((err) => console.log("erro: ", err));
}
