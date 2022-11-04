import fotoTripulante from "../../../assets/image/acercade.png";

export const AcercaDe = () => {
    return (
        <main id="main" className="main">
            <div className="pagetitle">
                <h1>Acerca de ...</h1>
                <nav>
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item">
                            <a href="index.html">Inicio</a>
                        </li>
                        <li className="breadcrumb-item active">Listado de tripulantes</li>
                    </ol>
                </nav>
            </div>

            <div className="mt-4">
                <div className="card-group">
                    <div className="card">
                        <img src={fotoTripulante} className="" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Kelly Johana Herrera Andrade</h5>
                            <p className="card-text">Developer</p>
                            <p className="card-text">
                                <small className="text-muted">...</small>
                            </p>
                        </div>
                    </div>

                    <div className="card">
                        <img src={fotoTripulante} className="" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Javier Ricardo Gordillo Cabrejo </h5>
                            <p className="card-text">Developer</p>
                            <p className="card-text">
                                <small className="text-muted">...</small>
                            </p>
                        </div>
                    </div>

                    <div className="card">
                        <img src={fotoTripulante} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">José Luis Pulgarin </h5>
                            <p className="card-text">Developer</p>
                            <p className="card-text">
                                <small className="text-muted">...</small>
                            </p>
                        </div>
                    </div>

                    <div className="card">
                        <img src={fotoTripulante} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Nicolas Silva Linares </h5>
                            <p className="card-text">Developer</p>
                            <p className="card-text">
                                <small className="text-muted">...</small>
                            </p>
                        </div>
                    </div>

                    <div className="card">
                        <img src={fotoTripulante} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Rafael Laverde Angarita</h5>
                            <p className="card-text">Developer</p>
                            <p className="card-text">
                                <small className="text-muted">...</small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};
