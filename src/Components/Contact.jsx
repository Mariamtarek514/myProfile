import React from "react";
import "./Assets/CSS/Contact.css";
import { Link } from "react-router-dom";
import Head from "./Head";
export default function Contact() {
    return (
        <section className="contact py-5" id="contact">
            <div className="container">
                <Head title="let't talk" />
                <div className="row text-center ">
                    <ul className="col-12 d-flex justify-content-center align-items-center ps-0 social ">
                        <li>
                            <Link
                                to="https://www.linkedin.com/in/mariam-tarek-0b813a17a/"
                                target="_blank"
                            >
                                <i className="fa-brands fa-linkedin-in"></i>
                            </Link>
                        </li>
                        <li>
                            <Link to="mailto:mariam.4.tarek@gmail.com">
                                <i className="fa-solid fa-envelope"></i>
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="https://github.com/Mariamtarek514"
                                target="_blank"
                            >
                                <i className="fa-brands fa-github"></i>
                            </Link>
                        </li>
                    </ul>
                    <p className="text-center">Made by Mariam Tarek</p>
                </div>
            </div>
        </section>
    );
}
