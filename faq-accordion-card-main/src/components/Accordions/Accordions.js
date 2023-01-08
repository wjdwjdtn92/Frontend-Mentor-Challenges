function Accordions({ $target, initialState }) {
  this.state = initialState;
  const $div = document.createElement("div");

  $div.classList = "accordions";
  $target.appendChild($div);

  this.render = () => {
    $div.innerHTML = this.state
      .map((state) => {
        return `
          <details class="accordion-item">
            <summary><div class="accordion-item__title">${state.title}</div></summary>
            <p class="accordion-item__body">${state.content}</p>
          </details>`;
      })
      .join("");
  };

  this.render();
}

export default Accordions;
