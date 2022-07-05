import React from 'react'
import { Card, CardBody } from 'reactstrap'

export default function Header() {
    return (
        <>
            <Card className="my-1 bg-warning">
                <CardBody>
                    <h1 className="text-center my-1" > Welcome To Demo React-Node-Fullstack App </h1>
                </CardBody>
            </Card>
        </>
    )
}
