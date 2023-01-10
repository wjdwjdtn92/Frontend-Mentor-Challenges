import Accordions from "../Accordions/Accordions.js";

function Faq({ $target, initialState }) {
  this.state = initialState;
  const $section = document.createElement("section");

  $section.classList = "faq";
  $target.appendChild($section);

  this.render = () => {
    $section.innerHTML = `
    <h2 class="faq__title">FAQ</h2>
    `;

    const accordions = new Accordions({
      $target: $section,
      initialState: this.state,
    });
  };

  this.render();
}

export default Faq;
