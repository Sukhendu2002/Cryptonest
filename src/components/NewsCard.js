import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  CButton,
  CCard,
  CCardImage,
  CCardBody,
  CCardText,
  CCardTitle,
} from "@coreui/react";
import colors from "../config/Colors";
import { CryptoState } from "../Context";
const demoImage =
  "https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News";

function NewsCard({ news }) {
  const { darkMode } = CryptoState();
  
  
  const useStyles = makeStyles({
    newsCard: {
      color: colors.dtheme.color,
    },
  });
  const classes = useStyles();

  return (
    <>
      <CCard
        style={{
          width: "300px",
          backgroundColor: colors.dtheme.background,
          color: colors.dtheme.color,
          border: "1px solid",
          borderColor: colors.primary,
          margin: "10px",
          padding: "10px",
          borderRadius: "10px",
        }}
        className={classes.newsCard}
      >
        <CCardImage
          orientation="top"
          src={`${news?.image?.thumbnail?.contentUrl}.jpg` || demoImage}
          style={{
            width: "100%",
            height: "200px",
          }}
        />
        <CCardBody>
          <CCardTitle>{news.name}</CCardTitle>
          <CCardText>{news.description.substring(0, 100)}</CCardText>
          <CButton href={news.url} target="_blank">
            See More
          </CButton>
        </CCardBody>
      </CCard>
    </>
  );
}

export default NewsCard;
