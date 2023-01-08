import Footer from "./components/Layout/Footer.js";
import Header from "./components/Layout/Header.js";
import Main from "./components/Layout/Main.js";

export default function App({ $target }) {
  const $wrapper = document.createElement("div");
  $wrapper.classList = "wrapper";
  $target.append($wrapper);

  const header = new Header({
    $target: $wrapper,
  });

  const main = new Main({
    $target: $wrapper,
  });

  const footer = new Footer({
    $target: $wrapper,
  });
}
