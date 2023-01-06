function Footer({ $target }) {
  const $footer = document.createElement("footer");
  $footer.classList = "footer";

  $target.appendChild($footer);

  this.render = () => {
    $footer.innerHTML = `
        <div class="attribution">
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" alt="Frontend Mentor link">
            Frontend Mentor
          </a>
          . Coded by <a href="#">Steve Jung</a>.
        </div>`;
  };

  this.render();
}

export default Footer;
