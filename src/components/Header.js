import {
  AppBar,
  Container,
  MenuItem,
  Select,
  Toolbar,
  Typography,
} from "@material-ui/core";
import "../App.css";
import React from "react";
import {
  makeStyles,
  createTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import { CryptoState } from "../Context";
import colors from "../config/Colors";

const useStyles = makeStyles(() => ({
  title: {
    flex: 1,
    color: colors.primary,
    fontFamily: "Montserrat",
    fontWeight: "bold",
    cursor: "pointer",
  },
}));

function Header() {
  const classes = useStyles();
  const { currency, setCurrency } = CryptoState();
  const { darkMode, setDarkMode } = CryptoState();

  const darkTheme = createTheme({
    palette: {
      primary: {
        main: colors.dtheme.color,
      },
      type: colors.dtheme.type,
    },
  });

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

            <div className="container">
              <span
                className="icon"
                style={{ color: darkMode ? "grey" : "yellow" }}
              >
                ☀︎
              </span>
              <div className="switch-checkbox">
                <label className="switch">
                  <input
                    type="checkbox"
                    onChange={() => setDarkMode(!darkMode)}
                  />
                  <span className="slider round"> </span>
                </label>
              </div>
              <span
                className="icon"
                style={{ color: darkMode ? "#c96dfd" : "grey" }}
              >
                ☽
              </span>
            </div>

            <Select
              variant="outlined"
              style={{
                width: 100,
                height: 40,
                marginRight: 15,
                color: colors.primary,
                outlineColor: colors.primary,
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
