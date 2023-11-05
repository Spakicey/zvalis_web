
const Header = () => {
  return (
    <nav className="home__nav">
      <div className="home__nav__left">
        <div className="nav__name">
          <a
                href="/"
                target="_blank"
                rel="noopener noreferrer"
                >
                  Zacheriah Valis
                </a>
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
        work from January 2024
      </div>
      <button className="nav__button c-button">
        <span className="c-link">
          <span className="c-link__inner">
            <span> Contact </span>
            <span className="c-link__animated"> Contact </span>
          </span>
        </span>
      </button>
    </nav>
  );
};

export default Header;
