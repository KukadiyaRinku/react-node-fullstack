import React from 'react'
import '../css/User.css'

//className="text-center"
export default function User({ user }) {
    return (
        <>
            <div className='user'>
                <div className='title'>{user.name} </div>
                <div className='description'>
                    <p>
                        Birth Date: {user.dob}
                        Type: {user.user_type}
                    </p>
                </div>
                <div className='footer'>
                    <div>Welcome {user.name}</div>
                    {/* <Button color="warning">Update</Button>{' '}
                    <Button color="danger">Delete</Button> */}
                </div>
            </div>
        </>
    )
}
