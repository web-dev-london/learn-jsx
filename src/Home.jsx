import { useState, useEffect } from "react";
import BlogList from "./BlogList";
import UseFetch from "./UseFetch";

const urlData = 'http://dummyjson.com/users?limit=5&skip=10&select=firstName,age,lastName,gender,email,phone'

const Home = () => {
    const { data, error, isLoading } = UseFetch(urlData)

    return (
        <>
            {error && <p>Sorry, {error}</p>}
            {isLoading && <p>Loading...</p>}
            <div className="home">
                <h1>All Users</h1>
                {data && <BlogList
                    user={data}
                />
                }
            </div>
        </>
    );
}

export default Home;