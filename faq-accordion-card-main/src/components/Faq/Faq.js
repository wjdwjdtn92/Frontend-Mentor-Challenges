import Accordions from "../Accordions/Accordions.js";

function Faq({ $target, initialState }) {
  this.state = initialState;
  const $article = document.createElement("article");

  $article.classList = "faq";
  $target.appendChild($article);

  this.render = () => {
    $article.innerHTML = `<h2 class="faq__title">FAQ</h2>`;

    const accordions = new Accordions({
      $target: $article,
      initialState: this.state,
    });
  };

  this.render();
}

export default Faq;
