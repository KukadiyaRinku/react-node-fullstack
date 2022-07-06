import React, { useEffect } from 'react';

export default function Home() {

    useEffect(() => {
        document.title = "Home";
    }, []);

    return (<>
        <h2> Wellcome To Home Page!</h2>
    </>)
}