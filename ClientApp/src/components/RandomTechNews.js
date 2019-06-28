import React, { useState, useEffect } from 'react'
import '../components/RandomTechNews.css'

function RandomTechNews() {
  const [RandomTechNews, setRandomTechNews] = useState([])

  useEffect(() => {
    fetch('https://news-proxy-server.appspot.com/topstories')
      .then(response => response.json())
      .then(json => setRandomTechNews(json))
  }, [])

  return (
    <div className="randomTechNews">
      <h1>Top Tech News</h1>
      {RandomTechNews.map(RandomTechNew => {
        const { id, by, time, title, url } = RandomTechNew

        return (
          <div key={id}>
            <a href={url}>{title}</a>
            <div>
              {by} - {new Date(time).toLocaleString}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default RandomTechNews
