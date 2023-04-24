import project1 from '../../assets/img/project-1.jpg'
import project2 from '../../assets/img/project-2.jpg'
import project3 from '../../assets/img/project-3.jpg'
import project4 from '../../assets/img/project-4.jpg'
import project5 from '../../assets/img/project-5.jpg'
import project6 from '../../assets/img/project-6.jpg'

export function Destaques(){
  return(
    <div className="container" id="featured-container">
      <div className="col-12">
        <h2 className="title primary-color">Trabalhos em Destaque</h2>
        <p className="subtitle secondary-color">Conheça nossos projetos mais desafiadores</p>
      </div>
      <div className="col-12" id="featured-images">
        <div className="row g-4">
          <div className="col-12 col-md-4">
            <img className='img-fluid' src={project1} alt="" />
            <div className="banner-content">
              <p className="secondary-color">
                Categoria
              </p>
              <h3>Nome do Projeto</h3>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <img className='img-fluid' src={project2} alt="" />
            <div className="banner-content">
              <p className="secondary-color">
                Categoria
              </p>
              <h3>Nome do Projeto</h3>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <img className='img-fluid' src={project3} alt="" />
            <div className="banner-content">
              <p className="secondary-color">
                Categoria
              </p>
              <h3>Nome do Projeto</h3>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <img className='img-fluid' src={project4} alt="" />
            <div className="banner-content">
              <p className="secondary-color">
                Categoria
              </p>
              <h3>Nome do Projeto</h3>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <img className='img-fluid' src={project5} alt="" />
            <div className="banner-content">
              <p className="secondary-color">
                Categoria
              </p>
              <h3>Nome do Projeto</h3>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <img className='img-fluid' src={project6} alt="" />
            <div className="banner-content">
              <p className="secondary-color">
                Categoria
              </p>
              <h3>Nome do Projeto</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}