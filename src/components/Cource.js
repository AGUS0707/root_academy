import React, {useEffect} from 'react';
import "../styles/cource.scss"
import CoursesList from "../json/courses";
import {Link} from "react-router-dom";
import Footer from "./Footer";


const Cource = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    return (
        <>
            <div className="course">
                <div id="nav" className="container px-5 d-flex align-items-center justify-content-between">
                    <Link to="/"><span className="icon icon-logo"></span></Link>
                    <p>Ta'lim platformasi</p>
                </div>
                <div className="container main py-5">
                    {
                        CoursesList.courses.map((item) => {

                            return props.location.pathname === "/kurslar/" + item.link ?
                                <div className="card" style={{backgroundColor: item.color}}>
                                    {/*<div className="card-body">*/}
                                        <div className="row">
                                            <div className="col-md-6">
                                                {/*<div className="card" style={{backgroundColor: item.color}}>*/}
                                                    <h1 className="text-light"><b className="text-dark"
                                                                                  style={{fontSize: "70px"}}>{item.name}</b> dasturlash
                                                        kursi</h1>

                                                    <p className="text-light">Murabbiyning shaxsiy yordami bilan
                                                        dasturlarni yozish va veb -ilovalarni ishlab
                                                        chiqish. 12 oy ichida, hatto dasturlashni boshlagan bo'lsangiz
                                                        ham, siz izlanuvchi
                                                        ishlab chiqaruvchiga aylanasiz. Dasturlash tajribasi talab
                                                        qilinmaydi.</p>

                                                    <button type="button" className='btn btn-primary w-50'>Kursga
                                                        yoziling
                                                    </button>
                                                {/*</div>*/}
                                            </div>
                                            <div className="col-md-6">
                                                {/*<div className="card" style={{backgroundColor: item.color}}>*/}
                                                    <img src={"/" + item.img} className="w-100" alt=""/>
                                                <div className="d-flex justify-content-center">
                                                    <button type="button" className='btn btn-primary w-50 btn2'>Kursga
                                                        yoziling
                                                    </button>
                                                </div>
                                                {/*</div>*/}
                                            </div>
                                        </div>
                                    {/*</div>*/}
                                </div> : ""
                        })
                    }
                </div>

                <div className="container main_2">
                    <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="card">
                                <div className="card-body">
                                    <img src="/images/clock.png" alt="" width="80" height="80"/>
                                    <h3>Davomiyligi</h3>
                                    <p>5 oy</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="card">
                                <div className="card-body">
                                    <img src="/images/office.png" alt="" width="80" height="80"/>
                                    <h3>Offline/Online</h3>
                                    <p>Sizga qulay vaqtda</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="card">
                                <div className="card-body">
                                    <img src="/images/lightning.png" alt="" width="80" height="80"/>
                                    <h3>Intensive</h3>
                                    <p>Amaliy mashg'ulotlar</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 col-lg-3">
                            <div className="card">
                                <div className="card-body">
                                    <img src="/images/infinite.png" alt="" width="80" height="80"/>
                                    <h3>Bir umr</h3>
                                    <p>Kursdan foydalanish imkoni</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="main3">
                        <h1>KURSIMIZ
                            KIMLARGA TO’G’RI KELADI</h1>

                        <div className="row">

                            <div className="col-sm-12 col-md-6">
                                <div className="card h-100">
                                    <div className="card-body d-flex">
                                        <img src="/images/baby.svg" alt=""/>
                                        <div className="ml-5">
                                            <h2>0 dan boshlamoqchi bo’lganlarga</h2>

                                            <p>Dasturlash sohasi bo’yicha hech qanday bilimga ega bo’lmagan har qanday
                                                inson
                                                dasturlash saboqlarini o’rganishi mumkin</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6">
                                <div className="card h-100">
                                    <div className="card-body d-flex">
                                        <img src="/images/boy.svg" alt=""/>
                                        <div className="ml-5">
                                            <h2>Boshlang’ich bilimga
                                                ega bo’lganlarga</h2>

                                            <p>Bu kurs bo’yicha boshlang’ich bilimga ega bo’lgan bo’lajak dasturchilar
                                                o’z
                                                bilimlarini mustahkamlash orqali yuqori bosqichga olib chiqish
                                                imkoniyatiga
                                                egadirlar</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="main4">

                            <h1>NIMALARNI
                                O’RGANASIZ</h1>


                        {
                            CoursesList.courses.map((item) =>{
                                return props.location.pathname === "/kurslar/" + item.link ?
                                    <div className="row">
                                        {
                                            item.content.map((item1, index1) => {

                                               return <div className="col-md-6 col-xl-4">
                                                <div className="card h-100">
                                                       <div className="card-body">
                                                           <img src="/images/done.png" alt=""/>
                                                           <h3>{item1.title}</h3>
                                                           <p>{item1.main}</p>
                                                       </div>
                                                   </div>
                                                </div>
                                            })
                                        }
                                    </div> : ""

                            })
                        }

                    </div>

                    <div className="main5">
                        <h1 className="text-center">Ish reja</h1>
                        <div className="row bg-white d-flex justify-content-center">
                            <div className="col-xl-8">
                                <table className="table table-hover table-striped">
                                    <thead>
                                    <tr>
                                        <th>№</th>
                                        <th>Mavzular</th>
                                    </tr>
                                    </thead>
                                    {
                                        CoursesList.courses.map((item)=> {
                                            return props.location.pathname === "/kurslar/" + item.link ?
                                                <tbody>
                                                {
                                                    item.reja.map((item1, index1) =>{
                                                        return <tr>
                                                            <td>{index1+1}</td>
                                                            <td>{item1}</td>
                                                        </tr>
                                                    })
                                                }
                                                </tbody> : ""
                                        })
                                    }
                                    <tbody>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="main6">
                        <div className="row">
                            <div className="col-12">
                                <h1>Mentorlarimiz</h1>
                            </div>
                            <div className="col-md-4 col-lg-3">
                                <img src="/images/iam.jpg" width="100" height="100" alt=""/>
                                <h3>Asadbek Xudayberdiyev</h3>
                                <p>Frontend developer</p>
                                <div className="dFlex">
                                    <div className="d-flex tarmoq">
                                        <span className="icon icon-telegram"></span>
                                        <span className="icon icon-instagram mx-3"></span>
                                        <span className="icon icon-facebook"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-3">
                                <img src="/images/iam.jpg" width="100" height="100" alt=""/>
                                <h3>Asadbek Xudayberdiyev</h3>
                                <p>Frontend developer</p>
                                <div className="dFlex">
                                    <div className="d-flex tarmoq">
                                        <span className="icon icon-telegram"></span>
                                        <span className="icon icon-instagram mx-3"></span>
                                        <span className="icon icon-facebook"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-3">
                                <img src="/images/iam.jpg" width="100" height="100" alt=""/>
                                <h3>Asadbek Xudayberdiyev</h3>
                                <p>Frontend developer</p>
                                <div className="dFlex">
                                    <div className="d-flex tarmoq">
                                        <span className="icon icon-telegram"></span>
                                        <span className="icon icon-instagram mx-3"></span>
                                        <span className="icon icon-facebook"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 col-lg-3">
                                <img src="/images/iam.jpg" width="100" height="100" alt=""/>
                                <h3>Asadbek Xudayberdiyev</h3>
                                <p>Frontend developer</p>
                                <div className="dFlex">
                                    <div className="d-flex tarmoq">
                                        <span className="icon icon-telegram"></span>
                                        <span className="icon icon-instagram mx-3"></span>
                                        <span className="icon icon-facebook"></span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <Footer/>
        </>
    );
};

export default Cource;