import React from "react";
import { Link } from "react-router-dom";
const Project = ({ project }) => {
    return (
        <div className=" col-12 box jusify-content-between px-0 d-flex flex-column flex-md-row rounded-4 mb-5">
            <div className="portfolio_content col-lg-7 col-md-6 col-12 p-md-5 p-3 order-2 order-md-1">
                <h4 className="mb-3">{project.name}</h4>
                <p className="mb-4">{project.description}</p>
                <Link target="_blank" to={project.link}>
                    Demo
                </Link>
            </div>
            <figure
                className={`box-${project.id} mb-0 col-lg-5  col-md-6 col-12 order-1 order-md-2`}
            ></figure>
        </div>
    );
};

export default Project;
