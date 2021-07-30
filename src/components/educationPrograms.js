import React from 'react';
import "../styles/educationPrograms.scss";

function EducationPrograms(props) {
    return (
        <div className="education-programs">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <p>
                            Yangi boshlanuvchilar va amaliyotchilar uchun taniqli bozor mutaxassislarining zamonaviy
                            bilimlari.</p>
                        <ul className="education-numbers">
                            <li className="education-numbers-item">
                                <div className="education-numbers-title">
                                    554
                                </div>
                                <span>Oquv markaz dasturlari</span>
                            </li>
                            <li className="education-numbers-item">
                                <div className="education-numbers-title">
                                    619
                                </div>
                                <span>Mentorlar</span>
                            </li>
                            <li className="education-numbers-item">
                                <div className="education-numbers-title">
                                    224 830
                                </div>
                                <span>Oquvchilar</span>
                            </li>
                        </ul>
                        <p>Biz yangi kasbni o'rganishimiz yoki yangi ko'nikmalarga ega bo'lishimiz mumkin. Bizning
                            dasturlarimiz amaliyotga qaratilgan, biz materialning dolzarbligini kuzatamiz va ishga
                            joylashish va amaliyot o'tashda yordam beramiz.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default EducationPrograms;