import "../App.scss";


const Navigation = () => {
  return (
    <nav className="home__nav">
      <div className="home__nav__left">
        <div className="nav__name" nav-anim>
          <span>
            Zacheriah <br />
            Valis
          </span>
        </div>

        <div className="nav__portfolio hide-mobile" nav-anim>
          <span>
            Software Engineer <br />
            Portfolio / 2023
          </span>
        </div>
      </div>

      <div className="home__nav__right">
        <div className="nav__portfolio hide-desktop" nav-anim>
          Software Engineer <br />
          Portfolio / 2023
        </div>
      </div>

      <div className="nav__availability" nav-anim>
        Available for freelance <br />
        Work from January 2024
      </div>

      <button className="nav__button c-button contact-scroll" nav-anim>
        <span className="c-link">
          <span className="c-link__inner">
            <span> contact </span>
            <span className="c-link__animated"> contact </span>
          </span>
        </span>
      </button>
    </nav>

  );
};

export default Navigation;
