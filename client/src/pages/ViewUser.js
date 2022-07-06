import React, { useEffect, useState } from "react";
import axios from 'axios';
import User from "../componant/User.js"
import user_api_url from "../settings/user_api.js"

export default function ViewUser() {
    const [listOfUsers, setListOfUsers] = useState([]);
    const getUserList = () => {
        axios.get(`${user_api_url}`).then((response) => {
            setListOfUsers(response.data);
        },
            (error) => {
                console.log(error);
            });
    };

    useEffect(() => {
        document.title = "View";
        getUserList();
    }, []);

    return (
        <div >
            <h3>All Users</h3>
            {
                listOfUsers.length > 0 ?
                    listOfUsers.map((item) => <User key={item.id} user={item}> </User>)
                    : <div>No User Availabe. </div>
            }
        </div>
    );
}