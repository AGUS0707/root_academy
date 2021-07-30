import React, {useState} from 'react';
import "../styles/navbar.scss";
import {Link} from "react-router-dom";
function Navbar() {
    const [state, setState] = useState(1)

    const Count = () => {
        setState(state + 1)
    }
    return (
        <div className="NavigationBar">
            <div className={`${state % 2 === 0 ? "bg-light" : ""}`}>
                <div className="NavigationBar1 container d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                        <Link to="/"><span className="icon icon-logo"></span></Link>
                    </div>

                    <button onClick={Count} type="button" className="btn btn-success courses d-flex align-items-center">
                        Barcha kurslar
                        <div className="tepapast overflow-hidden">
                            <span className={`icon icon-bottom ml-2 ${state % 2 === 0 ? "d-none" : ""}`}></span>
                            <span className="icon icon-x ml-2"></span>
                        </div>
                    </button>

                    <ul className="nav">
                        <li className="nav-item"><Link to="/" className="nav-link">Rootacademy haqida</Link></li>
                        <li className="nav-item"><Link to="/" className="nav-link">Veb -seminarlar</Link></li>
                        <li className="nav-item"><Link to="/" className="nav-link">Jurnal</Link></li>
                    </ul>

                   <Link to="/" className="text-decoration-none text-dark">
                       <div className="d-flex align-items-center kirish">
                           <span className="icon icon-right"></span>
                           <p className="mb-0 ml-1">Kirish</p>
                       </div>
                   </Link>

                </div>
            </div>

            <div className="bg-light">
                <div className={`container p-0 ${state % 2 === 0 ? "d-block" : "d-none"}`}>
                    <div className="line"></div>
                    <div className="row pt-5 pb-3">
                        <div className="col-6">
                            <h1>Kurs yo'nalishlari</h1>
                            <ul className="tab-list">
                                <li className="tab-list-item">
                                    <Link to="/" className="tab-list-item">Front End</Link>
                                </li>
                                <li className="tab-list-item">
                                    <Link to="/" className="tab-list-item"> Java</Link>
                                </li>
                                <li className="tab-list-item">
                                    <Link to="/" className="tab-list-item">Front End</Link>
                                </li>
                                <li className="tab-list-item">
                                    <Link to="/" className="tab-list-item">Pyton</Link>
                                </li>
                                <li className="tab-list-item">
                                    <Link to="/" className="tab-list-item">Front End</Link>
                                </li>
                                <li className="tab-list-item">
                                    <Link to="/" className="tab-list-item"> Php</Link>
                                </li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <h1>Kurslarga chegirmalar</h1>

                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <p><b>Yozgi chegirmalar 50% gacha</b></p>
                                            <h6>Yangi kasbni yoki o'ziga xos <br/> mahoratni arzon narxda <br/> o'rganing.</h6>
                                        </div>
                                        <div>
                                            <img src="./images/skidka.webp" alt="" className="w-100"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    );
}

export default Navbar;