import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@material-ui/core";
import React from "react";
import {
  makeStyles,
  createTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { CryptoState } from "../Context";

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: "gold",
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));

const darkTheme = createTheme({
  palette: {
    primary: {
      main: "#fff",
    },
    type: "dark",
  },
});

function Header() {
  const classes = useStyles();
  const { currency, setCurrency } = CryptoState();

  console.log(currency);

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar color="transparent" position="static">
        <Container>
          <Toolbar>
            <Link to="/" className={classes.title}>
              <Typography className={classes.title} variant="h6">
                CryptoNest
              </Typography>
            </Link>

            <Select
              variant="outlined"
              style={{
                width: 100,
                height: 40,
                marginRight: 15,
              }}
              value={currency}
              onChange={(e) => setCurrency(e.target.value)}
            >
              <MenuItem value={"USD"}>USD</MenuItem>
              <MenuItem value={"INR"}>INR</MenuItem>
            </Select>
          </Toolbar>
        </Container>
      </AppBar>
    </ThemeProvider>
  );
}

export default Header;
