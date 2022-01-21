import React, { useEffect, useState } from "react";
import axios from "axios";
import NewsCard from "./NewsCard";
import { makeStyles } from "@material-ui/core/styles";
import { CircularProgress } from "@material-ui/core";
import colors from "../config/Colors";

const useStyles = makeStyles({
  news: {
    display: "flex",
    width: "90%",
    flexWrap: "wrap",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "space-around",
  },
});

function News({ coin }) {
  const [news, setNews] = useState([]);
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
      "x-rapidapi-key": `${process.env.REACT_APP_RAPID_KEY}`,
    },
  };

  const fetchNews = async () => {
    const { data } = await axios(options);
    setNews(data.value);
  };

  useEffect(() => {
    fetchNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={classes.news}>
      {!news ? (
        <CircularProgress
          style={{ color: colors.primary }}
          size={250}
          thickness={1}
        />
      ) : (
        news.map((news) => <NewsCard news={news} key={news.id} />)
      )}
    </div>
  );
}

export default News;
