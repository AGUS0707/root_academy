import React from 'react';
import {Link} from 'react-router-dom';
import "../styles/main.scss";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
const items = [
    <div className="item" data-value="1"><img src="images/img.png" alt="no images"/></div>,
    <div className="item" data-value="2"><img src="images/img.png" alt="no images"/></div>,
    <div className="item" data-value="3"><img src="images/img.png" alt="no images"/></div>,
    <div className="item" data-value="4"><img src="images/img.png" alt="no images"/></div>,
    <div className="item" data-value="5"><img src="images/img.png" alt="no images"/></div>,
];

const Main=()=> {
    return (
        <div className="main">
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h1>Talim platformasi</h1>
                        <p>O'qish yo'nalishlari:</p>
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
                    <div className="col-md-4">
                        <AliceCarousel
                            autoPlay
                            animationDuration={2000}
                            disableButtonsControls
                            infinite
                            items={items}
                            mouseTracking
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Main;