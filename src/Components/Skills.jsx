import Head from "./Head";
import "./Assets/CSS/Skills.css";
import { useEffect, useState } from "react";
export default function Skills() {
    const [isActive, setIsActive] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            let skills = document.querySelector(".skills");
            let top = window.scrollY;
            let offset = skills.offsetTop;
            let windowHeight = window.innerHeight;

            if (top > offset - windowHeight) {
                setIsActive(true);
            }
        });
    }, []);

    return (
        <section className="py-5 skills" id="skills">
            <Head title="Skills" dark={true} />
            <div className="container mt-5">
                <div className="row ">
                    <div className="skill ">
                        <h5>HTML</h5>
                        <svg
                            height="100"
                            width="100"
                            className="position-absolute top-0 start-0"
                        >
                            <defs>
                                <linearGradient id="linear">
                                    <stop offset="0%" stopColor="#e6c3d8" />
                                    <stop offset="100%" stopColor="#bac4e3" />
                                </linearGradient>
                            </defs>
                            <circle
                                className={isActive ? "active" : null}
                                cx="50"
                                cy="50"
                                r="45"
                            />
                        </svg>
                    </div>
                    <div className="skill ">
                        <h5>CSS</h5>
                        <svg
                            height="100"
                            width="100"
                            className="position-absolute top-0 start-0"
                        >
                            <defs>
                                <linearGradient id="linear">
                                    <stop offset="0%" stopColor="#e6c3d8" />
                                    <stop offset="100%" stopColor="#bac4e3" />
                                </linearGradient>
                            </defs>
                            <circle
                                className={isActive ? "active" : null}
                                cx="50"
                                cy="50"
                                r="45"
                            />
                        </svg>
                    </div>
                    <div className="skill ">
                        <h5>JS</h5>
                        <svg
                            height="100"
                            width="100"
                            className="position-absolute top-0 start-0"
                        >
                            <defs>
                                <linearGradient id="linear">
                                    <stop offset="0%" stopColor="#e6c3d8" />
                                    <stop offset="100%" stopColor="#bac4e3" />
                                </linearGradient>
                            </defs>
                            <circle
                                className={isActive ? "active" : null}
                                cx="50"
                                cy="50"
                                r="45"
                            />
                        </svg>
                    </div>
                    <div className="skill ">
                        <h5>React</h5>
                        <svg
                            height="100"
                            width="100"
                            className="position-absolute top-0 start-0"
                        >
                            <defs>
                                <linearGradient id="linear">
                                    <stop offset="0%" stopColor="#e6c3d8" />
                                    <stop offset="100%" stopColor="#bac4e3" />
                                </linearGradient>
                            </defs>
                            <circle
                                className={isActive ? "active" : null}
                                cx="50"
                                cy="50"
                                r="45"
                            />
                        </svg>
                    </div>
                    <div className="skill ">
                        <h5>Bootstrap</h5>
                        <svg
                            height="100"
                            width="100"
                            className="position-absolute top-0 start-0"
                        >
                            <defs>
                                <linearGradient id="linear">
                                    <stop offset="0%" stopColor="#e6c3d8" />
                                    <stop offset="100%" stopColor="#bac4e3" />
                                </linearGradient>
                            </defs>
                            <circle
                                className={isActive ? "active" : null}
                                cx="50"
                                cy="50"
                                r="45"
                            />
                        </svg>
                    </div>
                    <div className="skill ">
                        <h5>SCSS</h5>
                        <svg
                            height="100"
                            width="100"
                            className="position-absolute top-0 start-0"
                        >
                            <defs>
                                <linearGradient id="linear">
                                    <stop offset="0%" stopColor="#e6c3d8" />
                                    <stop offset="100%" stopColor="#bac4e3" />
                                </linearGradient>
                            </defs>
                            <circle
                                className={isActive ? "active" : null}
                                cx="50"
                                cy="50"
                                r="45"
                            />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}
