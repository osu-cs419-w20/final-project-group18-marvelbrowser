import React from 'react';

import Article from '../components/Article';

import news from '../data/news.json';

function News() {
    return (
        <div>
            <h1>News</h1>
            <div>
                {news.map((newsItem, i) => <Article key={i} {...newsItem} />)}
            </div>
        </div>
    );
}

export default News;
