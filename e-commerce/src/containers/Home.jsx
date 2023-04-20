function Home() {
  return (
   <div> 
      <header>           
          <div className="container pt-5">
              <h1 className="text-center">Avocado Intimates</h1>
          </div>
      </header>
      <div>
        <div className="container-fluid">
          <div className="container pt-5">
            <div className="row mt-5">
                <div className="col-lg-7 text-center text-lg-left">
                    <div className="mb-4">
                        <h1 className="fw-bold mb-4"> Bienvenido!</h1>
                        <h3 className="mb-4">Somos una tienda online lencería de alta gama</h3>
                    </div>
                </div>
                <div className="col-lg-3 d-flex justify-content-center">
                    <img className="img-fluid mt-5 mb-lg-0" src="img/Heart.svg" alt="fondo"/>
                </div>
          </div>
          </div>   
        </div>
      </div>
    </div>
        
  );
}

export default Home;