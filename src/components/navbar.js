import React, {useState} from 'react';
import "../styles/navbar.scss";
import {Link} from "react-router-dom";
import CoursesList from "../json/courses";
function Navbar(props) {
    const [state, setState] = useState(true)

    const Count = () => {
        setState(!state)
    }
    console.log(props)
    return (
        <div className="NavigationBar">
            <div className={`${state ? "" : "bg-light"}`}>
                <div className="NavigationBar1 container d-flex align-items-center justify-content-between">
                    <div className="d-flex align-items-center">
                        <Link to="/"><span className="icon icon-logo"></span></Link>
                    </div>

                    <button onClick={Count} type="button" className="btn btn-success courses d-flex align-items-center">
                        Barcha kurslar
                        <div className="tepapast overflow-hidden">
                            <span className={`icon icon-bottom ml-2 ${state ? "" : "d-none"}`}></span>
                            <span className="icon icon-x ml-2"></span>
                        </div>
                    </button>

                    <ul className="nav">
                        <li className="nav-item"><Link to="/biz-haqimizda" className={` nav-link ${props.location === "/biz-haqimizda" ? "active" : ""}`}>Biz haqimizda</Link></li>
                        <li className="nav-item"><Link to="/veb-seminarlar" className={` nav-link ${props.location === "/veb-seminarlar" ? "active" : ""}`}>Veb - seminarlar</Link></li>
                        <li className="nav-item"><Link to="/jurnal" className={` nav-link ${props.location === "/jurnal" ? "active" : ""}`}>Jurnal</Link></li>
                    </ul>

                  <div className="d-flex align-items-center">
                      <Link to="/" className="text-decoration-none text-dark">
                          <div className="d-flex align-items-center kirish">
                              <span className="icon icon-right"></span>
                              <p className="mb-0 ml-1">Kirish</p>
                          </div>
                      </Link>
                      <div className="ml-3 burger" onClick={Count}>
                          <div className="tepapast overflow-hidden">
                              <span className={`icon icon-menu ml-2 ${state ? "" : "d-none"}`}></span>
                              <span className="icon icon-x2 ml-2"></span>
                          </div>
                      </div>
                  </div>

                </div>
            </div>

            <div className="bg-light">
                <div className={`container p-0 ${state % 2 === 0 ? "d-block" : "d-none"}`}>
                    <div className="line"></div>
                    <div className="row pt-5 pb-3">
                        <div className="col-lg-6">
                            <h1>Kurs yo'nalishlari</h1>
                            <ul className="tab-list">
                                <li className="tab-list-item d-block ml-auto mr-auto">
                                    {CoursesList.courses.map((item, key)=>{
                                        return <Link to={"kurslar/" + item.link} className="tab-list-item">{item.name}</Link>
                                    })}
                                </li>

                            </ul>
                        </div>
                        <div className="col-lg-6">
                            <h1>Kurslarga chegirmalar</h1>

                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex align-items-center">
                                        <div>
                                            <p><b>Yozgi chegirmalar 30% gacha</b></p>
                                            <h6>Yangi kasbni yoki o'ziga xos <br/> mahoratni arzon narxda <br/> o'rganing.</h6>
                                        </div>
                                        <div>
                                            <img src="./images/skidka.webp" alt="" className="w-100"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <ul className="nav flex-column">
                            <li className="nav-item"><Link to="/biz-haqimizda" className={` nav-link ${props.location === "/biz-haqimizda" ? "active" : ""}`}>Biz haqimizda</Link></li>
                            <li className="nav-item"><Link to="/veb-seminarlar" className={` nav-link ${props.location === "/veb-seminarlar" ? "active" : ""}`}>Veb - seminarlar</Link></li>
                            <li className="nav-item"><Link to="/jurnal" className={` nav-link ${props.location === "/jurnal" ? "active" : ""}`}>Jurnal</Link></li>
                        </ul>
                    </div>



                </div>
            </div>
        </div>
    );
}

export default Navbar;