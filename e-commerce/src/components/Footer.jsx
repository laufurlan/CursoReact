function Footer() { 
  return (
<footer id="footer">    
        <section className="container-fluid bg-danger">
            <div className="row">
                <div className="col-lg-4 text-center text-lg-center mt-lg-0">
                    <img className="img-fluid mb-3 mt-5" src="../img/Logo.svg" alt=""/>
                </div>
                <div className="col-lg-4 text-center text-lg-center mt-lg-0">
                    <h4 className="fw-bold mb-3 mt-5">Contacto</h4>
                    <h5 className="mt-2">Correo: avocadointimates@gmail.com</h5>
                    <h5 className="mt-2">Telefono: +52 1 55 55 55 55</h5>
                </div>
                <div className="row">
                    <div className="col-12">
                        <hr className="border-top border-light"/>
                    </div>    
                    <div className="col-12 text-center text-lg-left mb-1">
                        <small className="text-white">Maria Laura Furlan © 2023 - Todos los derechos reservados</small>
                    </div>
                </div>
            </div>
        </section>
</footer>
  );
}

export default Footer;