import React from 'react';
import Kajiankoding1 from '../assets/images/kajiankoding1.jpg';
import Kajiankoding2 from '../assets/images/kajiankoding2.jpg';
import Kajiankoding3 from '../assets/images/kajiankoding3.jpg';
import { Button } from 'reactstrap';

const KajianKoding = (props) => {
    return(
        <div>
            <section id="kajianKoding">
                <h2 className="text-capitalize text-center my-4 py-2">Daftar kajian koding rutin</h2>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <img className="card-img-top" src={ Kajiankoding3 } alt="Kajian Koding #3" />
                                <div className="card-body">
                                    <h5 className="card-title">Kajian Koding #3</h5>
                                    <h6 className="card-subtitle py-2 mb-2">ReactJS dan Firebase Auth/Hosting</h6>
                                    <div className="card-desc d-flex justify-content-between align-center">
                                        <a href="/" className="text-secondary">by uinBandung Mengoding</a>
                                        <span className="align-bottom text-danger">Kuota Terbatas</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <img className="card-img-top" src={ Kajiankoding2 } alt="Kajian Koding #2" />
                                <div className="card-body">
                                    <h5 className="card-title">Kajian Koding #2</h5>
                                    <h6 className="card-subtitle py-2 mb-2">html, css, bootstrap dasar</h6>
                                    <div className="card-desc d-flex justify-content-between align-center">
                                        <a href="/" className="text-secondary">by uinBandung Mengoding</a>
                                        <span className="align-bottom text-danger">Kuota Terbatas</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card">
                                <img className="card-img-top" src={ Kajiankoding1 } alt="Kajian Koding #1" />
                                <div className="card-body">
                                    <h5 className="card-title">Kajian Koding #1</h5>
                                    <h6 className="card-subtitle py-2 mb-2">Belajar Laravel Dasar</h6>
                                    <div className="card-desc d-flex justify-content-between align-center">
                                        <a href="/" className="text-secondary">by uinBandung Mengoding</a>
                                        <span className="align-bottom text-danger">Kuota Terbatas</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Button outline color="success" className="d-block my-4 mx-auto">Lihat Seluruh Kajian Koding</Button>{' '}
                </div>
            </section>

            <hr />
        </div>
    )
}

export default KajianKoding;