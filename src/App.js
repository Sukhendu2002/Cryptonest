import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Homepage from "./Pages/Homepage";
import Coinpage from "./Pages/Coinpage";
import { makeStyles } from "@material-ui/core/styles";
import colors from "./config/Colors";
import { CryptoState } from "./Context";

function App() {
  const { darkMode } = CryptoState();
  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: colors.dtheme.background,
      minHeight: "100vh",
      color: colors.dtheme.color,
    },
  }));

  const classes = useStyles();

  return (
    <BrowserRouter>
      <div className={classes.App}>
        <Header />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/coins/:id" element={<Coinpage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
