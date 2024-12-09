import { useState, useEffect } from "react"

function Homepage() {

    const CLIENT_ID = "c9a22be1cf654756b4db5a5ff15b25ef"
    const REDIRECT_URI = "http://localhost:3000/"
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
    const RESPONSE_TYPE = "token"

    const [token, setToken] = useState("")


    useEffect(() => {
        const hash = window.location.hash
        let token = window.localStorage.getItem("token")


        if (!token && hash) {
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]

            window.location.hash = ""
            window.localStorage.setItem("token", token)
        }

        setToken(token)

    }, [])

    const logout = () => {
        setToken("")
        window.localStorage.removeItem("token")
    }

    return (
        <div className='text-white-1'>
            <h1>Spotify React</h1>
            {!token ?
                <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login
                    to Spotify</a>
                : <button onClick={logout}>Logout</button>}

            {token ?
                <div>
                    <h1>Logged in!</h1>
                </div>
                : <h2>Please login</h2>
            }
        </div>
    );
}

export default Homepage