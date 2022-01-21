import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "./NewsCard";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  news: {
    display: "flex",
    width: "80%",
    // backgroundColor: "white",
    flexWrap: "wrap",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "space-around",
  },
});

function News({ coin }) {
  const [news, setNews] = React.useState([]);
  const classes = useStyles();

  const options = {
    method: "GET",
    url: "https://bing-news-search1.p.rapidapi.com/news/search",
    params: {
      q: `today ${coin.name} news`,
      count: "10",
      freshness: "Day",
      textFormat: "Raw",
      safeSearch: "Off",
    },
    headers: {
      "x-bingapis-sdk": "true",
      "x-rapidapi-host": "bing-news-search1.p.rapidapi.com",
      "x-rapidapi-key": "30016b0990msh3dd0c6a3daf8220p163266jsn8d986ae9b749",
    },
  };

  const fetchNews = async () => {
    const { data } = await axios(options);
    setNews(data.value);
    console.log(data.value);
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div className={classes.news}>
      {news.map((news) => (
        <NewsCard news={news} />
      ))}
    </div>
  );
}

export default News;
