
const Header = () => {
  return (
    < div className="home">
      <nav className="home__nav">
        <div className="home__nav__left">
          <div className="nav__name">
            <span>
              Zacheriah <br />
              Valis
            </span>
          </div>

          <div className="nav__portfolio hide-mobile">
            <span>
              Software Engineer <br />
              Portfolio / 2023
            </span>
          </div>
        </div>

        <div className="home__nav__right">
          <div className="nav__portfolio hide-desktop">
            Software Engineer <br />
            Portfolio / 2023
          </div>
        </div>

        <div className="nav__availability">
          Available for freelance <br />
          Work from January 2024
        </div>

        <button className="nav__button c-button contact-scroll">
          <span className="c-link">
            <span className="c-link__inner">
              <span> contact </span>
              <span className="c-link__animated"> contact </span>
            </span>
          </span>
        </button>
      </nav>
  </div>
  );
};

export default Header;
