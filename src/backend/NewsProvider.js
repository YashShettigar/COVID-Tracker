import React from "react"
import axios from 'axios'

export const getNews = () => {
    return axios.get('http://newsapi.org/v2/top-headlines?language=en&q=covid&apiKey=7917f45b677d45838e01acb102f98d32')
    .then(res => {
        const newsFeed = []
        for (article of res.data.articles){
            newsFeed.push({
                author: article.author || 'Anonymous',
                title: article.title,
                desc: article.description,
                url: article.url,
                imgUrl: article.urlToImage || 'https://upload.wikimedia.org/wikipedia/commons/e/eb/Blank.jpg',
                published: article.publishedAt
            })
            if (newsFeed.length > 20) {
                break
            }
        }
        return Promise.resolve(newsFeed)
    })
    .catch(err => {
        console.log(err)
    })
}