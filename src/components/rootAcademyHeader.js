import React from 'react';
import Fade from 'react-reveal/Fade';
function RootAcademyHeader() {
    return (
        <div className="rootAcademyHeader">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <Fade bottom duration={1000}>
                            <h1>BIZ <span>HAQIMIZDA</span></h1>
                        </Fade>
                    </div>
                    <div className="col-6">
                        <div className="programmingImg">
                            <img src="images/desktop.webp" alt="no images"   />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default RootAcademyHeader;