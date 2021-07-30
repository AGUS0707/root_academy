import React from 'react';
import "../styles/footer.scss"
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-2">
                        <h5><b>Kurslar</b></h5>
                            <p><Link className="link" to="/">Dasturlash</Link></p>
                            <p><Link className="link" to="/">Dizayn</Link></p>
                            <p><Link className="link" to="/">Marketing</Link></p>
                            <p><Link className="link" to="/">Boshqaruv</Link></p>
                            <p><Link className="link" to="/">O'yinlar</Link></p>
                            <p><Link className="link" to="/">Multimedia</Link></p>
                            <p><Link className="link" to="/">Biznes uchun</Link></p>
                    </div>
                    <div className="col-3">
                        <h5>Rootacademy haqida</h5>
                            <p><Link className="link" to="/">Platforma haqida</Link></p>
                            <p><Link className="link" to="/">Karyera markazi</Link></p>
                            <p><Link className="link" to="/">Sharhlar</Link></p>
                            <p><Link className="link" to="/">Kontaktlar</Link></p>
                            <p><Link className="link" to="/">Bo'sh ish o'rinlari</Link></p>
                            <p><Link className="link" to="/">O'qituvchilar maktabi</Link></p>
                    </div>
                    <div className="col-2">
                        <h5>Vebinarlar</h5>
                            <p><Link className="link" to="/">Barcha veb seminarlar</Link></p>
                            <p><Link className="link" to="/">Pleylistlar</Link></p>
                            <p><Link className="link" to="/">Jadval</Link></p>
                    </div>
                    <div className="col-2">
                        <h5>Jurnal</h5>
                            <p><Link className="link" to="/">Sheriklik dasturi</Link></p>
                            <p><Link className="link" to="/">Litsenziya</Link></p>
                            <p><Link className="link" to="/">Korporativ mijozlarga</Link></p>
                            <p><Link className="link" to="/">Ish beruvchilar uchun</Link></p>
                    </div>
                    <div className="col">
                        <h5>Manzil</h5>
                        <p><Link className="link" to="/">Andijon viloyati, Andijon shahri, O'zbekiston ko'chasi, Biznes center to'g'risi</Link></p>

                        <h4>Tarmoqlar</h4>
                        <div className="d-flex">
                            <span className="icon icon-telegram"></span>
                            <span className="icon icon-instagram mx-3"></span>
                            <span className="icon icon-facebook"></span>
                        </div>
                        
                        <h4>Telefon raqam</h4>
                        <a href="tel:+998945094401">+998 (94) 509 44 01</a>
                    </div>
                </div>

                <div className="line"></div>

                <div className="d-flex align-items-center justify-content-between">
                    <h6>© Rootacademy, 2021</h6>
                    <Link className="footlink" to="/"><h6>Shartnoma taklifi</h6></Link>
                    <Link className="footlink" to="/"> <h6>To'lov</h6></Link>
                    <div>
                        <Link className="footlink" to="/"><h6>Platformadan foydalanish shartlari</h6></Link>
                        <Link className="footlink" to="/"><h6>Maxfiylik siyosati</h6></Link>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Footer;