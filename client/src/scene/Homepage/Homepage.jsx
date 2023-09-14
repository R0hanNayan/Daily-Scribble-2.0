import React, { useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import Posts from "../Posts/Posts"
import Compose from "../Compose/Compose";
import Home from "../../components/Home/Home";
import './homepage.css'

function Homepage({ setLoggedUser, user }) {
    const [pageType, setPage] = useState("homepage");

    const handleClick = (e) => {
        setPage(e);
    }

    return (
        <div>
            <Navbar handleClick={handleClick} user={user} setLoggedUser={setLoggedUser}/>
            {pageType === "homepage" ? (
                <div>
                    <Home />

                </div>
            ) : (
                pageType === "compose" ? (
                    <div>
                        <Compose handleClick={handleClick} />
                    </div>
                ) : (
                    pageType === "posts" ? (
                        <div>
                            <Posts />
                        </div>
                    ) : (
                        null
                    )
                )
            )
            }
        </div>
    )
};

export default Homepage;