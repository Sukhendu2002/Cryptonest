import { makeStyles } from "@material-ui/core";
import colors from "../config/Colors";
import { CryptoState } from "../Context";

const SelectButton = ({ children, selected, onClick }) => {
  const { darkMode } = CryptoState();
  const useStyles = makeStyles({
    selectbutton: {
      border: "1px solid ",
      borderColor: selected ? colors.primary : colors.secondary,
      borderRadius: 5,
      padding: 10,
      paddingLeft: 20,
      paddingRight: 20,
      fontFamily: "Montserrat",
      cursor: "pointer",
      backgroundColor: selected ? colors.primary : "",
      color: selected ? "black" : "",
      fontWeight: selected ? 700 : 500,
      "&:hover": {
        backgroundColor: colors.primary,
        color: colors.dtheme.color,
      },
      width: "22%",
      //   margin: 5,
    },
  });

  const classes = useStyles();

  return (
    <span onClick={onClick} className={classes.selectbutton}>
      {children}
    </span>
  );
};

export default SelectButton;
