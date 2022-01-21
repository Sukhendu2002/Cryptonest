import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  newsCard: {
    display: "flex",
  },
});

function NewsCard({ news }) {
  const classes = useStyles();
  return (
    //make a butiful and cool news card
    <div className={classes.newsCard}>
      <h1>{news.name}</h1>
      <p>{news.description}</p>
      <p>{news.url}</p>
      <img src={news.image.thumbnail.contentUrl} alt={news.name} />
    </div>
  );
}

export default NewsCard;
