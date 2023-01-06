import Accordions from "./Accordions.js";
import IllustrationImg from "./IllustrationImg.js";

function Main({ $target, initialState }) {
  this.state = initialState;

  const $main = document.createElement("main");
  $main.classList = "main";

  const $article = document.createElement("article");
  $article.classList = "faq";

  $main.appendChild($article);
  $target.appendChild($main);

  this.render = () => {
    $article.innerHTML = `<h2>${this.state.title}</h2>`;

    const illustrationImg = new IllustrationImg({
      $target: $article,
    });

    const accordions = new Accordions({
      $target: $article,
      initialState: this.state.data,
    });
  };

  this.render();
}

export default Main;
