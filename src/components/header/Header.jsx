import "./Header.css";

function Header({ userCounter }) {
  return (
    <header className="header">
      <div className="header__container container">
        <a className="header__link" href="#">
          <h1 className="header__title">Create user with us</h1>
        </a>
        <strong className="header__user-counter">
          You created: <span>{userCounter}</span> user
        </strong>
      </div>
    </header>
  );
}

export default Header;
