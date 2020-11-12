import React, {useState} from 'react'
import {reference} from '../Firebase';
import { Link, useHistory } from 'react-router-dom'
import {useStateValue} from "../StateProvider";
import "../styles/CreateUser.css"

function CreateUser() {
    const history = useHistory();
    const [{users}, dispatch] = useStateValue();
    const [cc, setCc] = useState(0);
    const [name, setName] = useState("");
    const [country, setCountry] = useState("");

    const createUser = () => {
        if( cc !== undefined && name !== "" && country !== "")
        {
            var updates = {};
            var userData = {
                cc: parseInt(cc),
                name: name,
                country: country,
            };
            updates['users/USR_'+ cc] =  userData;
            reference.update(updates);

            dispatch({
                type: "ADD_USER",
                user: {
                    cc: parseInt(cc),
                    name: name,
                    country: country,
                }
            });
            history.push("/");
        }
    }

    return (
        <div className="createUser">
            <h1>User Creation</h1>
            <div className="createUser__form">
                <div className="createUser__formItem">
                    <p>CC</p>
                    <input type="number" className="createUser__input" onChange={event => setCc(event.target.value)} />
                </div>
                <div className="createUser__formItem">
                    <p>Name</p>
                    <input type="text" className="createUser__input" onChange={event => setName(event.target.value)} />
                </div>
                <div className="createUser__formItem">
                    <p>Country</p>
                    <input type="text" className="createUser__input" onChange={event => setCountry(event.target.value)}  />
                </div>
                <button className="createUser__creationButton" onClick={createUser}>Create User</button>
            </div>
            <Link to="/">
                <button className="createUser__backButton">Back</button>
            </Link>
        </div>
    )
}

export default CreateUser 
