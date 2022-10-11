import api from "./api.js";
const { API_KEY, BASE_URL, IMG_URL, language } = api;

function getUrl() {
  axios
    .get(BASE_URL + (Math.random() * 1000 - 1) + API_KEY, IMG_URL, language)
    .then((result) => {
      const data = result.data; // constante que vai salvar o conteúdo, os dados da API
      const title = document.querySelector("#dataMovie"); //div que vai ser usada para exibir o filme
      const image = document.querySelector("#imgMovie");
      const subtitle = document.querySelector("#subtitleMovie");

      title.textContent = data.title;
      subtitle.textContent = data.overview;
      image.setAttribute(
        "src",
        "https://image.tmdb.org/t/p/w500" + data.poster_path
      );
    })
    .catch((err) => {
      throw new Error(err);
    });
}

function click() {
  const button = document.querySelector(".btnMovie");

  button.addEventListener("click", () => {
    getUrl();
    console.log("parei aqui");
  });
}

click();
