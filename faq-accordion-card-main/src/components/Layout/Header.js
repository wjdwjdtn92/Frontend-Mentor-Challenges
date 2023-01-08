function Header({ $target }) {
  const $header = document.createElement("header");

  $header.classList = "header";
  $target.appendChild($header);

  this.render = () => {
    $header.innerHTML = `
      <h1 class="screen-reader-text">FAQ Homepage</h1>
      <picture>
        <source
          media="(max-width: 767px)"
          srcset="./images/illustration-woman-online-mobile.svg"
        />
        <img
          src="./images/illustration-woman-online-desktop.svg"
          alt="illustration woman image"
          class = "header__img"
        />
      </picture>
    `;
  };

  this.render();
}

export default Header;
