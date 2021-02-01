import React, { useState, useEffect } from "react";
import SkeletonArticle from "../skeletons/SkeletonArticle";

const Articles = () => {
    const [articles, setArticles] = useState(null);

    useEffect(() => {
        setTimeout(async () => {
            const res = await fetch(
                "https://jsonplaceholder.typicode.com/posts"
            );
            const data = await res.json();
            setArticles(data);
        }, 50000);
    });

    return (
        <div className='my-3 articles'>
            <h4>Articles</h4>
            {articles &&
                articles.map((article) => (
                    <div className='article' key={article.id}>
                        <h5>{article.title}</h5>
                        <p>{article.body}</p>
                    </div>
                ))}
            {!articles &&
                [1, 2, 3, 4, 5].map((n) => <SkeletonArticle key={n} />)}
        </div>
    );
};

export default Articles;
