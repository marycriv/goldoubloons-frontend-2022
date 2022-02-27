import React from "react";

import '../styling.css';

export default function ErrorPage(){
    return(
        <>
            <div className="error-page">
                <img src={process.env.PUBLIC_URL + "404.png"} alt="404 Page Not Found"></img>
            </div>
        </>
    )
}