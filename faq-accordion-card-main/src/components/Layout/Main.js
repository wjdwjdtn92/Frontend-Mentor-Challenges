import Faq from "../Faq/Faq.js";

const DUMY_DATA = [
  {
    title: "How many team members can I invite?",
    content:
      "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
  },
  {
    title: "What is the maximum file upload size?",
    content:
      "No more than 2GB. All files in your account must fit your allotted storage space.",
  },
  {
    title: "How do I reset my password?",
    content:
      "Click “Forgot password” from the login page or “Change password” from your profile page. A reset link will be emailed to you.",
  },
  {
    title: "Can I cancel my subscription?",
    content:
      "Yes! Send us a message and we’ll process your request no questions asked.",
  },
  {
    title: "Do you provide additional support?",
    content:
      "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
  },
];

function Main({ $target }) {
  const $main = document.createElement("main");

  $main.classList = "main";
  $target.appendChild($main);

  this.render = () => {
    $main.innerHTML = `
    <picture>
      <source
        media="(max-width: 1024px)"
        srcset="./images/illustration-woman-online-mobile.svg"
      />
      <img
        src="./images/illustration-woman-online-desktop.svg"
        alt="illustration woman image"
        class = "main-header__img"
      />
    </picture>
    <div class="desktop-block"></div>
    `;
    // <div class="main-header__bg" />;
    const accordions = new Faq({
      $target: $main,
      initialState: DUMY_DATA,
    });
  };

  this.render();
}

export default Main;
