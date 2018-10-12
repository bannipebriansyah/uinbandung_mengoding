import React from 'react';

const Kontak = (props) => {
    return(
        <div>
            <section id="Kontak" className="py-5 text-center">
                <div className="container">
                    <h3 className="mb-4 pb-1">Kontak</h3>
                    <p className="m-0">
                        <i className="fa fa-phone fa-sm"></i> 081296977703</p>
                    <p className="mb-4">
                        <i className="fa fa-envelope fa-sm"></i> uinbandungmengoding@gmail.com</p>
                    <p className="m-0">
                        <i className="fa fa-map-marker fa-sm"></i> Titik Ruang Space,</p>                        
                    <p className="mb-2">
                        Jalan A.H. Nasution No. 105, Cipadung, Cibiru, 
                        <br /> Kota Bandung, Jawa Barat 40614
                    </p>
                </div>
            </section>
        </div>
    )   
}

export default Kontak;