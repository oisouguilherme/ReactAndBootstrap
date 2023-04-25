export function Footer() {
  return (
    <footer className="container-fluid bg-dark-color" id="footer">
      <div className="container">
        <div className="row">

          <div className="col-12" id="footer-top">

            <div className="row justify-content-between">

              <div className="col-4">
                <h2>iMovi</h2>
              </div>

              <div className="col-4" id="social-icons">
                <i className="bi bi-facebook"></i>
                <i className="bi bi-instagram"></i>
                <i className="bi bi-youtube"></i>
                <i className="bi bi-twitter"></i>
              </div>
            </div>
          </div>

            <div className="col-12" id="footer-details">
              <div className="row">
                <div className="col-12 col-md-4" id="news-container">
                  <h4>Fique por dentro das novidades</h4>
                  <p className="secondary-color">Inscreva-se para saber em primeira mão</p>
                  <form>
                    <div className="mb-3">
                      <input type="text" className="form-control" placeholder="Digite o seu e-email" />
                    </div>
                    <button type="submit" className="btn btn-dark">
                      Inscreva-se
                    </button>
                  </form>
                </div>

                <div className="col-12 col-md-4" id="contact-container">
                  <h4>Formas de contato</h4>
                  <p className="secondary-color">(38) 9999-9999</p>
                  <p className="secondary-color">contato@gmail.com</p>
                </div>

                <div className="col-12 col-md-4" id="links-container">
                  <div className="row">
                    <h4>Você pode estar procurando por:</h4>
                    <div className="col-6">
                      <ul className="list-unstyled">
                        <li><a href="#" className="secondary-color">Projetos</a></li>
                        <li><a href="#" className="secondary-color">Imóveis</a></li>
                        <li><a href="#" className="secondary-color">Vendas</a></li>
                      </ul>
                    </div>
                    <div className="col-6">
                      <ul className="list-unstyled">
                        <li><a href="#" className="secondary-color">Contratar</a></li>
                        <li><a href="#" className="secondary-color">Tarbalhe conosco</a></li>
                        <li><a href="#" className="secondary-color">Contato</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
             
            <div className="col-12" id="footer-bottom">
              <div className="row justify-content-between">
                <div className="col-12 col-md-3">
                  <p className="secondary-color">iMovi &copy; 2023</p>
                </div>
                <div className="col-12 col-md-3">
                  <p className="secondary-color">Realizamos o seu Projeto <i className="bi bi-heart"></i></p>
                </div>
              </div>
            </div>
        </div>
      </div>
    </footer>
  );
}
