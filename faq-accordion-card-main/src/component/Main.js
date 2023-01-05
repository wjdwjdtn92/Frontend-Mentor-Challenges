import Accordion from "./Accordion.js";
import IllustrationImg from "./IllustrationImg.js";

function Main({ $target, initialState }) {
  this.state = initialState;

  const $main = document.createElement("main");
  $target.appendChild($main);

  this.render = () => {
    $main.innerHTML = `<h2>${this.state.title}</h2>`;

    const illustrationImg = new IllustrationImg({
      $target: $main,
    });

    const accordion = new Accordion({
      $target: $main,
      initialState: this.state.data,
    });
  };

  this.render();
}

export default Main;
