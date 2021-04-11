import backgroundImage from "./assets/unsplash1.jpg";

import "./App.css";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles({
  profile: {
    margin: "20px 0px 0px 20px",
    padding: 1,
    height: 300,
    width: 300,
    objectFit: "scale-down",
  },
});

function Content(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        justifyContent: "center",
        alignContent: "center",
        textAlign:'center'
      }}
    >
      <span
        style={{
          fontSize: 40,
          fontWeight: "bold",
          fontFamily: 'Open Sans',
          color: "#0c0b0f",
        }}
      >
        Sheldon Lau
      </span>
    </div>
  );
}
function App() {
  const classes = useStyles();
  return (
    <div
      style={{
        backgroundColor: "#282c34",
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100%",
        width: "100%",
      }}
    >
      {/* <Header className={classes.profile} /> */}
      <Content />
    </div>
  );
}

export default App;
