function Header({ $target }) {
  const $header = document.createElement("header");

  $header.classList = "header";
  $target.appendChild($header);

  this.render = () => {
    $header.innerHTML = `
      <h1 class="screen-reader-text">FAQ Homepage</h1>
    `;
  };

  this.render();
}

export default Header;
