import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CryptoState } from "../Context";
import { useEffect, useState } from "react";

import { TextField, createTheme, ThemeProvider } from "@material-ui/core";

function PriceConverter({ coin }) {
  const { currency } = CryptoState();
  const [cyptoprice, setCyptoprice] = useState(
    coin.market_data.current_price[currency.toLowerCase()]
  );
  const [convartedprice, setConvartedprice] = useState(0);

  console.log(coin.market_data.current_price[currency.toLowerCase()]);

  const useStyles = makeStyles((theme) => ({
    container: {
      width: "75%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "30px",
      padding: 40,
    },
    converter: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",

      padding: 40,
    },
    title: {
      fontFamily: "Montserrat",
      fontWeight: "bold",
      fontSize: "1.5rem",
      marginBottom: "20px",
      textAlign: "center",
    },
  }));
  const classes = useStyles();

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      type: "dark",
    },
  });
  return (
    <ThemeProvider theme={darkTheme}>
      <div className={classes.containers}>
        <h1 className={classes.title}>Price Converter</h1>
        <div className={classes.converter}>
          <TextField
            id="outlined-number"
            label={`${coin.symbol} Price`}
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            onChange={(e) => {
              setCyptoprice(e.target.value);
              setConvartedprice(
                e.target.value *
                  coin.market_data.current_price[currency.toLowerCase()]
              );
            }}
            value={
              //show only 7 digits after decimal point
              cyptoprice
            }
          />
          <div className={classes.arraw}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 17"
              aria-hidden="true"
              class="miscellany___StyledIconSwap-sc-1r08bla-1 fZJuOo"
              style={{
                //make it smaller
                width: "20px",
                height: "20px",
                margin: "0px 15px 0px 15px ",
              }}
            >
              <path
                fill="currentColor"
                fill-rule="evenodd"
                d="M11.726 1.273l2.387 2.394H.667V5h13.446l-2.386 2.393.94.94 4-4-4-4-.94.94zM.666 12.333l4 4 .94-.94L3.22 13h13.447v-1.333H3.22l2.386-2.394-.94-.94-4 4z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </div>
          <TextField
            id="outlined-number"
            label={`${currency} Price`}
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
            variant="outlined"
            onChange={(e) => {
              setConvartedprice(e.target.value);
              setCyptoprice(
                e.target.value /
                  coin.market_data.current_price[currency.toLowerCase()]
              );
            }}
            value={convartedprice}
          />
        </div>
      </div>
    </ThemeProvider>
  );
}

export default PriceConverter;
