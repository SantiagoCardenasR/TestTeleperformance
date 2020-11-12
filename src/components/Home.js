import React, {useEffect} from 'react'
import {reference} from "../Firebase"
import { Link } from 'react-router-dom'
import { useStateValue } from '../StateProvider';
import "../styles/Home.css"
import User from "./User";

function Home() {
    const [{users}, dispatch] = useStateValue();

    useEffect(() => {
        dispatch({
            type: "EMPTY_USERS"
        })
        reference.child("users").on("value", (snap) => {
            snap.forEach((element) => {
                dispatch({
                    type: "ADD_USER",
                        user: {
                            cc: parseInt(element.val().cc),
                            name: element.val().name,
                            country: element.val().country,
                        }
                })
            })
          })
      }, []);

    return (
        <div className="home">
            <div className="home__title">
                <h1>Welcome to the admin system</h1>
            </div>
            <div className="home__panels">
                <div className="home__leftPanel">
                    <div className="home__row">
                        <Link to="/createUser" className="home__link">
                            <div className="home__option">
                                <p>Create</p>
                            </div>
                        </Link>
                        <Link to="/updateUser" className="home__link">
                            <div className="home__option">
                                <p>Update</p>
                            </div>
                        </Link>
                    </div>
                    <div className="home__row">
                        <Link to="/deleteUser" className="home__link">
                            <div className="home__option">
                                <p>Delete</p>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="home__rightPanel">
                    <div className="home__usersBody">
                        <h2>Current Users</h2>
                        {
                            users?.map((user) => (
                                <User
                                    cc={user.cc}
                                    name={user.name}
                                    country={user.country}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home