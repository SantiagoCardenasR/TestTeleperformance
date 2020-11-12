import React from 'react'

function User({cc, name, country}) {
    return (
        <div className="user">
            <span className="home__user">
                <p className="home__usersCC">{cc}</p>
                <p className="home__usersName">{name}</p>
                <p className="home__usersCountry">{country}</p>
            </span>
        </div>
    )
}

export default User
