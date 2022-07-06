import React, { useEffect } from "react";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import user_api_url from "../settings/user_api.js"
import axios from 'axios';
import * as Yup from "yup";

export default function AddUser() {

    useEffect(() => {
        document.title = "Add";
    }, []);

    const initialValues = {
        id: "",
        name: "",
        dob: null,
        user_type: null
    };

    const validationSchema = Yup.object().shape({
        id: Yup.number().required(),
        name: Yup.string().required("You must input a Name!"),
        dob: Yup.date(),
        user_type: Yup.string().min(3).max(15).required("You must input a User Type!"),
    });

    const onSubmit = (data) => {
        console.log(data);
        axios.post(user_api_url, data).then((response) => {
            console.log(response);
        },
            (error) => {
                console.log(error);
            });
    };

    return (<>
        <h3>Add User</h3>
        <div className="createUser">
            <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit} >
                <Form className="formContainer">
                    <label>User Id: </label>
                    <ErrorMessage name="id" component="span" />
                    <Field id="inputUserId" name="id" placeholder="Id" />

                    <label>User Name: </label>
                    <ErrorMessage name="name" component="span" />
                    <Field id="inputUserName" name="name" placeholder="Name" />

                    <label>Birth Date: </label>
                    <ErrorMessage name="dob" component="span" />
                    <Field id="inputUserDob" name="dob" placeholder="Birth date" />

                    <label>User Type: </label>
                    <ErrorMessage name="user_type" component="span" />
                    <Field id="inputUserType" name="user_type" placeholder="Type" />

                    <button type="submit"> Add </button>
                </Form>
            </Formik>
        </div>
    </>)
}