import banner1 from "../../assets/img/banner-1.jpg";
import banner2 from "../../assets/img/banner-2.jpg";
import banner3 from "../../assets/img/banner-3.jpg";
import { MineBanner } from "../MineBanner";

export function Carousel() {
  return (
    <div className="container" id="slider-container">
      <div className="carousel slide" id="slider" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button
            type="button"
            className="active"
            data-bs-target="#slider"
            data-bs-slide-to="0"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#slider"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#slider"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={banner1} alt="" />
            <div className="carousel-caption">
              <h5>Casas planejadas</h5>
              <a href="#" className="btn btn-dark">
                Ver Projetos
              </a>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={banner2} alt="" />
            <div className="carousel-caption">
              <h5>Projetos completos</h5>
              <a href="#" className="btn btn-dark">
                Ver Projetos
              </a>
            </div>
          </div>

          <div className="carousel-item">
            <img className="d-block w-100" src={banner3} alt="" />
            <div className="carousel-caption">
              <h5>Projetos Inovadores</h5>
              <a href="#" className="btn btn-dark">
                Ver Projetos
              </a>
            </div>
          </div>
          <button 
          data-bs-target="#slider"
          data-bs-slide="prev"
          className="carousel-control-prev" 
          type="button">
            <i className="bi bi-chevron-compact-left"></i>
            <span className="visually-hidden">Previous</span>
          </button>
          <button 
          data-bs-target="#slider"
          data-bs-slide="next"
          className="carousel-control-next" 
          type="button">
            <i className="bi bi-chevron-compact-right"></i>
            <span className="visually-hidden">next</span>
          </button>
        </div>
      </div>
      <MineBanner/>
    </div>
  );
}
