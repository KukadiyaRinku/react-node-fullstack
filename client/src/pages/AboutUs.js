import React, { useEffect } from "react";

export default function AboutUs() {

    useEffect(() => {
        document.title = "About Us";
    }, []);

    //className="formContainer"
    return (<>
        <div >
            <h3>About Us</h3>
        </div>
    </>);
}