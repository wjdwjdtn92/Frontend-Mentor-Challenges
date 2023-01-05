function Footer({ $target, initialState }) {
  this.state = initialState;

  const $footer = document.createElement("footer");
  $target.appendChild($footer);

  this.render = () => {
    $footer.innerHTML = `
        <div class="attribution">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Coded by <a href="#">${this.state}</a>.
        </div>`;
  };

  this.render();
}

export default Footer;
