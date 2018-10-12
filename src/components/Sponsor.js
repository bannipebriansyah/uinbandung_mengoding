import React from 'react';
import Cbn from '../assets/images/cbn.jpg';
import Cisco from '../assets/images/cisco-networking-academy.jpg';
import Mikrotik from '../assets/images/mikrotik.jpg';
import Unisel from '../assets/images/university-selangor-malaysia.jpg';
import Gematekno from '../assets/images/gematekno.jpg';
import Energy from '../assets/images/international-center-for-vital-energy.jpg';
import Iium from '../assets/images/international-islamic-university-of-malaysia.jpg';
import JapanF from '../assets/images/japan-foundation.jpg';
import Oracle from '../assets/images/oracle-academy.jpg';
import Iran from '../assets/images/iran-corner.jpg';
import Usim from '../assets/images/universiti-sains-islam-malaysia.jpg';

const Sponsor = (props) => {
    return(
        <div>
            <section id="Sponsor" class="pb-5 border bg-white">
                <div class="container">
                    <div class="text-center">
                        <h3 class="text-capitalize my-4 pb-2">Sponsor & partner</h3>
                    </div>
                    <div class="col-12">
                        <a href="https://cbn.id/">
                            <img class="d-block mx-auto" src={ Cbn } alt="Cbn Fiber"  style={{ height: 183 }}/>
                        </a>
                    </div>

                    <div class="row align-items-center text-center my-4">
                        <div class="col-2">
                            <a href="https://www.netacad.com/">
                                <img class="img-responsive" src={ Cisco } alt="Cisco Networking Academy" style={{ height: 80 }} />
                            </a>
                        </div>
                        <div class="col-2">
                            <a href="https://mikrotik.com/">
                                <img class="img-responsive" src={ Mikrotik } alt="Mikrotik Rauters" style={{ height: 80 }} />
                            </a>
                        </div>
                        <div class="col-2">
                            <a href="https://www.unisel.edu.my/main/">
                                <img class="img-responsive" src={ Unisel } alt="University Unisel Indonesia" style={{ height: 80 }} />
                            </a>
                        </div>
                        <div class="col-2">
                            <a href="https://www.gamatechno.com/">
                                <img class="img-responsive" src={ Gematekno } alt="PT Gematekno Indonesia" style={{ height: 80 }} />
                            </a>
                        </div>
                        <div class="col-2">
                            <a href="http://www.icve.net/inglishsite/Founder_ICVE.htm">
                                <img class="img-responsive" src={ Energy } alt="Vital Energy" style={{ height: 80 }} />
                            </a>
                        </div>
                        <div class="col-2">
                            <a href="http://www.iium.edu.my/">
                                <img class="img-responsive" src={ Iium } alt="International Islamic University Malaysia" style={{ height: 80 }} />
                            </a>
                        </div>
                    </div>
                    <div class="row align-items-center text-center mb-5">
                        <div class="col-2">
                            <a href="https://www.jpf.go.jp/e/">
                                <img class="img-responsive" src={ JapanF } alt="Japan Faoundation" style={{ height: 80 }} />
                            </a>
                        </div>
                        <div class="col-4">
                            <a href="https://academy.oracle.com/en/oa-web-overview.html">
                                <img class="img-responsive" src={ Oracle } alt="Oracle Academy" style={{ height: 130 }} />
                            </a>
                        </div>
                        <div class="col-2">
                            <a href="https://www.panjimas.com/tag/iran-corner/">
                                <img class="img-responsive" src={ Iran } alt="Iran Corner" style={{ height: 80 }} />
                            </a>
                        </div>
                        <div class="col-4">
                            <a href="/">
                                <img class="img-responsive" src={ Usim } alt="University Sains Islam Malaysia" style={{ height: 50 }} />
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Sponsor;