import React from 'react';
import "./card.css";

const Card = (props) => {
    const {title,author,urlToImage,content,publishedAt} = props;
    return (
        <div className="card">
            <img className="card-img" src={urlToImage} alt=""/>
            <h4 className="card-title">{title}</h4>
            <p className="content">{content}</p>
            <hr/>
            <div className="bottom">
                <h4 className="author">{author}</h4>
                <p className="post-date">{publishedAt.slice(0,10)}</p>
            </div>
        </div>
    )
}

export default Card;