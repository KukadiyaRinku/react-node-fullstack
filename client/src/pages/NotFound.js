import React, { useEffect } from "react";

export default function NotFound() {

    useEffect(() => {
        document.title = "404";
    }, []);

    return (<>
        <h2> 404 Page Not Found</h2>
    </>);
}