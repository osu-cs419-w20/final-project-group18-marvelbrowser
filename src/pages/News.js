import React, { useState, useEffect } from 'react';

import Article from '../components/Article';

import news from '../data/news.json';

function News(p_obj) {
    const [page, setPage] = useState("News");
    const json = require("../data/news.json");
    const [currentKey, setKey] = useState(parseInt(p_obj.int));
    
    useEffect(() => {
        var temp_title = `${page}`
        if (currentKey!=-1) {
            temp_title += ` (${json[currentKey].title})`
          }
        document.title = temp_title;
    });

    function renderNewsAll() {
        return (
            news.map((newsItem, i) => 
            <a href={"/news/"+(i+1).toString()} style={{textDecoration: "none", color: "#000"}}><Article key={i} id={i} {...newsItem} /></a>
            )
        );
    }


    function renderNewsByIndex(p_obj, p_index) {
        return (
            <Article key={p_index+1} {...p_obj} />
        )
    }

    return (
        <div>
            <h1>News</h1>
            <div>
                {(currentKey==-1) ? renderNewsAll() : renderNewsByIndex(json[currentKey], currentKey)}
            </div>
        </div>
    );
}

export default News;
