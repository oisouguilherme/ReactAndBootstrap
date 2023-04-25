import banner from '../../assets/img/infobanner.jpg'

export function Info(){
  return (
    <div className="container" id="info-container">
      <div className="col-12">
        <h2 className="title primary-color">Detalhes importantes</h2>
        <p className="subtitle secondary-color">
          Saiba mais sobre a experiencia da nossa incrivel equipe
        </p>
      </div>

      <div className="col-12">
        <div className="row">
          <div className="col-12 col-md-5" id='info-banner'>
            <img className="image-fluid" src={banner} alt="" />
          </div>

          <div className="col-12 col-md-7 bg-secondary-color" id="info-content">
            <div className="row">

              <div className="col-12">
                <h2 className="title primary-color">Estes dados fazem a diferença</h2>
                <p className="subtitle secondary-color">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe velit natus libero, beatae laborum consequuntur non officia molestias amet voluptates culpa quo rem quibusdam laudantium modi rerum quas quae minus.
                </p>
              </div>

              <div className="col-12" id="info-numbers">
                <div className="row">
                  <div className="col-4">
                    <h3 className='primary-color'>18</h3>
                    <p className='secondary-color'>Anos na construção civil</p>
                  </div>
                  <div className="col-4">
                    <h3 className='primary-color'>95</h3>
                    <p className='secondary-color'>Projetos exectados</p>
                  </div>
                  <div className="col-4">
                    <h3 className='primary-color'>639</h3>
                    <p className='secondary-color'>Clientes</p>
                  </div>
                </div>
              </div>

              <div className="col-12">
                <a href="#" className="btn btn-dark">Saber mais</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}