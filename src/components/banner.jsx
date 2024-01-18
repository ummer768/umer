import React from "react";
import image from "../images/image.jpg"

const Banner = () => {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-5">
                        <h1>
                            Articles for Front-end devs
                        </h1>
                        <div>
                            <h3>
                                Articles on web performance, responsive web design and more
                            </h3>
                        </div>
                    </div>
                    <div className="col-7">
                        <img src={image} />
                    </div>
                </div>
            </div>
        </>
    );
};
export default Banner;