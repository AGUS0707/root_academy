import React from 'react';
import "../styles/educationPrograms.scss";
import Fade from 'react-reveal/Fade';
function EducationPrograms(props) {
    return (
        <div className="education-programs">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <Fade bottom duration={1000} >
                            <p>
                                Yangi boshlanuvchilar va amaliyotchilar uchun taniqli bozor mutaxassislarining zamonaviy
                                bilimlari.</p>
                        </Fade>
                        <ul className="education-numbers">
                            <li className="education-numbers-item">
                                <div className="education-number-icon">
                                    <img src="images/document.svg" alt="no images"/>
                                </div>
                                <div className="education-number-right">
                                    <div className="education-numbers-title">
                                       <Fade clear duration={1500}>
                                           100
                                       </Fade>
                                    </div>
                                    <span>
                                        <Fade clear duration={1500}>
                                           Oquv markaz dasturlari
                                       </Fade></span>
                                </div>
                            </li>
                            <li className="education-numbers-item">
                                <div className="education-number-icon">
                                    <img src="images/profile-user.svg" alt="no images"/>
                                </div>
                                <div className="education-number-right">
                                    <div className="education-numbers-title">
                                        <Fade clear duration={1500}>
                                            10
                                        </Fade>
                                    </div>
                                    <span>
                                        <Fade clear duration={1500}>
                                             Mentorlar
                                        </Fade>
                                    </span>
                                </div>
                            </li>
                            <li className="education-numbers-item">
                                <div className="education-number-icon">
                                    <img src="images/user.svg" alt="no images"/>
                                </div>
                                <div className="education-number-right">
                                    <div className="education-numbers-title">
                                        <Fade clear duration={1500}>
                                            200
                                        </Fade>
                                    </div>
                                    <span>
                                        <Fade clear duration={1500}>
                                          Oquvchilar
                                        </Fade>
                                    </span>
                                </div>
                            </li>
                        </ul>
                        <Fade bottom duration={1000}>
                            <p>Biz yangi kasbni o'rganishimiz yoki yangi ko'nikmalarga ega bo'lishimiz mumkin. Bizning
                                dasturlarimiz amaliyotga qaratilgan, biz materialning dolzarbligini kuzatamiz va ishga
                                joylashish va amaliyot o'tashda yordam beramiz.</p>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EducationPrograms;