import React, {useState} from 'react'
import {reference} from '../Firebase';
import { Link, useHistory } from 'react-router-dom'
import {useStateValue} from "../StateProvider";
import "../styles/UpdateUser.css"

function UpdateUser() {
    const history = useHistory();
    const [{users}, dispatch] = useStateValue();
    const [cc, setCc] = useState(0);
    const [name, setName] = useState("");
    const [country, setCountry] = useState("");

    const updateUser = () => {
        if( cc !== undefined && name !== "" && country !== "")
        {
            dispatch({
                type: "UPDATE_USER",
                user: {
                    cc: parseInt(cc),
                    name: name,
                    country: country,
                }
            });

            var updates = {};
            var userData = {
                cc: parseInt(cc),
                name: name,
                country: country,
            };
            updates['users/USR_'+ cc] =  userData;
            reference.update(updates);
            
            history.push("/");
        }
    } 

    return (
        <div className="updateUser">
            <h1>User Update</h1>
            <div className="updateUser__form">
                <div className="updateUser__formItem">
                    <p>CC</p>
                    <input type="number" className="updateUser__input" onChange={event => setCc(event.target.value)} />
                </div>
                <div className="updateUser__formItem">
                    <p>Name</p>
                    <input type="text" className="updateUser__input" onChange={event => setName(event.target.value)} />
                </div>
                <div className="updateUser__formItem">
                    <p>Country</p>
                    <input type="text" className="updateUser__input" onChange={event => setCountry(event.target.value)}  />
                </div>
                <button className="updateUser__creationButton" onClick={updateUser}>Update User</button>
            </div>
            <Link to="/">
                <button className="updateUser__backButton">Back</button>
            </Link>
        </div>
    )
}

export default UpdateUser