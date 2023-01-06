function IllustrationImg({ $target }) {
  const $picture = document.createElement("picture");
  $picture.classList = "main-image";
  $target.appendChild($picture);

  this.render = () => {
    $picture.innerHTML = `
      <source
        media="(max-width: 767px)"
        srcset="./images/illustration-woman-online-mobile.svg"
      />
      <img
        src="./images/illustration-woman-online-desktop.svg"
        alt="illustration woman image"
      />
    `;
  };

  this.render();
}

export default IllustrationImg;
