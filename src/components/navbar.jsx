import React from "react";
import image2 from "../images/image2.jpg"
const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg">
                <div class="container">
                    <a class="navbar-brand" href="#"> <img src={image2} width={"50px"} /></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Work</a>
                            </li>
                            <li class="nav-item ms-2">
                                <a class="nav-link" href="#">Service</a>
                            </li>
                            <li class="nav-item ms-2">
                                <a class="nav-link" href="#">About</a>
                            </li>
                        </ul>
                        <form class="d-flex">
                            <button class="btn" type="submit">blog</button>
                            <button style={{ padding: "5px 30px", borderRadius: "50px", fontWeight: "500", fontSize:"15px" }} class="btn btn-success text-white" type="submit">Planner</button>
                        </form>
                    </div>
                </div>
            </nav>


        </>
    );
};
export default Navbar;