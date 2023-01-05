function Accordion({ $target, initialState }) {
  this.state = initialState;
  const $div = document.createElement("div");
  $target.appendChild($div);

  this.render = () => {
    $div.innerHTML = this.state
      .map((state) => {
        return `
          <details>
            <summary>${state.title}</summary>
            <p>${state.content}</p>
          </details>`;
      })
      .join("");
  };

  this.render();
}

export default Accordion;
