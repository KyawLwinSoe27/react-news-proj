import React, {useEffect, useState} from 'react';
import Card from "./components/Card";
import "./style.css";

const App = () => {
    const url = "https://newsapi.org/v2/everything?domains=wsj.com&apiKey=a526b2b49d1849beaf2494b29a24062d";
    const [posts, setPost] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setError] = useState(false);

    async function getPosts() {
        setIsLoading(true);
        const response = await fetch(url);
        const data = await response.json();
        if(response.status > 300){
            setIsLoading(true);
            setError(true);
        }

        setPost(data.articles);
        if(posts){
            setIsLoading(false);
        }
    }

    useEffect(() => {
        console.log("Use Effect is rendered");
        getPosts();
    }, []);



    console.log("Component is rendered");
    if(isLoading){
        return <div className="lds-hourglass"></div>
    }
    if (isError) {
        return <div>Oops: Data Fetching is failed</div>
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
            <footer className="footer"><span>Copyright &#169; 2023 Kyaw Lwin Soe</span> <a href="#up" className="icon"><i
                className="fa-solid fa-angle-up"></i></a></footer>
        </section>
    )
}

export default App;