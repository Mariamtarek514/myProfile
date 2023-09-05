import React from "react";
import "./Assets/CSS/Head.css";
export default function Head(props) {
    let value = props.dark ? "dark" : null;
    return (
        <h1
            className={`${value} special_heading mb-5 text-center position-relative`}
        >
            {props.title}
        </h1>
    );
}
