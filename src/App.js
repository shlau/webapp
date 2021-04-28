import backgroundImage from "./assets/unsplash1.jpg";
import "./App.css";
import { makeStyles } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome//free-brands-svg-icons";
import './fonts/OpenSans-Regular.ttf';
const useStyles = makeStyles({
  icons: {
    "& svg": {
      marginRight: 40,
    },
    "& a": {
      color: "black",
    },
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
        textAlign: "center",
      }}
    >
      <span
        style={{
          fontSize: 40,
          fontWeight: "bold",
          fontFamily: "Open Sans",
          color: "#0c0b0f",
        }}
      >
        Sheldon Lau
      </span>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          marginLeft: 35,
        }}
      >
        <a href="https://github.com/shlau">
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
        <a href="tel:+14157794121">
          <FontAwesomeIcon icon={faPhoneAlt} size="lg" />
        </a>
        <a href="mailto: sheldonlau1@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} size="lg" />
        </a>
        <a href="https://www.linkedin.com/in/sheldon-lau">
          <FontAwesomeIcon icon={faLinkedin} size="lg" />
        </a>
      </div>
    </div>
  );
}
function App() {
  const classes = useStyles();
  return (
    <div
      className={classes.icons}
      style={{
        backgroundColor: "#edeef0",
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        height: "100%",
        width: "100%",
      }}
    >
      <Content />
    </div>
  );
}

export default App;
