import React from 'react';
import Comingsoon from '../assets/images/comingsoon.jpg';
import { Button } from 'reactstrap';

const SantrenKilat = (props) => {
    return(
        <div>
            <section id="santrenKilat">
                <div className="container">
                    <h3 className="text-capitalize text-center my-4">Daftar santren kilat koding</h3>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="card">
                                <img className="card-img-top" src={ Comingsoon } alt="Santren Kilat Koding #1" />
                                <div className="card-body">
                                    <h5 className="card-title">Santren Kilat #1 (Coming Soon)</h5>
                                    <h6 className="card-subtitle py-2 mb-2">4 Hari Intensif Laravel</h6>
                                    <div className="card-desc d-flex justify-content-between align-center">
                                        <a href="/" className="text-secondary">by uinBandung Mengoding</a>
                                        <span className="align-bottom text-danger">Kuota Terbatas</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Button outline color="success" className="d-block my-4 mx-auto">Lihat Seluruh Santren Kilat</Button>{' '}
                </div>
            </section>

            <hr />
        </div>
    )
}

export default SantrenKilat;