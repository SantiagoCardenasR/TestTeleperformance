import React, { useState } from 'react'
import {reference} from '../Firebase';
import {Link, useHistory} from "react-router-dom"
import {useStateValue} from "../StateProvider";
import "../styles/DeleteUser.css"

function DeleteUser() {
    const history = useHistory();
    const [{users}, dispatch] = useStateValue();
    const [cc, setCc] = useState(0);

    const deleteUser = () => {
        var updates = {};
        //Remove user from dataBase
        updates['users/USR_'+ cc] = null
        reference.update(updates);

        dispatch({
            type: "DELETE_USER",
            cc: cc
        });
        history.push("/");
    }

    return (
        <div className="deleteUser">
            <h1>User Delete</h1>
            <div className="deleteUser__form">
                <div className="deleteUser__formItem">
                    <p>CC</p>
                    <input type="number" className="deleteUser__input" onChange={event => setCc(event.target.value)} />
                </div>
                <button className="deleteUser__creationButton" onClick={deleteUser}>Delete User</button>
            </div>
            <Link to="/">
                <button className="deleteUser__backButton">Back</button>
            </Link>
        </div>
    )
}

export default DeleteUser
