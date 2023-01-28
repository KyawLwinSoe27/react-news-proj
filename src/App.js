import React, {useEffect, useState} from 'react';
import Card from "./components/Card";
import "./style.css";
import axios from "axios";
import {logDOM} from "@testing-library/react";

const App = () => {
    const url = "https://newsapi.org/vs/everything?domains=wsj.com&apiKey=a526b2b49d1849beaf2494b29a24062d";
    const [posts, setPost] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [isError, setError] = useState(false);

    // async function getPosts() {
    //     setIsLoading(true);
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     if(response.status > 300){
    //         setIsLoading(true);
    //         setError(true);
    //     }
    //
    //     setPost(data.articles);
    //     if(posts){
    //         setIsLoading(false);
    //     }
    // }

    const fetchPosts = () => {
        axios.get(url)
            .then((response) => {
                const data = response?.data;
                const articles = data?.articles;
                setPost(articles);
                if (posts) {
                    setIsLoading(false);
                }
                console.log(response.status);
            })
            .catch((err) => {
                setIsLoading(false);
                setError(true);
                console.log(err + "Error is working")
            });
    }

    useEffect(() => {
        console.log("Use Effect is rendered");
        // getPosts();
        fetchPosts();
    }, []);


    console.log("Component is rendered");
    if (isLoading) {
        return <div className="lds-hourglass"></div>
    }
    if (isError) {
        return <div>

            <p>
                Oops: Data Fetching can't display on public because I use free News API in this project.
                <a href="https://github.com/KyawLwinSoe27/react-news-proj" target="_blank">Dowonload github link</a> and run on your localhost to display web app.

            </p>


            <iframe width="100%" height="520" src="https://www.youtube.com/embed/CHwuDxR4WjQ?autoplay=1"
                    title="SciFi Linux Terminal (CLI) Like Hacker On Movie"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen></iframe>
        </div>
    }
    return (
        <section>
            <h2 id="up" className="title">World Update News</h2>
            <div className="card-list">
                {
                    posts.map((post) => {
                        return (
                            <Card key={Math.random()} {...post}/>
                        )
                    })
                }
            </div>
            <footer className="footer"><span>Copyright &#169; 2023 Kyaw Lwin Soe</span> <a href="#up"
                                                                                           className="icon"><i
                className="fa-solid fa-angle-up"></i></a></footer>
        </section>
    )
}

export default App;