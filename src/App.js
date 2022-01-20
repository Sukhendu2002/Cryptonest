import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Homepage from "./Pages/Homepage";
import Coinpage from "./Pages/Coinpage";
import { makeStyles } from "@material-ui/core/styles";

function App() {
  const useStyles = makeStyles(() => ({
    App: {
      backgroundColor: "#1a1a1c",
      height: "100vh",
      color: "#fff",
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
