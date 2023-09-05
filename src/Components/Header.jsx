import React from "react";
import "./Assets/CSS/Header.css";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import avater from "./Assets/images/hero.png";
export default function Header() {
    return (
        <header className="mb-5">
            <div className="container ">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 content order-2 order-md-1 d-flex flex-column justify-content-center justify-content-start align-items-center align-items-md-start  ">
                        <p>Hello,I'm Mariam Tarek</p>
                        <h1>
                            I am a Front-End developer and i am Creating
                            pixel-perfect websites with modern web technologies{" "}
                        </h1>
                        <div className="social d-flex mb-4 mt-2">
                            <Link
                                to="https://www.linkedin.com/in/mariam-tarek-0b813a17a/"
                                target="_blank"
                            >
                                <i className="fa-brands fa-linkedin-in"></i>
                            </Link>
                            <Link
                                to="https://github.com/Mariamtarek514"
                                target="_blank"
                            >
                                <i className="fa-brands fa-github"></i>
                            </Link>
                            <Link to="mailto:mariam.4.tarek@gmail.com">
                                <i className="fa-solid fa-envelope"></i>
                            </Link>
                        </div>
                        <div className="button d-flex">
                            <a href="./assets/Mariam_Tarek_CV.pdf" download>
                                Download CV
                            </a>

                            <HashLink
                                to="#contact"
                                className="button_colored text-center "
                            >
                                let's talk
                            </HashLink>
                        </div>
                    </div>
                    <figure className="col-lg-6 col-md-6 col-12  order-1 order-md-2">
                        <img src={avater} alt="avatar" className="img-fluid" />
                    </figure>
                </div>
            </div>
        </header>
    );
}
