import React from 'react';
import Gallery from "./gallery";
import Fade from 'react-reveal/Fade';



function RootAcademyMain() {
    return (
        <div className="rootAcademyMain">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="logoImg">
                            <img src="images/root_a.jpg" alt="no image"/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="aboutRootAcademy">
                            <Fade bottom duration={1000}>
                                <h1>Root Academy bu ...</h1>
                            </Fade>
                            <Fade bottom duration={1000}>
                                <p>Lorem Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus, nobis,
                                    suscipit. Amet beatae exercitationem numquam omnis perspiciatis. Aut quis, quos! ipsum
                                    dolor sit amet, consectetur adipisicing elit. Adipisci, labore perferendis! Consequuntur
                                    cum eum impedit iste labore laborum, veritatis! Velit!</p>
                            </Fade>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-6">
                        <div className="rootAcademyNumberLeft">
                            <Fade bottom duration={1000}>
                                <h1>Root academy <br/> raqamlari</h1>
                            </Fade>
                            <Fade bottom duration={1000}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid corporis eaque earum,
                                    iste minima placeat quae sapiente veritatis vero voluptatum!</p>
                            </Fade>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="rootAcademyNumberRight">
                            <ul className="numberCards">
                                <li className="numberCardItem">
                                    <div className="numberIcon">

                                    </div>
                                    <div className="numberText">
                                        <Fade clear duration={1500}>
                                            <h1>100</h1>
                                        </Fade>
                                        <Fade clear duration={1500}>
                                            <span>Oquv markaz dasturlari</span>
                                        </Fade>
                                    </div>
                                </li>
                                <li className="numberCardItem">
                                    <div className="numberIcon">

                                    </div>
                                    <div className="numberText">
                                        <Fade clear duration={1500}>
                                            <h1>10</h1>
                                        </Fade>
                                        <Fade clear duration={1500}>
                                            <span>Oqutuvchilarimiz</span>
                                        </Fade>
                                    </div>
                                </li>
                                <li className="numberCardItem">
                                    <div className="numberIcon">

                                    </div>
                                    <div className="numberText">
                                        <Fade clear duration={1500}>
                                            <h1>200</h1>
                                        </Fade>
                                        <Fade clear duration={1500}>
                                            <span>Oquv markaz dasturlari</span>
                                        </Fade>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="row">

                    <div className="col-6">
                        <div className="galleryImg">
                            <Gallery/>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="galleryText">
                            <Fade bottom duration={1000}>
                                <h1>Bizning galareya</h1>
                            </Fade>
                            <Fade bottom duration={1000}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis deserunt dolore
                                    excepturi, facere inventore itaque libero nemo provident quisquam similique?</p>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RootAcademyMain;