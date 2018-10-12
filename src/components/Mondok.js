import React from 'react';
import Poster from '../assets/images/poster.jpg';

const Mondok = (props) => {
    return(
        <div>
            <section id="Mondok">
                <div className="container">
                    <div className="text-center">
                        <h3>Mondok by uinBandung Mengoding</h3>
                        <p className="mb-5">Sebuah Program Belajar Intensif Programming & Al Qur'an</p>
                        <a href="/">
                            <img className="py-4" src={ Poster } alt="Poster uinBandung Mengoding" />
                        </a>
                        <button type="button" className="btn btn-outline-success d-block my-4 mx-auto">Lihat Seluruh Santren Kilat</button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Mondok;