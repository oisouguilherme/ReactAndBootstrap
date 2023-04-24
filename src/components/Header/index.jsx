import logo from "../../assets/img/imovi-icon.png";

export function Header() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg fixed-top bg-primary-color"
        id="navbar"
      >
        <div className="container py-3">
          <a href="#" className="navbar-brand primary-color">
            <img src={logo} alt="iMovi" />
            <span>iMovi</span>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbar-items"
            aria-controls="#navbar-items"
            aria-expanded="false"
            aria-label="toggle navigation"
          >
            <i className="bi bi-list"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbar-items">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a href="#" className="nav-link active primary-color" aria-current="page">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link primary-color" >
                  Projetos
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link primary-color" >
                  Imoveis
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link primary-color" >
                  Contatos
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
